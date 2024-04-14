import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Movies from './Movies/Movies'
import Home from './Home/Home'
import Upcoming from './upComing/Upcoming'
import Series from './Series/Series'

const MainRouter = () => {
  return ( 
  <div>   
    <Routes>
        <Route exact path='/' element={<Home />}/>   
        <Route exact path='/movies' element={<Movies />}/>   
        <Route exact path='/series' element={<Series />}/> 
        <Route exact path='/upComing' element={<Upcoming />}/> 
    </Routes>
 </div>
 )
}
export default MainRouter