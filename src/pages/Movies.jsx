import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortOption, setSortOption] = useState('title'); // Default sort by title
  const [filterGenre, setFilterGenre] = useState(''); // Filter by genre (empty means no filter)

  useEffect(() => {
    fetch('https://fancy-solstice-caboc.glitch.me/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched Movies Data:', data); // Debugging: Check fetched data
        // Check if the response is an array
        if (Array.isArray(data)) {
          setMovies(data);
        } else if (data && data.movies && Array.isArray(data.movies)) {
          // Handle case where data is an object and movies is a field
          setMovies(data.movies);
        } else {
          setError('Invalid movie data format');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies');
        setLoading(false);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const filteredMovies = filterGenre
    ? movies.filter((movie) => movie.genre.toLowerCase().includes(filterGenre.toLowerCase()))
    : movies;

  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'releaseDate') {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    } else if (sortOption === 'genre') {
      return a.genre.localeCompare(b.genre);
    }
    return 0;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (sortedMovies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <div className="movies-container">
      <h2>Movies List</h2>

      {/* Sorting and Filtering Controls */}
      <div className="controls">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="title">Title</option>
          <option value="releaseDate">Release Date</option>
          <option value="genre">Genre</option>
        </select>

        <label htmlFor="filter">Filter by Genre:</label>
        <select id="filter" value={filterGenre} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          {/* Add more genres as needed */}
        </select>
      </div>

      {/* Movie Cards */}
      <div className="movie-cards">
        {sortedMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.id}`} className="view-more-btn">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;


