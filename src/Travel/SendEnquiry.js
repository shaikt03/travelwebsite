import React, { Component } from "react";

export default class SendEnquiry extends Component {
  constructor() {
    super();
    // Initialize
    this.state = {
      name: "",
      mobile: "",
      email: "",
      service: "",
      pkg: "",
    };
  }

  // Update and view value of name
  changeName = (event) => {
    //  console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };
  // Update and view value of mobile
  changeMobile = (event) => {
    this.setState({
      mobile: event.target.value,
    });
  };
  // Update and view value of email
  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  // Update and view value of service
  changeService = (event) => {
    this.setState({
      service: event.target.value,
    });
  };
  // Update and view value of package
  changePkg = (event) => {
    this.setState({
      pkg: event.target.value,
    });
  };

  // Create all in one
  ChangeData = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // To get the value on submit
  validate = (e) => {
    e.preventDefault(); //to prevent reloading
    console.log(this.state);

    // destracturing
    const { name, mobile, email, service, pkg } = this.state;

    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const serviceError = document.getElementById("serviceError");
    const pkgError = document.getElementById("pkgError");
    const alphaExp = /^[a-zA-Z]+$/;
    const mobileExp = /^[1-9]+$/;
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const serviceExp = /^[a-zA-Z]+$/;
    const pkgExp = /^[a-zA-Z]+$/;
    // Name Validate
    if (name === "") {
      nameError.textContent = `Name is Manditory`;
    } else {
      if (name.match(alphaExp)) {
        nameError.textContent = "";
      } else {
        nameError.textContent = `Name should be in Alphabet only`;
      }
    }
    // Mobile Validate
    if (mobile === "") {
      mobileError.textContent = `mobile is Manditory`;
    } else {
      if (mobile.match(mobileExp)) {
        if (mobile.length === 10) {
          mobileError.textContent = "";
        } else {
          mobileError.textContent = `Mobile Number should be 10 digit`;
        }
      } else {
        mobileError.textContent = `Mobile should be in Number only`;
      }
    }
    // Email Validate
    if (email === "") {
      emailError.textContent = `Email is Manditory`;
    } else {
      if (email.match(emailExp)) {
        emailError.textContent = "";
      } else {
        emailError.textContent = `Email should be in valid format`;
      }
    }
    // Service Validate
    if (service === "") {
      serviceError.textContent = `Service is Manditory`;
    } else {
      if (service.match(serviceExp)) {
        serviceError.textContent = "";
      } else {
        serviceError.textContent = `Service should be in Alphabet only`;
      }
    }
    // Package Validate
    if (pkg === "") {
      pkgError.textContent = `Package is Manditory`;
    } else {
      if (pkg.match(pkgExp)) {
        pkgError.textContent = "";
      } else {
        pkgError.textContent = `Package should be in Alphabet only`;
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.validate}>
        <input
          type="text"
          className="form-control mb-3"
          onChange={this.ChangeData}
          id="name"
          placeholder="Enter your name"
        />
        <p id="nameError"></p>
        <input
          type="mobile"
          className="form-control mb-3"
          onChange={this.ChangeData}
          id="mobile"
          placeholder="Enter your mobile"
        />
        <p id="mobileError"></p>

        <input
          type="email"
          className="form-control mb-3"
          onChange={this.ChangeData}
          id="email"
          placeholder="Enter your email"
        />
        <p id="emailError"></p>
        <input
          type="text"
          className="form-control mb-3"
          onChange={this.ChangeData}
          id="service"
          placeholder="Enter your service"
        />
        <p id="serviceError"></p>
        <input
          type="text"
          className="form-control mb-3"
          onChange={this.ChangeData}
          id="pkg"
          placeholder="Enter your package"
        />
        <p id="pkgError"></p>
        <input type="submit" className="form-control mb-3" />
      </form>
    );
  }
}
