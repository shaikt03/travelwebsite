import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCallApi from './CallApi';

const Welcome = () => {
  const services = useCallApi("http://localhost:5000/services");
  const packages = useCallApi("http://localhost:5000/packages");
  const enquiries = useCallApi("http://localhost:5000/enquiries");
  return (
    <div  >
      <h1 className='text-center '>Welcome to Admin Dashboard</h1>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'> {services.length}</h5>
              <h5 className='card-title'>Services</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{packages.length}</h5>
              <h5 className='card-title'>Packages</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{enquiries.length}</h5>
              <h5 className='card-title'>Enquiries</h5>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Welcome
