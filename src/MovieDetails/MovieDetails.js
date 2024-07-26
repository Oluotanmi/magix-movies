import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MovieDetails=()=>{
  const navigate = useNavigate()
 
  const location = useLocation();
  const item = location.state.movies
  
  const [trailer, setTrailer] = useState(null)
  const youtubeApiKey = 'AIzaSyB4rj8kvnTnjZDrnYFUCbjA5v61Fp3WtLA';
  

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await 
        axios.get('https://www.googleapis.com/youtube/v3/search',{
          params: {
            part: 'snippet',
            q: `${item.title} official trailer`,
            key: youtubeApiKey,
            maxResults: 1,
            type: 'video'
          }
        });
        if(response.data.items.length > 0){
          setTrailer(response.data.items[0]);
        }
      }catch(error){
        console.error('Error fetching trailer:', error)
      }
    };
     fetchTrailer();
    },[item.title, youtubeApiKey])
  
  

    return(
        <div className='bg-black shadow-xl'>
          
           <div className='bg-cover bg-center h-80  bg-black' style={{ backgroundImage: `url("http://image.tmdb.org/t/p/w200${item.backdrop_path}")`}}>
              <button className='bg-red-600 text-white sm:p-2 sm:text-sm rounded-sm sm:m-3 shadow-xl text-bold' onClick={() =>navigate('/movies')}>Back</button>

              <div className='flex sm:my-[180px]'>                     
                <div className=''>
                    <img className='sm:m-5 sm:justify-center sm:my-2 xl:w-30 sm:w-25 rounded-md shadow-xl' src={`http://image.tmdb.org/t/p/w200${item.poster_path}`} />
                  </div>
                  <div className='sm:text-sm  sm:my-[100px] sm:mx-2'>
                    <h1 className='font-bold text-white xl:text-3xl'>{item.title}</h1> 
                    <p className='text-white'>{item.media_type}</p>
                    <p className='text-white'>{item.original_language}</p>
                    <p className='text-white'>{item.release_date}</p>
                  </div>
                </div>
              </div>
          <div>
            
          </div>

          <div className='bg-black py-[170px]   '>
            <div>
              { trailer ? (
                <div className='sm:ms-[40px]'>
                   <iframe
                      width='300'
                      height='315'
                      src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
                      frameBorder="0"
                      allowFullScreen
                      title={trailer.snippet.title}
                   ></iframe>
                </div>
              ) : (
                <div>
                  <p className='text-white'>No trailer found</p>
                </div>
              )

              }
            </div>
             <h2 className=' sm:ms-2 font-extrabold text-white xl:text-3xl'>Storyline</h2>
             <p className='text-white m-2 sm:text-sm  xl:text-xl'>{item.overview}</p>
          </div>  
        </div>
    )
}

export default MovieDetails