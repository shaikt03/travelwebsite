import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import datatables from 'datatables.net-dt';
import $ from 'jquery';

const ViewPackages = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [Packages, setPackages] = useState([]);

  useState(() => {
    // Fetch Packages data from the backend API
    fetch("http://localhost:5000/packages")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => setPackages(data)); // Update state with fetched data
      setTimeout(() => {
        $(`#myTable`).DataTable();
      }, 1000);
  });

  //delete record
  const deletePackage = (PackId) => {
    // Make DELETE request to remove Package from the Packver
    axios
      .delete(`http://localhost:5000/packages/${PackId}`)
      .then((res) => toast("Package Deleted Successfully....")) // Show success notification
      .catch((err) => console.log(err)); // Log any errors to console
  };
  //get one record
  const getOneRecord = (PackId) => {
    axios.get(`http://localhost:5000/packages/${PackId}`)
    .then((res)=> {
        setId(res.data.id);
        setName(res.data.name);
        setDestination(res.data.destination);
        setPrice(res.data.price);
        setDuration(res.data.duration);
        setDescription(res.data.description);
    })
  }
  //update record
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(id, name, description, destination, price, duration);
    axios.put(`http://localhost:5000/packages/${id}`, {id, name, description, destination, price, duration})
    .then((res)=> toast("Package Updated Successfully...."))
    .catch((err)=> console.log(err));
  };


  return (
    <div className="container p-5">
      <h2 className="text-center">Packages</h2>
      <ToastContainer />
      <table className="table table-striped table-bordered" id="myTable">
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Package Description</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
          Packages.map((Pack, index) => {
            return (
              <tr key={index}>
                <td>{Pack.name}</td>
                <td>{Pack.description}</td>
                <td>{Pack.destination}</td>
                <td>{Pack.price}</td>
                <td>{Pack.duration}</td>
                <td>
                  <button onClick={()=>getOneRecord(Pack.id)} 
                   data-bs-target="#update" data-bs-toggle="modal"
                    className="btn btn-primary">
                    <i class="bi bi-pen-fill"></i>{" "}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deletePackage(Pack.id)}
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
       {/* Package addition form */}
       <div className="modal fade" id="update" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Packages</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Package Name" className="form-control mb-3" />
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description of Packages" rows={5} className="form-control mb-3" />
                <input type="submit" value={`Update Packages`} className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};
export default ViewPackages;
