import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../../../service';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/home.css";
import { Link } from 'react-router-dom';




export const CarouselMovie = () => {

  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
    };

    fetchAPI();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };


  const movies = nowPlaying.slice(1, 7).map((item, index) => {
    return (
      // <Link to={`/movie/${item.id}`}>
        <div style={{  width: "100%" }} key={index} >
          <div className="carousel">
            <img  src={item.backPoster} alt={item.title} style={{height:'93vh' }} id="parallax"/>
          </div>
          <div className="carousel-center">
          <i
            className="far fa-play-circle"
            style={{ fontSize: 95, color: "#ffffff" }}
          ></i>
          </div>
          <div
            className="carousel-caption"
          >
            {item.title}
          </div>
        </div>
      // </Link>
    );
  });

  return (
    <>
      <div className="container-corousel" id="container-corousel">
        
          <Carousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={4000}
            version={4}
            indicators={false}
            infiniteLoop
            autoPlay
          >
            {movies}
          </Carousel>
        
      </div>

    </>
  )
}

export default Carousel
