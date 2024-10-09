import { useState, useEffect } from 'react';
import React from 'react';
import './NewMovies.css';
import { Link, useNavigate } from 'react-router-dom';

const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetchMovies();
  }, []);

  const fetchMovies = async () => {
      try {
          const response = await fetch('https://movie-data-three.vercel.app/api/New-movies');
          const data = await response.json();
          setMovies(data); // Set movies data in state
      } catch (error) {
          console.error('Error fetching movie data:', error);
      }
  };

  const redirectToMovieDetails = (id) => {
      console.log('Redirecting to movie details for ID:', id);
      navigate(`/TestingApi?movieId=${id}`);
  };
   
  return (
    <div>
    <div className='heading'>
      <details>
        <summary className='popular-headings'>
          <h1>New Movies and TV Shows – JustWatch India</h1>
        </summary>
        <div>
          <p>
            We are glad you're here! With JustWatch you can easily find where to watch your favourite movies & TV series on streaming services in India.
            JustWatch is easy and effective: choose your favourite streaming services in the WatchBar below and see what’s on Netflix, Amazon Prime Video India, Hotstar, and many more.
            This guide is organized by popularity to help you find today's most popular movies and TV shows in India. To find titles relevant to your taste, you can filter your results by release year, age rating, genre, price, and more. We also offer a great overview of what’s new on streaming services and a guide to upcoming movies and TV shows.
          </p>
        </div>
      </details>
    </div>
  
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <div className="container">
              <div className="service-icons ">
                <img src="https://www.justwatch.com/images/icon/207360008/s100/netflix.%7Bformat%7D/icon.webp" alt="Netflix" />
                <img src="https://www.justwatch.com/images/icon/52449861/s100/amazonprimevideo.%7Bformat%7D/icon.webp" alt="Prime Video" />
                <img src="https://www.justwatch.com/images/icon/152862153/s100/appletvplus.%7Bformat%7D/icon.webp" alt="Apple TV" />
                <img src="https://www.justwatch.com/images/icon/190848813/s100/itunes.%7Bformat%7D/icon.webp" alt="Apple Prime" />
                <img src="https://www.justwatch.com/images/icon/312325227/s100/jiocinema.%7Bformat%7D/icon.webp" alt="Jio Cinema" />
  
                <img src="https://images.justwatch.com/icon/201704934/s100/hungamaplay.%7Bformat%7D/icon.webp" alt="humgama play" />
                <img src="https://images.justwatch.com/icon/208171262/s100/epicon.%7Bformat%7D/icon.webp" alt="epic on" />
                <img src="https://images.justwatch.com/icon/208147531/s100/shemaroome.%7Bformat%7D/icon.webp" alt="shemqaroo me" />
                <img src="https://images.justwatch.com/icon/208148387/s100/docsville.%7Bformat%7D/icon.webp" alt="docsville" />
                <img src="https://images.justwatch.com/icon/286806073/s100/tatasky.%7Bformat%7D/icon.webp" alt="tata play" />
                <img src="https://images.justwatch.com/icon/240558410/s100/discoveryplus.%7Bformat%7D/icon.webp" alt="discovery plus" />
                <img src="https://images.justwatch.com/icon/208852613/s100/manoramamax.%7Bformat%7D/icon.webp" alt="manorama max" />
                <img src="https://images.justwatch.com/icon/210188316/s100/mxplayer.%7Bformat%7D/icon.webp" alt="mx player" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <div className="container">
              <div className="service-icons">
                <img src="https://images.justwatch.com/icon/93795879/s100/zee5.%7Bformat%7D/icon.webp" alt="Zee5" />
                <img src="https://images.justwatch.com/icon/169478387/s100/play.%7Bformat%7D/icon.webp" alt="Google Play" />
                <img src="https://images.justwatch.com/icon/207468084/s100/sonyliv.%7Bformat%7D/icon.webp" alt="Sony Liv" />
                <img src="https://images.justwatch.com/icon/59562423/s100/youtube.%7Bformat%7D/icon.webp" alt="YouTube" />
  
                <img src="https://images.justwatch.com/icon/240831409/s100/spamflix.%7Bformat%7D/icon.webp" alt="spam flix" />
                <img src="https://images.justwatch.com/icon/242563117/s100/aha.%7Bformat%7D/icon.webp" alt="aha" />
                <img src="https://images.justwatch.com/icon/301832745/s100/plex.%7Bformat%7D/icon.webp" alt="plex" />
                <img src="https://images.justwatch.com/icon/243229654/s100/wowpresentsplus.%7Bformat%7D/icon.webp" alt="wow present plus" />
                <img src="https://images.justwatch.com/icon/243233518/s100/magellantv.%7Bformat%7D/icon.webp" alt="magellantv" />
                <img src="https://images.justwatch.com/icon/243239329/s100/broadwayhd.%7Bformat%7D/icon.webp" alt="brody way" />
                <img src="https://images.justwatch.com/icon/269433194/s100/filmzie.%7Bformat%7D/icon.webp" alt="filmzie" />
                <img src="https://images.justwatch.com/icon/313528599/s100/lionsgateplay.%7Bformat%7D/icon.webp" alt="liosgate play" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  
    <div className="filters">
      <Link href="http://localhost:3000/home" className="active">All</Link>
      <Link href="http://localhost:3000/popular">Movies</Link>
      <Link href="http://localhost:3000/popular">TV Shows</Link>
      <div className="dropdown">
        <button className="dropdown-button">Release year ▼</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Genres ▼</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Price ▼</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Rating ▼</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Age Rating ▼</button>
      </div>
      <Link href="http://localhost:3000/Newmovies" className="reset"> RESET</Link>
    </div>
  
    <div className="all-newmovie-cards">
  <div className="row g-4">
    {movies.map(movie => (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={movie.id}>
        <div className="newmovie-card" onClick={() => redirectToMovieDetails(movie.id)}>
          <img 
            src={movie.posterImage} 
            className="card-img-top" 
            alt={`${movie.title} Poster`} 
            loading='lazy' 
          />
        </div>
      </div>
    ))}
  </div>
</div>

  </div>
  


  );
};

export default NewMovies;



      