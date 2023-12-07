import { useState, useEffect } from 'react';
import './App.css';
import './search.svg';
import MoviCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=152abb22';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('spiderman');
  }, [])

  return (
    <div>
      <h1>Movie Zone</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src='{SearchIcon}'
          alt='search icon'
          onClick={() => searchMovies('searchTerm')}
        />

        {
          movies?.length > 0
            ? (
              <div className='container'>
                {movies.map((movie) =>
                  <MovieCard movie={movie} />
                )}
              </div>
            ) : (
              <div className='empty'>
                <h2>No movies found</h2>
              </div>
            )
        }
      </div>

    </div>
  );
}

export default App;
