import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Backup from "../assets/images/backup.png";
import useTitle from '../hooks/useTitle';

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [])

  useTitle(movie.title);

  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded' src={image} alt={movie.title} />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3'>{movie.title}</h1>
          <p className='my-4'>{movie.overview}</p>
          {movie.genres ? (
            <p className='my-7 flex flex-wrap gap-2'>
              {movie.genres.map((genre) => (
                <span className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2' key={genre.id}>{genre.name}</span>
              ))}
            </p>
          ) : ""}

          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" /></svg>
            <p className="ml-2 text-sm text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          </div>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Runtime: </span>
            <span> {movie.runtime} mins </span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Budget: </span>
            <span> {movie.budget} </span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Revenue: </span>
            <span> {movie.revenue} </span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Release Date: </span>
            <span> {movie.release_date} </span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>IMDB Code: </span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer">{movie.imdb_id}</a>
          </p>

        </div>
      </section>
    </main>
  )
}

export { Movie }