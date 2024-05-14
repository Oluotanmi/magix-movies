import React from 'react'
import {Route,Routes,Switch} from 'react-router-dom'
import Movies from './Movies/Movies'
import Home from './Home/Home'
import Upcoming from './upComing/Upcoming'
import Series from './Series/Series'
import MovieDetails from './MovieDetails/MovieDetails.js'
import SeriesDetails from './Series/SeriesDetails'

const MainRouter = () => {
  return ( 
  <div>   
    {/* <Switch> */}
    <Routes>
        <Route exact path='/' element={<Home />}/>   
        <Route  path='/movies' element={<Movies />}/>   
        <Route  path='/series' element={<Series />}/> 
        <Route  path='/upComing' element={<Upcoming />}/> 
        <Route  path='/moviedetails/:id' element={<MovieDetails />} />
        <Route  path='/seriesdetails/:id' element={<SeriesDetails />} />
    </Routes>
    {/* </Switch> */}
 </div>
 )
}
export default MainRouter