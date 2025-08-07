import React from 'react'
import errorImg from "./assets/ggg.gif"
const NoPage = () => {
  return (
    <div className='container text-center'>
        <h1 className='my-5'>No Page Found</h1>
        <img className='w-50' alt='' src={errorImg}/>
    </div>
  )
}

export default NoPage