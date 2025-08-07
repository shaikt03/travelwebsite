import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Packages from "./Packages";
import Services from "./Services";
import Contact from "./Contact";
import NoPage from "./NoPage";
import AdminLogin from "../Components/Admin/AdminLogin";
import Dashboard from "../Components/Admin/Dashboard";
import Welcome from "../Components/Admin/Welcome";
import AddServices from "../Components/Admin/AddServices";
import AddPackages from "../Components/Admin/AddPackages";
import ViewPackages from "../Components/Admin/ViewPackages";
import ViewEnquiries from "../Components/Admin/ViewEnquiries";
import ViewServices from "../Components/Admin/ViewServices";
import PackageDetails from "./PackageDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/packages" Component={Packages} />
      <Route path="/packagedetails/:id" Component={PackageDetails} />
      <Route path="/services" Component={Services} />
      <Route path="/contact" Component={Contact} />
      <Route path="/admin" Component={AdminLogin} />
      <Route path="/dashboard" Component={Dashboard}>
        <Route path="" Component={Welcome} />
        <Route path="addServices" Component={AddServices} />
        <Route path="viewServices" Component={ViewServices} />
        <Route path="addPackages" Component={AddPackages} />
        <Route path="viewPackages" Component={ViewPackages} />
        <Route path="viewEnquiries" Component={ViewEnquiries} />
      </Route>
      <Route path="*" Component={NoPage} />
    </Routes>
  );
};

export default Routing;
