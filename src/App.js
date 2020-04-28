import React, {useState, useEffect} from 'react';
import useFetch from './customHooks/useFetch';
import useInterval from './customHooks/useInterval';

import './App.css';
import LoadingBar from './components/loadingBar';
import TodayCard from './components/todayCard';
import DayCard from './components/dayCard';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/ProgressBar';
// import Row from 'react-bootstrap/ProgressBar';

import 'bootstrap/dist/css/bootstrap.css';

var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

function App() {
  const [fetch, setFetch] = useState(0);

  // console.log(date.getHours() + ':' + date.getMinutes());
  const getDate = () => {
    let date = new Date();
    return `${date.getHours()} : ${date.getMinutes()}`;
  };
  const [currTime, setCurrTime] = useState(getDate);
  const [data, loading] = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    0
  );
  const [currData, loadingCurrData] = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    fetch
  );
  useInterval(() => {
    setFetch(fetch + 1);
    setCurrTime(getDate);
  }, 6000000);

  console.log('data, loading: ', data.data);
  // console.log('currData, loading: ', currData.data);
  // console.log(fetch);
  console.log('day', weekday[new Date(data?.data?.list[0]?.dt_txt).getDay()]);

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '2000px',
      }}
    >
      {!loadingCurrData && (
        <TodayCard
          city={currData.data.name}
          temperature={currData.data.main.temp + '°'}
          time={currTime}
        ></TodayCard>
      )}
      {/* <TodayCard
        city={'currData.data.name'}
        temperature={'currData.data.main.temp'}
        time={'currTime'}
      ></TodayCard> */}
      <DayCard day={'Monday'} temperature={'3°'}></DayCard>
      <DayCard day={'Monday1'} temperature={'3°'}></DayCard>
      <DayCard day={'Monday2'} temperature={'3°'}></DayCard>
    </div>
  );
}

export default App;
