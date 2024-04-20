import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Upcoming=()=>{
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

    const [data, setData]=useState([])
    console.log(data)
    
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        params: {language: 'en-US', page: '1'},
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
        <>
         <div className=" flex bg-black text-center p-2">
           
           <div className="m-10" onClick={toggleSidebar}>
              <div className="bg-red-500 w-10 h-2 m-2 rounded-sm"></div>
              <div className="bg-red-500 w-10 h-2 m-2 rounded-sm"></div>
              <div className="bg-red-500 w-10 h-2 m-2 rounded-sm"></div>
           </div>
           <div className=" text-5xl text-white font-extrabold">
             <h1 className="text-center m-10">Upcoming</h1>
           </div>
           <div className="w-full">
               <h1 className="text-center">genre</h1>
           </div>
       </div>

       <div className={`sidebar w-64 bg-red-500 text-white fixed inset-y-0 left-0 transform ${showSidebar? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-center h-16 bg-white">
            <h1 className="text-xl font-extrabold text-red-600">Magix-Movies</h1>          
          </div>
          <div className="text-center xl:my-20">
              <Link to='/'>
                 <p className="text-xl font-extrabold hover:text-blac my-10">Home</p>
               </Link>
              <Link to='/movies'>
                 <p className="text-xl font-extrabold hover:text-black my-10">Movies</p>
               </Link>
               <Link to='/series'>
                 <p className="text-xl font-extrabold hover:text-black my-10">Series</p>
               </Link>
               <Link to='/upcoming'>
                 <p className="text-xl font-extrabold hover:text-blac my-10">Upcoming</p>
               </Link>
            </div>
            <div className="flex justify-center bg-white p-3 hover:bg-black hover:text-white" >
              <button className=" text-black  hover:text-white font-bold" onClick={toggleSidebar}>
                   Cancel
              </button>
            </div>
        </div>

       
         <div className="grid grid-cols-5 gap-4">
            {
             data.map(item =>(
             <div className="m-10 " key={item.id}>
                <img src={`http://image.tmdb.org/t/p/w200${item.poster_path}`} alt="img" className="hover:opacity-0 transition ease-in-out rounded-sm"/>
                <p className="text-white text-center my-5">{item.title}</p>
             </div>
             ))         
            }
         </div>
        </>
    )
}

export default Upcoming;