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

weekday[0] = 'MON';
weekday[1] = 'TUE';
weekday[2] = 'WED';
weekday[3] = 'THU';
weekday[4] = 'FRI';
weekday[5] = 'SAT';
weekday[6] = 'SUN';

const pictureURL = 'http://openweathermap.org/img/wn/';

const getTime = () => {
  let date = new Date();
  return `${date.getHours()} : ${date.getMinutes()}`;
};

const getDay = (date) => {
  return new Date(date).getDay();
};

function App() {
  const [fetch, setFetch] = useState(0);

  const [currTime, setCurrTime] = useState(getTime);
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
    setCurrTime(getTime);
  }, 6000000);

  function list1(data) {
    var result = [];
    var day = -1;
    while (day < 7) {
      day += 1;
      for (let i = 0; i < 39; i++) {
        if (getDay(data?.data?.list[i].dt_txt) === day) {
          result.push(data?.data?.list[i]);
          break;
        }
      }
    }
    return result;
  }

  const list = (data) => {
    console.log(list1(data));
    return list1(data).map((d) => (
      <DayCard
        day={weekday[getDay(d.dt_txt)]}
        temperature={d.main.temp + '°'}
        image={`${pictureURL}${d.weather[0].icon}.png`}
      ></DayCard>
    ));
  };

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
      {!loading && list(data)}
    </div>
  );
}

export default App;
