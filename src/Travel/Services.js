import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Services = () => {
    const  [data , setData] = useState([]) //Returns a stateful value, and a function to update it.
    useEffect(()=>{
      axios.get(`http://localhost:5000/services`)
      .then((res) =>   setData(res.data) )
      .catch((err)=>console.log(err))
    })
  return (
    <div className='container-fluid p-0'>
        <div className='text-bg-dark p-5 text-center'>
            <h1 className='text-white'>Everything you need for a perfect journey – all in one place</h1>
        </div>
        <div className='container p-5 '>
            <h3 className='text-center'>Our Services</h3>
            <div className='row'>
             {data.map((ser, index)=>{
            return(
              <div key={index} className='col-md-6 col-lg-4 mb-3'>
                <div className='card h-100'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ser.name}</h5>
                         <p className='card-text'>{ser.description}</p>
                    </div>
                </div>
               </div>
            )
          })}

             
        </div>
            </div>

    </div>
  )
}

export default Services