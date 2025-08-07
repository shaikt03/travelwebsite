import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const AddPackages = () => {
     
    const [name, setName] = useState("");
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
     
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, description, destination, price, duration);
        axios.post(`http://localhost:5000/packages`, {name, description, destination, price, duration})
        .then((res)=> toast("Package Added Successfully...."))
        .then(()=> {
            setName("");
            setDescription("");
            setDestination("");
            setPrice("");
            setDuration("");
        })
        .catch((err)=> console.log(err));
    }
    
  return (
    <div className="contaiener p-5">
    {/* Main form container with styling */}
    <div className="col-lg-6 p-5 text-center mx-auto shadow">
      {/* Form header */}
      <h2 className=" mb-4">Add Packages</h2>

      {/* Toast container for displaying notifications */}
      <ToastContainer />

      {/* Service addition form */}
      <form onSubmit={submitHandler}>
        {/* Service name input field */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Service Name"
          className="form-control mb-3"
        />
        <input
          type="text"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination"
          className="form-control mb-3"
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="form-control mb-3"
        />
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration"
          className="form-control mb-3"
        />

        {/* Service description textarea */}
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description of Packages"
          rows={5}
          className="form-control mb-3"
        />

        {/* Submit button */}
        <input
          type="submit"
          
          value={`Add Packages`}
          className="btn btn-primary"
        />
      </form>
    </div>
  </div>
  )
}

export default AddPackages
