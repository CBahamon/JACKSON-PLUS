import React from 'react'

import MovieModal from './components/MovieModal';
import GenresListMovie from './components/GenresListMovie';
import Details from './components/Details';
import CastList from './components/CastList';
import SimilarMovies from './components/SimilarMovies';
import Footer from '../Footer'
import '../css/movieDetail.css'


export const MovieDetail = ({ match }) => {

  return (
    <div className="container-movie">
      
      <div className="container-movie-item">
        

        <Details match={match} />

        {/* <GenresListMovie match={match} /> */}

        <MovieModal match={match} />

        <CastList match={match} />

        <SimilarMovies match={match} />

        <Footer />
      </div>

    </div>


  )
}

export default MovieDetail
