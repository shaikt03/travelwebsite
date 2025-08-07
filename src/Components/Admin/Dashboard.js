import React, { useContext, useState } from 'react'
import Welcome from './Welcome'
import { NavLink, Outlet } from 'react-router-dom'
import AdminLogin from './AdminLogin';
import { loginStatus } from '../../App';

const Dashboard = () => {
  const [login, setLogin] = useContext(loginStatus);

  if(login){
    return (
      <div className='container-fluid ' >
         <div className='row '>
         <aside className='col-lg-2 '>
          <NavLink to="" className='text-decoration-none'>
          <h1 className='btn'>Admin Dashboard</h1>
          </NavLink>
          <NavLink to="addServices"> 
          <button>Add Services</button>
          </NavLink>
          <NavLink to="viewServices"> 
          <button>View Services</button>
          </NavLink> 
          <NavLink to="addPackages"> 
          <button>Add Packages</button>
          </NavLink>
           
          <NavLink to="viewPackages"> 
          <button>View Packages</button>
          </NavLink>
          <NavLink to="viewEnquiries"> 
          <button>View Enquiries</button>
          </NavLink>
         </aside>
         <div className='col-lg-10 text-center align-items-center justify-content-center '>
          <Outlet/>
         </div>
         </div>
           
  
      </div>
    )
  }
  else{
    return  <AdminLogin/>
  }
  
  
}

export default Dashboard
