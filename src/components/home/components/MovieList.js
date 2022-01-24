import React, { useEffect, useState } from 'react'
import { fetchGenre, fetchMovieByGenre } from '../../../service';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import '../../css/home.css'
import '../../css/button.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieList = () => {

    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMovieByGenre(28));

        };

        fetchAPI();
    }, []);



    const handleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMovieByGenre(genre_id));
    }

    const genreList = genres.slice(0, 30).map((item, index) => {
        return (
            <li
                key={index}
                className="list-inline-item"
            >
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handleGenreClick(item.id);
                    }}
                >
                    {item.name}
                </button>
            </li>
        )
    })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const genreList2 = genres.slice(0, 30).map((item, index) => {
        return (
            <div className="list-inline-item">
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handleGenreClick(item.id);
                    }}
                >
                    {item.name}
                </button>
            </div>
        )
    })

    const movieList = movieByGenre.slice(0, 16).map((item, index) => {
    
        return (
            <div className="col-md-3 col-sm-6 card-1" key={index}>
                <div className="card card-1">
                    <Link to={`/movie/${item.id}`}>
                        <img className=" img-fluid" src={item.poster} alt={item.title} />
                    </Link>
                </div>
                <div className="mt-3 pd-3">
                    <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                    <p>Rated: {item.rating}</p>

                    <ReactStars
                        count={item.rating}
                        size={20}
                        color1={'#f4c10f'}
                    ></ReactStars>

                </div>
            </div>
        )
    });






    return (
        <>
            {/* <div className="row mt-3">
                <div className="col">
                    <ul className="list-inline">
                        {genreList}
                    </ul>
                </div>
            </div> */}

            <div className="row mt-3">
                <div className="col">
                    <hr className="mt-5" style={{ borderTop: '1px solid #5a606b' }}></hr>
                    <h1 className="mb-5">Categorias</h1>
                    <Carousel 
                        responsive={responsive}
                        autoPlaySpeed={100}
                        infinite={true}
                        
                    >
                        {genreList2}
                    </Carousel>
                </div>
            </div>



           
             

            <div className="row mt-3">
                {movieList}
            </div>

        </>
    )
}

export default MovieList
