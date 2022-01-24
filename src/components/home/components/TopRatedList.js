import React, { useEffect, useState } from 'react'
import { fetchTopratedMovie } from '../../../service';

import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const TopRatedList = () => {

    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

            setTopRated(await fetchTopratedMovie());

        };

        fetchAPI();
    }, []);

    const topRatedList = topRated.slice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 text-center card-1" key={index}>
                <div className="card card-1">
                    <Link to={`/movie/${item.id}`}>
                        <img className="img-fluid" src={item.poster} alt={item.title} />
                    </Link>
                </div>
                <div className="mt-3 pb-3">
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
            <div className="row mt-3 mb'5">
                <div className="col">
                <hr className="mt-5" style={{ borderTop: '1px solid #5a606b' }}></hr>
                    <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                        TOP RATED MOVIES
                    </p>
                </div>
            </div>

            

            <div className="row mt-3">
                {topRatedList}
            </div>
        </>
    )
}

export default TopRatedList
