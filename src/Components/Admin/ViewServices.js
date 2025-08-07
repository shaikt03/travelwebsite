import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import datatables from 'datatables.net-dt';
import $ from 'jquery';
const ViewServices = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState(""); // Store service name
    const [description, setDescription] = useState(""); // Store service description
    const [services, setServices] = useState([]);
  useEffect(() => {
    // Fetch services data from the backend API
    fetch("http://localhost:5000/services")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => setServices(data)); // Update state with fetched data
       setTimeout(() => {
        // let table = new datatables('#myTable');
        $(`#myTable`).DataTable();
       }, 1000);
  });



  //delete record
  const deleteService = (serId) => {
    // Make DELETE request to remove service from the server
    axios
      .delete(`http://localhost:5000/services/${serId}`)
      .then((res) => toast("Service Deleted Successfully....")) // Show success notification
      .catch((err) => console.log(err)); // Log any errors to console
  };
  //get one record
  const getOneRecord = (serId) => {
    axios.get(`http://localhost:5000/services/${serId}`)
    .then((res)=> {
        setId(res.data.id);
        setName(res.data.name);
        setDescription(res.data.description);
    })
  }
  //update record
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(id, name, description);
    axios.put(`http://localhost:5000/services/${id}`, {id, name, description})
    .then((res)=> toast("Service Updated Successfully...."))
    .catch((err)=> console.log(err));
  };


  return (
    <div className="container p-5">
      <h2 className="text-center">Services</h2>
      <ToastContainer />
      <table className="table table-striped table-bordered" id="myTable">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Service Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((ser, index) => {
            return (
              <tr key={index}>
                <td>{ser.name}</td>
                <td>{ser.description}</td>
                <td>
                  <button onClick={()=>getOneRecord(ser.id)} 
                   data-bs-target="#update" data-bs-toggle="modal"
                    className="btn btn-primary">
                    <i class="bi bi-pen-fill"></i>{" "}
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => deleteService(ser.id)}
                    className="btn btn-danger"
                  >
                    <i class="bi bi-trash3-fill"></i>{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
       {/* Service addition form */}
       <div className="modal fade" id="update" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Services</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Service Name" className="form-control mb-3" />
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description of Services" rows={5} className="form-control mb-3" />
                <input type="submit" value={`Update Services`} className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};
export default ViewServices;
