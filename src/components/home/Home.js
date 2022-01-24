import React from 'react'
import { CarouselMovie } from './components/CarouselMovie'
import MovieList from './components/MovieList'
import TrendingPerson from './components/TrendingPerson'
import TopRatedList from './components/TopRatedList'
import Footer from '../Footer'
import Prueba from './components/Prueba'
import '../js/home'
import '../css/home.css'



export const Home = () => {



  return (
    <>
      <CarouselMovie />

      <div className="container-main">
        <div className="container-item">
        <MovieList />

          
        <TrendingPerson />

        <TopRatedList />

        <Footer />
        </div>

        {/* <GenreList /> */}

        {/* <Prueba /> */}


      </div>
    </>
  )

}

export default Home
