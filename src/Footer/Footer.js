import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const App = () => {
  
  return (
    <div className='flex text-center justify-center py-10 bg-red-700'>
       <div className='text-white m-10'>
          <h1>Magix</h1>
          <h1 className='text-black font-bold'>Cinemas</h1>
       </div>

       <div className='text-white m-4'>
        <ul className='ul'>
          <li >
            <NavLink  to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink  to='/'>Series</NavLink>
          </li>
          <li>
            <NavLink  to='/'>Movies</NavLink>
          </li>
          <li>
            <NavLink  to='/'>Upcoming</NavLink>
          </li>
         </ul>
         <div>
         {/* <div style={{ }}>
          <Facebook color='white' />
          <Twitter color='white'/>
          <Instagram color='white'/>
         </div> */}
       </div>
       </div>

       
    </div>
  )
}


export default App
