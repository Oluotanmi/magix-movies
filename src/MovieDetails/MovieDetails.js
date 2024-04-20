import React from 'react'
import  {useLocation} from 'react-router-dom'


const MovieDetails=()=>{
  const location = useLocation()

    const movieData = location.state?.movieData;
    console.log(location)

    return(
        <div>
          {
            <h1>{movieData.title}</h1>
          }
        </div>
    )
}

export default MovieDetails