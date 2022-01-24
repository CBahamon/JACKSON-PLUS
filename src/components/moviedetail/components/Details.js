import React, { useEffect, useState } from 'react'
import { fetchMovieDetail, fetchMovieDetailAll } from '../../../service';
import ReactStars from 'react-rating-stars-component'
import GenresListMovie from './GenresListMovie';

const Details = ({ match }) => {

    let params = match.params;

    const [detail, setDetail] = useState([]);



    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(params.id));
        };

        fetchAPI();
    }, [params.id]);


    return (
        <>

            <div className="row mt-3">
                <div className="col-3 imagen_detail p-1">                
                        <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} class="imagen_poster" alt={detail.title} />    
                </div>
                <div className="col-8 ml-5">
                    <div className="row mt-3">
                        <h1>{detail.title}</h1>
                        <div className="mt-3">
                            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>OVERVIEW</p>
                            {detail.overview}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 mt-5">
                            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RELEASE DATE</p>
                            <p style={{ color: "#f4c10f" }}>{detail.release_date}</p>
                        </div>
                        <div className="col-3 mt-5">
                            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RUN TIME</p>
                            <p style={{ color: "#f4c10f" }}>{detail.runtime}</p>
                        </div>
                        <div className="col-2 mt-5">
                            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>BUDGET</p>
                            <p style={{ color: "#f4c10f" }}>{detail.budget}</p>
                        </div>
                        <div className="col-3 mt-5">
                            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>HOMEPAGE</p>
                            <p style={{ color: "#f4c10f" }}>{detail.homepage}</p>
                        </div>
                    </div>
                    
                        <GenresListMovie match={match} />
                    

                </div>
            </div>
           

            

        </>
    )
}

export default Details
