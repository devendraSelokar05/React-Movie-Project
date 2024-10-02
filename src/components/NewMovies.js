
import React from 'react';
import './NewMovies.css';

const NewMovies = () => {
  return (
    <div>
      <div className='heading'>
        <details>
          <summary className='popular-headings'>
            <h1>Popular Movies and TV Shows – JustWatch India</h1>
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
                <div className="service-icons">
                  < img src="https://www.justwatch.com/images/icon/207360008/s100/netflix.%7Bformat%7D/icon.webp" alt="Netflix" />
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
        <a href="http://localhost:3000/home" className="active">All</a>
        <a href="http://localhost:3000/popular">Movies</a>
        <a href="http://localhost:3000/popular">TV Shows</a>
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
        <a href="http://localhost:3000/Newmovies" className="reset"> RESET</a>
      </div>
  

    <div className="all-cards">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/297859466/s166/game-of-thrones.webp" className="card-img-top" alt="Game of Thrones" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319795140/s166/thangalaan.webp" className="card-img-top" alt="thangalaan" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319733535/s166/raayan.webp" className="card-img-top" alt="rayan" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319782454/s166/terminator-zero.webp" className="card-img-top" alt="Terminator Zero" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/302379741/s166/taaza-khabar.webp" className="card-img-top" alt="taza khabar" />
          </div>
        </div>


        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/317138629/s166/kill-2024.webp" className="card-img-top" alt="Kill 2024" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/309349704/s166/shogun-2024.webp" className="card-img-top" alt="Shogun 2024" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319603130/s166/stree-2.webp" className="card-img-top" alt="Stree 2" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/98979565/s166/mirzapur.webp" className="card-img-top" alt="Mirzapur" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/301444667/s166/house-of-the-dragon.webp" className="card-img-top" alt="House of the Dragon" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/260075695/s166/the-lord-of-the-rings-the-rings-of-power.webp" className="card-img-top" alt="The Rings of Power" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/316496135/s166/harold-and-the-purple-crayon-2024.webp" className="card-img-top" alt="Show" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/316699631/s166/panchayat.webp" className="card-img-top" alt="Panchayat" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/318949087/s166/they-listen.webp" className="card-img-top" alt="Afraid" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320432932/s166/gyaarah-gyaarah.webp" className="card-img-top" alt="Gyaarah Gyaarah" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319810199/s166/shekhar-home.webp" className="card-img-top" alt="Shekhar Home" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/314498863/s166/touch-0.webp" className="card-img-top" alt="Touch" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/211398541/s166/watchmen.webp" className="card-img-top" alt="Watchman" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320858544/s166/didi-di-di.webp" className="card-img-top" alt="Didi" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/317958898/s166/horizon-an-american-saga-chapter-1.webp" className="card-img-top" alt="Horizon 1" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/317954832/s166/despicable-me-4-2024.webp" className="card-img-top" alt="Me 4" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/317502675/s166/twister.webp" className="card-img-top" alt="Twister" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319859347/s166/trap-2024.webp" className="card-img-top" alt="Trap" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/317102237/s166/inside-out-2.webp" className="card-img-top" alt="IO 2" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/316333916/s166/kinds-of-kindness.webp" className="card-img-top" alt="Kok" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/318653937/s166/the-bikeriders.webp" className="card-img-top" alt="The Bikeriders" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/270361550/s166/.webp" className="card-img-top" alt="Watchers" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320060716/s166/you-gotta-believe.webp" className="card-img-top" alt="You Got to Believe" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/319430880/s166/bad-boys-4.webp" className="card-img-top" alt="Bad Boys" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/116082563/s166/the-dark-knight.webp" className="card-img-top" alt="The Dark Night" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/141500940/s166/fast-and-furious-presents-hobbs-and-shaw.webp" className="card-img-top" alt="Fast and Furious" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/176320403/s166/extraction-2020.webp" className="card-img-top" alt="Extraction" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/166091963/s166/mulan-2020.webp" className="card-img-top" alt="Mulan" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/8646724/s166/captain-america-the-first-avenger.webp" className="card-img-top" alt="Captain America" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/61870323/s166/deadpool-2.webp" className="card-img-top" alt="Deadpool 2" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/318387357/s166/deadpool-3.webp" className="card-img-top" alt="Deadpool and Wolverine" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/244761547/s166/the-marvels.webp" className="card-img-top" alt="The Marvels" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/304936885/s166/guardians-of-the-galaxy-vol-3.webp" className="card-img-top" alt="Guardians of the Galaxy Vol. 3" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/302408188/s166/ant-man-3.webp" className="card-img-top" alt="Ant-Man and the Wasp: Quantumania" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/300706764/s166/thor-love-and-thunder.webp" className="card-img-top" alt="Thor: Love and Thunder" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/118339636/s166/avengers-endgame.webp" className="card-img-top" alt="Avengers: Endgame" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/76832017/s166/logan.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/300565238/s166/the-amazing-spider-man.webp" className="card-img-top" alt="" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/316652935/s166/ravanasura.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/249961834/s166/shang-chi-and-the-legend-of-the-ten-rings.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/309833648/s166/annavaram.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/309164504/s166/bholaa-2022.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/311782013/s166/ntr-30.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320862743/s166/nosferatu-2023.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/286305959/s166/the-umbrella-academy.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/139649239/s166/it-follows.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/318611809/s166/gladiator-2.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/313902806/s166/thunderbolts.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/36388733/s166/the-lord-of-the-rings-the-return-of-the-king.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320870611/s166/mr-crocket.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/300655573/s166/ridley.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/305374487/s166/gremlins-secrets-of-the-mogwai.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320945960/s166/.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320860906/s166/small-things-like-these.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320791032/s166/brothers-2024.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320762577/s166/flint-strong.webp" className="card-img-top" alt="" />
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320609229/s166/wheres-wanda.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/313092965/s166/salems-lot.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/320680690/s166/rumours.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/168430901/s166/howls-moving-castle.webp" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.justwatch.com/poster/88176663/s166/frasier.webp" className="card-img-top" alt="" />
          </div>
        </div>


</div>
      </div>
    </div>
  );
};

export default NewMovies;



      