import React, { useEffect, useState } from 'react'
import { fetchGenre, fetchMovieByGenre } from '../../../service';

const GenreList = () => {

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

    const genreList = genres.map((item, index) => {
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

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <ul className="list-inline">
                        {genreList}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GenreList
