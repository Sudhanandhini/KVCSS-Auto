// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* About Us Column */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="mb-3">About Us</h5>
            <p className="small">
              At Auto Association, we believe every journey should be safe, reliable, and enjoyable.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="/registration" className="text-white text-decoration-none">Registration</a>
              </li>
               <li className="mb-2">
                <a href="/benefits" className="text-white text-decoration-none">Benefits</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="mb-3">Address</h5>
            <p className="small">
              1/2 banglaloru<br />
              karnataka
            </p>
          </div>

          {/* Contact Column */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="mb-3">Contact</h5>
            <p className="small mb-1">9865321470</p>
            <p className="small">6985231473</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;