import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Card } from '../components';
import useTitle from '../hooks/useTitle';

const Search = ({api}) => {
 
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const {data : movies} = useFetch(api, query);

  useTitle(`Search results for "${query}"`);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}

export {Search}