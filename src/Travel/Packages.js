import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Packages = () => {
const [data, setData] =  useState([])
useEffect(()=>{
  axios.get(`http://localhost:5000/packages`)
  .then(response =>  setData(response.data) ) //SetState is one of the funtion to update the state concept
  .catch((err) => console.log(err))
  
})
  return (
    <div className='container-fluid p-0'>
       <div className='text-bg-dark p-3 text-center'>
        <h3 className='text-white'>Carefully crafted journeys for every traveler – from spiritual retreats to exotic escapes</h3>
          </div>
          <div className='container p-5'>
            <h2>Packages</h2>
            <div className='row'>
            
          {data.map((pkg)=>{
            return(
              <div className='mb-3 col-md-6 col-lg-4'>
                <div className='card h-100 p-3'>
                  <h5 className='card-title'>{pkg.name}</h5>
                  <h5 className='card-title'>{pkg.destination}</h5>
                  <h5 className='card-title'>{pkg.description}</h5>

                  <NavLink to={`/packageDetails/${pkg.id}`}>
                  <button className='btn btn-success'>know More</button>
                  </NavLink>


                  
                {/* <div className='card-footer text-center'>
                <h5 className='btn btn-success'>{pkg.duration}</h5>
                <h5 className='btn btn-danger'>{pkg.price}</h5>
                </div> */}
                </div>
               </div>
            )
          })}
            
          </div>
        </div>
    </div>
  )
}

export default Packages