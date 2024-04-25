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
            <div className="m-10 font-bold">
               <p className="text-red-700 xl:p-5 sm:p-4">Tending movies ......</p>
            </div>

            <div className="flex xl:m-10 sm:m-20">
               <Link to='/movies'>
                 <p className="text-white font-bold xl:m-10 sm:m-5 hover:text-red-700 text-xl">Movies</p>
               </Link>
               <Link to='/series'>
                 <p className="text-white font-bold xl:m-10 sm:m-5 hover:text-red-700 text-xl" >Series</p>
               </Link>
               <Link to='/upcoming'>
                 <p className="text-white font-bold xl:m-10 sm:m-5 hover:text-red-700 text-xl" >Upcoming</p>
               </Link>
            </div>
         </div>

         <div className="grid xl:grid-cols-5 xl:gap-4 sm:justify-center ">
            {
             data.map(item =>(
             <div className="  sm:justify-center" key={item.id}>
                <img src={`http://image.tmdb.org/t/p/w200${item.poster_path}`} alt="img" className="hover:opacity-0 transition ease-in-out rounded-sm sm:justify-center sm:mx-20 xl:m-10 "/>
                <p className="text-white text-center sm:my-5 xl:my-5">{item.title}</p>
             </div>
             ))         
            }
         </div>

         <div className="p-20">
           <Link to='/movies'>
            <button className="justify-right text-white text-center bg-red-700 p-3 rounded-sm font-bold">More movies</button>
           </Link>
         </div>
        </div>
    )
}

export default Body;