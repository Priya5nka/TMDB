import { useEffect, useState } from 'react'

const useFetch = (api, query="") => {

    const[data, setData] = useState([]);
   
    const url = `https://api.themoviedb.org/3/${api}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`;

    useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results); 
    }
    fetchMovies();
  }, [url])

  return (
    {data}
  )
}

export default useFetch
