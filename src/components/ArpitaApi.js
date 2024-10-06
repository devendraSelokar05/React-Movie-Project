
import React from 'react';
import { useEffect, useState } from 'react';
import "./ArpitaApi.css";
import { Link } from 'react-router-dom';

const ArpitaApi = () => {
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [videoId, setvideoId] = useState('')
  
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('movieId');
  
    useEffect(() => {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(`https://popular-movie.vercel.app/api/Popular-movies/${movieId}`);
          const data = await response.json();
          setMovieData(data);
          setvideoId(data.videoId);
  
        } catch (error) {
          console.error('Error fetching movie details:', error);
        } 
        finally {
          setLoading(false);
        }
      };
  
      if (movieId) {
        fetchMovieDetails();
      } else {
        console.error('Movie ID not found in URL parameters.');
        setLoading(false);
      }
    }, [movieId]);
  
    const handlePlayButtonClick = () => {
      if (videoId) {
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        // Redirecting to the video URL in the same tab
        window.location.href = videoUrl; // Same tab par URL change kiya
      }
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!movieData) {
      return <div>No movie data found.</div>;
    }
  
    return (
  <div className="container-fluid mt-4">
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="card">
          <div className="info p-3">
            <h1>{`${movieData?.title || ''} (${movieData?.year || ''})`}</h1>
            <div className="ratings">
              <span className="rank">{`0${movieData?.rank || ''}.`} <span className="change">{movieData?.rankChange || ''}</span></span>
              <span className="separator">-</span>
              <span className="percent"><i className="bi bi-play-fill text-warning"></i> {`${movieData?.rating || ''}%`}</span>
              <span className="separator">-</span>
              <span className="imdb"><span className="bg-warning text-black-50">IMDb</span> {`${movieData?.imdbRating || ''} (${movieData?.imdbVotes || ''})`}</span>
              <span className="separator">-</span>
              <span className="rating">{movieData?.certificate || ''}</span>
              <span className="separator">-</span>
              <span className="duration">{movieData?.duration || ''}</span>
            </div>
            <div className="buttons mt-2">
              {['Where to Watch', 'Watch for Free', 'Synopsis', 'Trailer', 'Streaming Charts', 'Similar titles'].map((text, index) => (
                <Link key={index} to="#" className="btn btn-outline-light w-100 mb-2">{text}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className='image'>
        <img src={movieData?.backdropImage || ''} alt="Loading..." style={{ width: '100%', height: '100%', cursor: 'pointer' }} />
         {/* PlayButton */}
         <div class="play-button" onClick={handlePlayButtonClick}>
            <i class="bi bi-play"></i>
          </div>
        </div>
     
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-5 mb-3 ">
        {/* Watch Section */}
        <div className="watch-section border p-3 rounded">
          <h3 className="text-white">Watch Now</h3>
          <div id="watch-options">
            {movieData?.watchOptions?.map((option, index) => (
              <div key={index} className="watch-option">
                <i className="fas fa-tv"></i> {option.platform} ({option.price})
                <button className="btn btn-warning float-end"><i className="fas fa-play"></i> Watch</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-7 mb-3">
        {/* About the Movie Section */}
        <div className="card">
          <div className="card-body d-flex flex-column align-items-center">
            <img src={movieData?.posterImage || ''} className="img-fluid mb-3" alt="Loading..." style={{ width: '290px', height: '370px' }} />
            <div className="flex-grow-1 text-center">
              <h5 className="card-title">ABOUT THE MOVIE</h5>
              <span className="rank"><i className="bi bi-play-fill fs-2"></i><span>{`0${movieData?.rank || ''}.`} <span className="change">{movieData?.rankChange || ''}</span></span></span>
              <p className="card-text">Highest: <span className="text-white">{movieData?.highestRank || ''}</span></p>
              <p className="card-text">Top 10: <span className="text-white">{movieData?.top10Days || ''}</span></p>
              <p className="card-text">Top 100: <span className="text-white">{movieData?.top100Days || ''}</span></p>
              <p className="card-text">Top 1000: <span className="text-white">{movieData?.top1000Days || ''}</span></p>
              <div className="d-flex justify-content-around mt-3">
                <button id="like-btn" className="btn btn-outline-secondary uniform-btn">
                  <i className="fas fa-thumbs-up"></i> <span>{movieData?.likes || 0}</span>
                </button>
                <button id="dislike-btn" className="btn btn-outline-secondary uniform-btn">
                  <i className="fas fa-thumbs-down"></i> <span>{movieData?.dislikes || 0}</span>
                </button>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <button id="watchlist-btn" className="btn btn-outline-secondary uniform-btn">
                  <i className="bi bi-bookmark"></i> <span>{movieData?.watchlistText || 'Watchlist'}</span>
                </button>
                <button id="seen-btn" className="btn btn-outline-secondary uniform-btn">
                  <i className="fa-solid fa-check"></i> <span>{movieData?.seenText || 'Seen'}</span>
                </button>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <button id="sync-btn" className="btn btn-outline-secondary uniform-btn">
                  <span>{movieData?.syncText || 'Sign in to Sync Watchlist'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}

export default ArpitaApi;