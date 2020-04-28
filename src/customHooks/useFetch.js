import {useState, useEffect} from 'react';

function useFetch(url, minutes) {
  // console.log('ffffafsa');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    // const response = await fetch(url);
    // const json = await response.json();
    // console.log('json: ', json);
    console.log('fetching again');
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData({data}))
      .then(() => setLoading(false))
      .catch((error) => {});
  }

  useEffect(() => {
    fetchUrl();
    // setLoading(false);
  }, [minutes]);
  return [data, loading];
}
export default useFetch;
