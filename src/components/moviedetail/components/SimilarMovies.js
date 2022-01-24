import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';
import { fetchSimilarMovie } from '../../../service';

const SimilarMovies = ({ match }) => {

    let params = match.params;




    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

            setSimilarMovie(await fetchSimilarMovie(params.id));
        };

        fetchAPI();
    }, [params.id]);

    const similarMovieList = similarMovie.slice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <div className="card">
                    <Link to={`/movie/${item.id}`}>
                        <img className=" img-fluid" src={item.poster} alt={item.title} />
                    </Link>
                </div>
                <div className="mt-3">
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
    })

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <p style={{ color: "#5a606b", fontWeight: "bolder" }}>SIMILAR MOVIES</p>
                </div>
            </div>

            <div className="row mt-3">
                {similarMovieList}
            </div>
        </>
    )
}

export default SimilarMovies
