import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const SeriesDetails=()=>{
  const navigate = useNavigate()
 
  const location = useLocation();
  const item = location.state.item
  console.log(item)

    return(
        <div>
           <div className='bg-cover bg-center h-80  sm:rounded-md ' style={{ backgroundImage: `url("http://image.tmdb.org/t/p/w200${item.backdrop_path}")`}}>
              <button className='bg-red-600 text-white sm:p-2 sm:text-sm rounded-sm sm:m-3 shadow-xl text-bold' onClick={() =>navigate('/movies')}>Back</button>
              <div className='flex justify-center'>
                  <h1 className='font-bold text-white xl:text-3xl sm:text-sm text-center sm:my-20 sm:mx-2 font-jaro'>{item.title}</h1>
                  <div className=''>
                    <img className='sm:m-5 sm:justify-center sm:my-2 xl:w-30 sm:w-25 rounded-md shadow-xl' src={`http://image.tmdb.org/t/p/w200${item.poster_path}`} />
                  </div>
                </div>
              </div>

           
            <div className='bg-gradient-to-r from-red-200 to bg-pink-300 sm:p-3 rounded-md'>
             <h2 className=' text-center font-extrabold text-red-600 xl:text-3xl'>OVERVIEW</h2>
             <p className='text-white m-2 sm:text-sm  xl:text-xl'>{item.overview}</p>
           </div>   
            
        </div>
    )
}

export default SeriesDetails;