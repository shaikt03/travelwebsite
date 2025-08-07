import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PackageDetails = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },)
  return (
    <div className='container  p-5'>
      <h1 className='text-center'>{data.name}</h1>
      <h1 className=' text-danger  '>{data.destination}</h1>
      <p className='btn  btn-danger me-2 text-center'>{data.duration}</p>
      <p className='btn  btn-success  text-center'>{data.price}</p>
      <p className='  '>{data.description}</p>
       
      
      <button className='btn btn-success'>Book Now</button>


      {/* <div className='row'>
        <div className='col-md-6'>
            <img src={`/images/${id}.jpg`} alt="" />
        </div>
      </div> */}
    </div>
  )
}

export default PackageDetails
