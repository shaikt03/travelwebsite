// Import required dependencies
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// AddServices component - form to add new services to the system
const AddServices = () => {
  // State hooks to manage form input values
  const [name, setName] = useState(""); // Store service name
  const [description, setDescription] = useState(""); // Store service description

  // Form submission handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(name, description); // Log form data for debugging

    // Send POST request to add new service to the server
    axios
      .post(`http://localhost:5000/services`, { name, description })
      .then(() => {
        toast("New Service Added!"); // Show success notification
        setName(""); // Clear name input field
        setDescription(""); // Clear description input field
      })
      .catch((err) => {
        console.log(err); // Log error to console
        alert("Error Occured"); // Show error alert to user
      });
  };

  return (
    <div className="contaiener p-5">
      {/* Main form container with styling */}
      <div className="col-lg-6 p-5 text-center mx-auto shadow">
        {/* Form header */}
        <h2 className=" mb-4">Add Services</h2>

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

          {/* Service description textarea */}
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description of Services"
            rows={5}
            className="form-control mb-3"
          />

          {/* Submit button */}
          <input
            type="submit"
            
            value={`Add Services`}
            className="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default AddServices;
