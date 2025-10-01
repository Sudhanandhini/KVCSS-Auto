// Navbar.jsx
import React from 'react';
// Import your logo
import logo from '../assets/auto-association-logo.png';

const Header = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span>+91 9865321470</span>
            </div>
            <div className="col-md-6 text-md-end">
              <span>1/2 , 2nd street ,ram nagar ,Bangalore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid px-4">
          {/* Logo */}
          <a className="navbar-brand fw-bold fs-3" href="/">
             <img src={logo} alt="KVCSS Logo" style={{ height: '50px', marginRight: '10px' }} />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav rounded px-3 py-2">
                <li className="nav-item">
                <a className="nav-link text-black hover-danger px-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black  hover-danger px-3" href="about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black hover-danger px-3" href="services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black hover-danger px-3" href="registration">
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black hover-danger px-3" href="benefits">
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black hover-danger  px-3" href="contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Language Selector */}
          <div className="d-none d-lg-block">
            <button className="btn btn-danger text-white px-4">
              <a href="contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;