/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  
  return (
    
  <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.title} className="movie-card">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-release-date">Release date: {movie.release_date}</p>
          <p className="movie-opening-crawl">{movie.opening_crawl}</p>
          <a className="movie-more-info">More info</a>
        </div>
      ))}
    </div>
  );
}

export default App;
