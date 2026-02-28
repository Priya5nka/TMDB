import {Route, Routes} from 'react-router-dom'
import {Movies, Movie, Search, PageNotFound} from '../pages'

const AllRoutes = () => {
  return (
    <div className='dark:bg-darkbg'>
      <Routes>
        <Route path='/' element={<Movies api='movie/now_playing' title='Now Playing'/>}/>
        <Route path='movies/popular' element={<Movies api='movie/popular' title='Popular Movies'/>} />
        <Route path='movies/top' element={<Movies api='movie/top_rated' title='Top Rated Movies'/>} />
        <Route path='movies/upcoming' element={<Movies api='movie/upcoming' title='Upcoming Movies'/>} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='search' element={<Search api='search/movie'/>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
