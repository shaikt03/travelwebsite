import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { loginStatus } from "../../App";

// AdminLogin component handles admin authentication UI and logic
const AdminLogin = () => {
 

  // State to store username and password input
  const [details, setDetails] = useState({ username: "", password: "" });
  const [login, setLogin] = useContext(loginStatus);
  const navigate = useNavigate();
  // Function to update state as user types in the input fields
  const updateDetails = (e) => {
    console.log(e.target.name, e.target.value); // Debug: log field name and value
    setDetails({ ...details, [e.target.name]: e.target.value }); // ...details is cloning.    Update state with new value
  };
  // Function to handle form submission
  const loginHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(details); // Debug: log current details
    const { username, password } = details;
    // Check if any field is empty
    if (username === "" || password === "") {
      alert("Please fill the details");
    } else {
      // Check for hardcoded admin credentials
      if (username === "admin" && password === "admin") {
        setLogin(true);
        alert("Login Successfully");
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <div className="container p-5">
      <div className="col-lg-6 shadow p-5 mx-auto">
        <h1 className="text-center">Admin Login</h1>
        {/* Login form for admin credentials */}
        <form onSubmit={loginHandler}>
          {/* Username input field */}
          <input
            type="text"
            name="username"
            onChange={updateDetails}
            placeholder="Enter Username"
            className="form-control mb-3"
          />

          {/* Password input field */}
          <input
            type="password"
            name="password"
            onChange={updateDetails}
            placeholder="Enter Password"
            className="form-control mb-3"
          />
          {/* Submit button */}
          <button type="submit" className="form-control btn btn-primary mb-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
