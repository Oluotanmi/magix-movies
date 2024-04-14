import React from 'react'
import Slide  from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const Home=()=>{

    
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

useEffect(()=> {
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

const settings = {
  dots:true,
  Infinite: true,
  speed:500,
  slidesToShow:1,
  slidesToScroll:1,
  autoplay:true,
  autoplaySpeed: 2000,
  arrows:true
};

    return(
        <div className='bg-black sm:text-center'>
             <Slide {...settings}> 
              {data.map(( item ) =>(
                <div 
                  key={item.id}               
                  className= ''  
                  >                 
                    <div className='xl:flex justify-center  sm:inline-block'>

                        <h1 className='text-white xl:p-20 xl:text-6xl xl:my-40 xl:font-extrabold sm:text-lg'>{item.title}</h1>     
                        <Link to='./movies'>
                            <button className='bg-red-700 xl:my-40 p-3 rounded-md white font-bold text-white s'>More Movies</button>
                        </Link>

                      <div className=' ' >
                          <img className='w-80 m-10 rounded-md' src={`http://image.tmdb.org/t/p/w200${item.poster_path}`} />
                      </div>

                    </div>
                </div> 
                ))}
            </Slide> 
        </div>
    )
}

export default Home;