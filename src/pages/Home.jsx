import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to the Movie Database</h1>
        <p>
          Discover your favorite movies, explore detailed information, and manage your own movie list!
        </p>
        <Link to="/movies" className="explore-btn">Explore Movies</Link>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Browse through a wide variety of movies from different genres.</li>
          <li>View detailed information for each movie including release date, genre, and description.</li>
          <li>Sort and filter movies by title, release date, and genre to find your next movie.</li>
          <li>Manage your own movie collection by adding, editing, or deleting movies.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>About</h2>
        <p>
          This application allows users to search, explore, and manage a collection of movies. Whether you're looking for a thrilling action movie or a heartwarming drama, you'll find something here.
        </p>
        <p>
          Our movie database is powered by an easy-to-use interface and supports dynamic features such as sorting, filtering, and viewing detailed movie information. Enjoy your experience!
        </p>
      </div>
    </div>
  );
};

export default Home;

