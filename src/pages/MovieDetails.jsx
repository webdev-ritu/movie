import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://fancy-solstice-caboc.glitch.me/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  return (
    <div className='movie-details'>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.poster} alt={movie.title} />
          <p>{movie.description}</p>
          <Link className='back-btn' to="/movies">Back to Movies</Link>
        </>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default MovieDetails;
