import React from 'react'
import { NavLink } from 'react-router-dom'
import mainbanner from "./assets/mainbanner.jpg"
const Home = () => {
  return ( 
    <div className='container p-5'>
        <div className='row'>
            <div className='col-lg-6'>
              <h1 className='display-3'>Adventure is out there. Let’s go find it – together.</h1>
              <p>your journey be the destination</p>
              <NavLink to='/about'>
              <button className='btn btn-primary me-3'>Know More</button>
              </NavLink>
              <NavLink to='/contact'>
              <button className='btn btn-success'>Book Now</button>
              </NavLink>
            </div>
            <div className='col-lg-6 text-center'>
              <img src={mainbanner} alt=''className='w-75 main'/>
            </div>
        </div>
    </div>
  )
}

export default Home