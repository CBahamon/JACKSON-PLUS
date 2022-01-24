import React, { useEffect, useState } from 'react'
import { fetchMovieDetail } from '../../../service';

const GenresListMovie = ({ match }) => {

    let params = match.params;
    let genres = [];
  
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
    };

    fetchAPI();
  }, [params.id]);


    genres = detail.genres;


    let genresList;
    if (genres) {
        genresList = genres.map((g, i) => {
            return (
                <li className="list-inline-item" key={i}>
                    <button type="button" className="btn btn-outline-info">
                        {g.name}
                    </button>
                </li>
            );
        });
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <p style={{ color: "#5a606b", fontWeight: "bolder" }}>GENEROS</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    
                        {genresList}
                    
                </div>
            </div>
        </>
    )
}

export default GenresListMovie
