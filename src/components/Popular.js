import  { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Popular.css';
import { Link, useNavigate } from 'react-router-dom';


const Popular = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch('https://popular-movie.vercel.app/api/Popular-movies');
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
        <div className='container-fluid'>
    <div className='main-container text-center'>
    <h4 className='TV col-12' style={{color:'white'}}>Popular Movies and TV Shows - JustWatch India</h4>
    <div className='para text-secondary text-center mb-4'>
        <p className='lead mt-5'>We are glad you're here! With JustWatch you can easily find where to watch your favourite movies & TV series on streaming services in India.</p>
        <p className='lead mt-2'>JustWatch is easy and effective: choose your favourite streaming services in the WatchBar below and see what’s on Netflix, Amazon Prime Video India, Hotstar, and many more.</p>
        <p className='lead mt-3'>This guide is organized by popularity to help you find today's most popular movies and TV shows in India...</p>
    </div>
    <div className="logo">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
            
            <div> <img src='https://i.ytimg.com/vi/w5cA1pHcBNc/maxresdefault.jpg' alt='Popular movie' /></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5jcKyT1X8TeuJb74rdgVVHoxWSJcaA9ldw&s' alt='Amazon Prime Video' /></div>
            <div><img src='https://www.apple.com/v/apple-tv-plus/ai/images/meta/apple-tv__e7aqjl2rqzau_og.png?202406180149' alt='Apple TV Plus' /></div>
            <div><img src='https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg' alt='Hotstar' /></div>
            <div><img src='https://images.firstpost.com/uploads/2023/12/jiocinema.jpg?im=FitAndFill=(1200,675)' alt='Jio Cinema' /></div>
            <div><img src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg' alt='Zee5' /></div>
            <div><img src='https://thumbs.dreamstime.com/b/google-play-app-store-icons-simple-vector-filled-flat-google-play-app-store-icons-logo-solid-pictogram-isolated-white-159029210.jpg' alt='Google Play' /></div>
            <div><img src='https://i.vimeocdn.com/video/1425455159-830ae785608a4ee90dd9595dac7d22dc3ec807a84bcff3f80c5067a43322987d-d_640?f=webp' alt='Vimeo' /></div>
            <div><img src='https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png' alt='Sony Liv' /></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&s' alt='Stream service' /></div>
            <div><img src='https://burritobuzz.com/wp-content/uploads/2016/07/netflix-kids.jpg' alt='Netflix Kids' /></div>
            <div><img src='https://variety.com/wp-content/uploads/2024/02/Tubi-Logo.png' alt='Tubi' /></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSvkVspNdOkRTNEU_q8lr_f2Er4aVbykGoA&s' alt='Another service' /></div>
            <div><img src='https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw' alt='Stream service' /></div>
                    
        </Carousel>
    </div>
    <div className='title text-center my-4'>
        <button className="btn btn-secondary mx-1">All-Movies</button>
        <button className="btn btn-secondary mx-1">Web-Series</button>
        <button className="btn btn-secondary mx-1">Anime</button>
        <button className="btn btn-secondary mx-1">Bollywood</button>
        <button className="btn btn-secondary mx-1">Hollywood</button>
        <button className="btn btn-secondary mx-1">K-Drama</button>
    </div>
    <div className="fav text-center">
        <h4 className='text-white'><b>Watch your Favorite Shows Here</b></h4>
    </div>
    <div className="card-body container-fluid " id='card-container'>
        {movies.map(movie => (
            <div className="movie-card col-12" key={movie.id} onClick={() => redirectToMovieDetails(movie.id)}>
                <img src={movie.posterImage} alt={`${movie.title} Poster`} className='img-fluid' loading='lazy' />
            </div>
        ))}
    </div>
    <div className="d-flex justify-content-center align-items-center button-container my-4">
        <button className="btn btn-primary custom-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Watch More
        </button>
        <Link to="/contact" className="mx-2">
            <button className="btn btn-primary login">Login</button>
        </Link>
    </div>
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Watch More</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div>
                <h5>Look at Something New And Learn Something New, We are here just for Your Entertainment.</h5>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                    Some More
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link className="dropdown-item" to="/home">Home</Link></li>
                    <li><Link className="dropdown-item" to="/Newmovies">New Movies</Link></li>
                    <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>


    </div>
    
    );
}

export default Popular;
