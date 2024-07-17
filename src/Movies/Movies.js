import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";

const Movies=()=>{

    const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const [data, setData]=useState([])

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVlNTJiZDQ2MjI0NDU1ODc2OWNhOTUwYTFkMDgyMCIsInN1YiI6IjY1NzJmOGYzMWM2MzViMDBmZDM0MTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MthvBtJNtY6Ccs5TppEY3FzthA9rl-XJ29XRU2BtGwk'
  }
};

useEffect(() => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setData(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])


    return(
      <div >  

        <div className=" flex bg-black text-center shadow-lg">        
            <div className="m-2" onClick={toggleSidebar}>
               <div className="bg-red-500 xl:w-10 h-2 m-2 rounded-sm sm:w-5 sm:h-1"></div>
               <div className="bg-red-500 w-10 h-2 m-2 rounded-sm sm:w-5 sm:h-1"></div>
               <div className="bg-red-500 xl:w-10 h-2 m-2 rounded-sm sm:w-5 sm:h-1"></div>
            </div>
            <div className=" xl:text-5xl text-white font-extrabold sm:text-xl">
              <h1 className="ms-10 my-4">Movies</h1>
            </div>
        </div>

        <div className={`sidebar w-64 bg-red-500 text-white fixed inset-y-0 left-0 transform ${showSidebar? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-center h-16 bg-white">
            <h1 className="text-xl font-extrabold text-red-600">Magix-cinemas</h1>          
          </div>
          <div className="text-center xl:my-20">
              <Link to='/'>
                 <p className="text-lg font-extrabold hover:text-blac my-10">Home</p>
               </Link>
             <Link to='/movies'>
                 <p className="text-lg font-extrabold hover:text-black my-10">Movies</p>
               </Link>
               <Link to='/series'>
                 <p className="text-lg font-extrabold hover:text-black my-10">Series</p>
               </Link>
               <Link to='/upcoming'>
                 <p className="text-lg font-extrabold hover:text-blac my-10">Upcoming</p>
               </Link>
            </div>
            <div className="flex justify-center bg-white p-3 hover:bg-black hover:text-white" >
              <button className=" text-black  hover:text-white font-bold" onClick={toggleSidebar}>
                   Cancel
              </button>
            </div>
        </div>

        <div className="grid xl:grid-cols-5 sm:gap-5 sm:grid-cols-2 sm:justify-center">
            {
             data.map( movies =>(
             <Link to={`/moviedetails/${movies.id}`} state={{ movies:movies }}>
              <div className="m-5" key={movies}>
                  <img src={`http://image.tmdb.org/t/p/w200${movies.poster_path}`} alt="img" className="rounded-lg xl:m-10 sm:w-[160px] justify-center shadow-lg"/>
                  <p className="text-red-500 font-bold text-center my-5 font-jaro">{movies.title} <br />{movies.release_date}</p>
              </div>
             </Link>
             ))         
            }
         </div>
      </div>
    )
}

export default Movies;