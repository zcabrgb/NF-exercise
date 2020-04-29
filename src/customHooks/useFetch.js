import {useState, useEffect} from 'react';

function useFetch(url, minutes) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData({data}))
      .then(() => setLoading(false))
      .catch();
  }

  useEffect(() => {
    fetchUrl();
  }, [minutes]);
  return [data, loading];
}
export default useFetch;
