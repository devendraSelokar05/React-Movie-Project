import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Popular.css';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <div>
    <div className='main-container'>
      <h4 className='TV'>Popular Movies and TV Shows - JustWatch India</h4>
      <div className='para'>
        <p>
          We are glad you're here! With JustWatch you can easily find where to
          watch your favourite movies & TV series on streaming services in
          India.
        </p>
        <p>
          JustWatch is easy and effective: choose your favourite streaming
          services in the WatchBar below and see what’s on Netflix, Amazon Prime
          Video India, Hotstar and many more.
        </p>
        <p>
          This guide is organized by popularity to help you find today's most
          popular movies and TV shows in India. To find titles relevant to your
          taste, you can filter your results by release year, age rating, genre,
          price, and more. We also offer a great overview of what’s new on
          streaming services and a guide to upcoming movies and TV shows.
        </p>
      </div>
    <div className="logo">

      {/* Single Carousel with all images */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img
            src='https://i.ytimg.com/vi/w5cA1pHcBNc/maxresdefault.jpg'
            alt='Popular movie'
          />
        </div>
        <div>
          <img
            src='https://seeklogo.com/images/A/amazon-prime-video-logo-1B919AB668-seeklogo.com.png'
            alt='Amazon Prime Video'
          />
        </div>
        <div>
          <img
            src='https://www.apple.com/v/apple-tv-plus/ai/images/meta/apple-tv__e7aqjl2rqzau_og.png?202406180149'
            alt='Apple TV Plus'
          />
        </div>
        <div>
          <img
            src='https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg'
            alt='Hotstar'
          />
        </div>
        <div>
          <img
            src='https://images.firstpost.com/uploads/2023/12/jiocinema.jpg?im=FitAndFill=(1200,675)'
            alt='Jio Cinema'
          />
        </div>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg'
            alt='Zee5'
          />
        </div>
        <div>
          <img
            src='https://thumbs.dreamstime.com/b/google-play-app-store-icons-simple-vector-filled-flat-google-play-app-store-icons-logo-solid-pictogram-isolated-white-159029210.jpg'
            alt='Google Play'
          />
        </div>
        <div>
          <img
            src='https://i.vimeocdn.com/video/1425455159-830ae785608a4ee90dd9595dac7d22dc3ec807a84bcff3f80c5067a43322987d-d_640?f=webp'
            alt='Vimeo'
          />
        </div>
        <div>
          <img
            src='https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png'
            alt='Sony Liv'
          />
        </div>
        <div>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&s'
            alt='Stream service'
          />
        </div>
        <div>
          <img
            src='https://burritobuzz.com/wp-content/uploads/2016/07/netflix-kids.jpg'
            alt='Netflix Kids'
          />
        </div>
        <div>
          <img
            src='https://variety.com/wp-content/uploads/2024/02/Tubi-Logo.png'
            alt='Tubi'
          />
        </div>
        <div>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSvkVspNdOkRTNEU_q8lr_f2Er4aVbykGoA&s'
            alt='Another service'
          />
        </div>
        <div>
          <img
            src='https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw'
            alt='Stream service'
          />
        </div>
      </Carousel>
    </div>
    <div className='title'>
      <button>All-Movies</button>
        <button>Web-Series</button>
          <button>Anime</button>
        <button>Bollywood</button>
      <button>Hollywood</button>
     <button>K-Drama</button>
    </div>
    <div className="fav">
      <h4><b>Watch your Favorite Shows Here</b></h4>
    </div>
    
    <div className="card-body">
      <div>
        <img src="https://im.rediff.com/movies/2024/jun/06reviews-munjya2.jpg" alt="Munjya" />
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/57/e0/18/57e0188e118b23d3d026b8519001f5a4.jpg" alt="Stranger Things" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg" alt="Jujutsu Kaisen" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BZTEyYzVjYjEtNWYzZi00NWRhLTgyZjUtNDlkZjBiNWIxYTEwXkEyXkFqcGc@._V1_.jpg" alt="stree 2" />
      </div>
      <div>
        <img src="https://miro.medium.com/v2/resize:fit:736/1*4FaGGN4RGH3Q3CuMnikunA.jpeg" alt="Goblin" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_.jpg" alt="STK" />
      </div>
      <div>
        <img src="https://cdns-images.dzcdn.net/images/cover/143c299b81447f01e99fd208ebae0553/0x1900-000000-80-0-0.jpg" alt="Wednesday" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BZDA0ODE1NzMtMzRiZC00Y2UzLWEyMzgtZWY3YjdiY2Q3NzcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="My Fault" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIN6O_kAUze8CgKD3Jf6_ei3lABsu-fzHa9Q&s" alt="Your Name" />
      </div>
      <div>
        <img src="https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F6%2Fgracenote%2F6712d44cade77919f9365b7626aa37d7.jpg" alt="suzume" />
      </div>
      <div>
        <img src="https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1" alt="Money Heist" />
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg" alt="tumbbad" />
      </div>
      <div>
        <img src="https://lilvakavivlu.wordpress.com/wp-content/uploads/2020/01/put-your-head-on-my-shoulder.jpg?w=816" alt="Put your head on my shoulder" />
      </div>
      <div>
        <img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-401920,resizemode-75,msid-65769826/magazines/panache/laila-majnu-review-visual-delight-for-a-true-romantic.jpg" alt="Laila Mujnu" />
      </div>
      <div>
        <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg" alt="Attact on titan" />
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg" alt="Animal" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/S/pv-target-images/91f603ea4cc96e153c96eb222e0797700e0d1e280a8daa1f7f0aca4c4a002026.jpg" alt="sweet Love" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1w35AsAv2sISXApGQxf8hD_gO4d_A_ZC3Q&s" alt="The conjuring" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_.jpg" alt="kissing booth" />
      </div>
      <div>
        <img src="https://images.justwatch.com/poster/145380584/s718/my-girlfriend-is-an-alien.jpg" alt="my girlfriend in an alian" />
      </div>
</div>
</div>

<div class="d-flex justify-content-center align-items-center button-container">
  <button class="btn-primary custom-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    Watch More
  </button>

  <Link to="/contact" class=" justify-content-center align-items-center">
    <button class="btn-primary login">Login</button>
  </Link>
</div>



<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Watch More</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <h5>Look at Something New And Learn Something New, We are here just for Your Entertainment.</h5>
    </div>
    <div className="dropdown">
      <button class="ggg" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
       Some More
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><Link class="dropdown-item" to="/home">Home</Link></li>
        <li><Link class="dropdown-item" to="/Newmovies">New Movies</Link></li>
        <li><Link class="dropdown-item" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
</div>

</div>  
  );
};

export default Popular;
