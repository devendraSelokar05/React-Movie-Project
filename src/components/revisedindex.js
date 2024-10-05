



import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="d-block full-video" loop autoPlay muted>
              <source
                src="./assets/2112832-hd_1280_720_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./assets/1_jfR0trcAPT3udktrFkOebA.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src="./assets/movie.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="Contain_Heading">
        <h1 className="Heading">
          Your streaming guide
          <br />
          for movies, TV shows & sports
        </h1>
        <p className="SubHeading">
          Find where to stream new, popular & upcoming entertainment with
          JustWatch.
        </p>
      </div>
      <button className="button">
        <p className="SubButton">Movies</p>
      </button>

      <div className="boxIcons">
        <img src="./assets/netflix.jpg" alt="Netflix" />
        <img src="./assets/apple TV.jpg" alt="Apple TV" />
        <img src="./assets/disney+.jpg" alt="Disney+" />
        <img src="./assets/apple+.jpg" alt="Apple+" />
        <img src="./assets/disney+hotstar.jpg" alt="Disney+ Hotstar" />
        <img src="./assets/foxnow.jpg" alt="Fox Now" />
        <img src="./assets/youtube.jpg" alt="YouTube" />
        <button>SEE ALL</button>
      </div>

      <div className="Maincontainer-multiple-img">
        <div className="container-multiple-img">
          <img className="multiple-img" src="./assets/multi-img.jpg" alt="All in One Place" />
          <h6 className="card-maintitle">ALL IN ONE PLACE</h6>
          <h5 className="card-title">The complete streaming guide</h5>
          <p className="card-text">
            Get personal recommendations for all your favorite streaming
            services. We’ll show you where to watch movies, TV shows & sports.
          </p>
        </div>
        <div className="container-multiple-img2">
          <img className="multiple-img2" src="./assets/multi-img2.png" alt="One Search" />
          <h6 className="card-maintitle">ONE SEARCH</h6>
          <h5 className="card-title">Every platform in one search</h5>
          <p className="card-text">
            Never go back-and-forth between streaming services again to see if a
            movie or TV show is available. We’ve got you covered with one
            search.
          </p>
        </div>
        <div className="container-multiple-img3">
          <img
            className="multiple-img3"
            src="https://static.tnn.in/thumb/msid-111412517,thumbsize-187326,width-1280,height-720,resizemode-75/111412517.jpg?quality=100"
            alt="One Watchlist"
          />
          <h6 className="card-maintitle">ONE WATCHLIST</h6>
          <h5 className="card-title">Combine all your watchlists</h5>
          <p className="card-text">
            Create a single watchlist with every movie and TV show you want to
            watch – covering every streaming service in one list across all your
            devices.
          </p>
        </div>
      </div>

      <div className="papular-upcoming">
        <h1>
          Browse new, popular and upcoming
          <br />
          movies & TV shows
        </h1>
      </div>

      <div class="container my-5">
  <h2 class="text-white">Top Movies<br/> This Week</h2>
  
  <div id="seasonCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/319603130/s166/stree-2" alt="Stree 2"/>
              <div class="season-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/319795140/s166/thangalaan" alt="Thangalaan"/>
              <div class="season-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/317138629/s166/kill-2024" alt="Kill 2024"/>
              <div class="season-info"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/120172701/s166/tumbbad" alt="Tumbbad"/>
              <div class="season-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/318017051/s166/project-k" alt="Project K"/>
              <div class="season-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/319882477/s166/munjha" alt="Munjha"/>
              <div class="season-info"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/319733535/s166/raayan" alt="Raayan"/>
              <div class="season-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/319725378/s166/maharaja-2024" alt="Maharaja 2024"/>
              <div class="season-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="season-card">
              <img src="https://images.justwatch.com/poster/318152051/s166/aavesham-2024" alt="Aavesham 2024"/>
              <div class="season-info"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#seasonCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#seasonCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<div class="container my-5">
  <h2 class="text-white">Top TV Shows<br/> This Week</h2>

  <div id="movieCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/304461294/s166/from" alt="From"/>
              <div class="movie-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/302379741/s166/taaza-khabar" alt="Taaza Khabar"/>
              <div class="movie-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/320432727/s166/agatha-house-of-harkness" alt="Agatha: House of Harkness"/>
              <div class="movie-info"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/320269334/s166/mr-mcmahon" alt="Mr. McMahon"/>
              <div class="movie-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/320432932/s166/gyaarah-gyaarah" alt="Gyaarah Gyaarah"/>
              <div class="movie-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/320425650/s166/nobody-wants-this" alt="Nobody Wants This"/>
              <div class="movie-info"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/77907360/s166/lost" alt="Lost"/>
              <div class="movie-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/320934724/s166/the-judge-from-hell" alt="The Judge from Hell"/>
              <div class="movie-info"></div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <div class="movie-card">
              <img src="https://images.justwatch.com/poster/318099912/s166/the-penguin" alt="The Penguin"/>
              <div class="movie-info"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>








    </>
  );
};

export default Home;
