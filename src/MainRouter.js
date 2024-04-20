import React from 'react'
import {Route,Routes,Switch} from 'react-router-dom'
import Movies from './Movies/Movies'
import Home from './Home/Home'
import Upcoming from './upComing/Upcoming'
import Series from './Series/Series'
import MovieDetails from './MovieDetails/MovieDetails.js'

const MainRouter = () => {
  return ( 
  <div>   
    {/* <Switch> */}
    <Routes>
        <Route exact path='/' element={<Home />}/>   
        <Route  path='/movies' element={<Movies />}/>   
        <Route  path='/series' element={<Series />}/> 
        <Route  path='/upComing' element={<Upcoming />}/> 
        <Route  path='/moviedetails' element={<MovieDetails/>} />
    </Routes>
    {/* </Switch> */}
 </div>
 )
}
export default MainRouter