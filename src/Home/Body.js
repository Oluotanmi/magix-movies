import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect,useState } from 'react';

const Body=()=>{

    const [data, setData]=useState([]);
    console.log(data)
    
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
        <div className="bg-black xl:p-5">
         <div className="xl:flex justify-between sm:inline" >
            {/* <div className="m-10 font-bold">
               <p className="text-red-700 xl:p-5 sm:p-4">Tending movies ......</p>
            </div> */}


            <div className="flex xl:m-10 sm:p-10 text-center sm:ms-5">
               <Link to='/movies'>
                 <p className="text-white font-bold xl:m-10 sm:m-5 hover:text-red-700 text-sm">Movies</p>
               </Link>
               <Link to='/series'>
                 <p className="text-white font-bold xl:m-10 sm:m-5 hover:text-red-700 text-sm" >Series</p>
               </Link>
               <Link to='/upcoming'>
                 <p className="text-white font-bold xl:m-10 sm:m-5 hover:text-red-700 text-sm" >Upcoming</p>
               </Link>
            </div>

         </div>

         <div className="grid md:grid-cols-2 xl:grid-cols-5 xl:gap-4 sm:grid-cols-2 xl:text-center">
            {
             data.map(movies =>(
             <Link to={`/moviedetails/${movies.id}`} state={{ movies:movies }}>
              <div className=" justify-center " key={movies.id}>
                  <img src={`http://image.tmdb.org/t/p/w200${movies.poster_path}`} alt="img" className=" rounded-sm sm:justify-center xl:m-10 sm:w-[130px] sm:mx-9"/>
                  <p className="text-red-200 text-center sm:my-5 xl:my-5 font-jaro sm:text-[10px]">{movies.title} <br />{movies.release_date}</p>              
              </div>
             </Link>
             ))         
            }
         </div>

         <div className="p-20">
           <Link to='/movies'>
            <button className="justify-right text-white text-center bg-red-700 p-3 rounded-sm font-bold text-sm">More movies</button>
           </Link>
         </div>
        </div>
    )
}

export default Body;