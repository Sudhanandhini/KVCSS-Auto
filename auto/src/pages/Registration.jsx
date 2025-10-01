// components/Registration.jsx
import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    vehicleNumber: '',
    vehicleType: '',
    licenseNumber: '',
    membershipPlan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email body
    const emailBody = `
New KVCSS Registration Request

PERSONAL INFORMATION:
Full Name: ${formData.fullName}
Father's Name: ${formData.fatherName}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}

CONTACT INFORMATION:
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}

VEHICLE INFORMATION:
Vehicle Number: ${formData.vehicleNumber}
Vehicle Type: ${formData.vehicleType}
License Number: ${formData.licenseNumber}

MEMBERSHIP PLAN: ${formData.membershipPlan}

Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const subject = `KVCSS Registration - ${formData.fullName}`;
    const mailtoLink = `mailto:support@sunsys.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    alert('Your email client will open. Please click Send to complete registration.');
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className=" text-white py-5"  style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Membership Registration</h1>
          <p className="lead mb-0">Join KVCSS Trust and enjoy exclusive benefits for auto drivers</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
                <h3 className="fw-bold mb-4 text-center">Registration Form</h3>
                
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 text-danger">Personal Information</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name *</label>
                        <input 
                          type="text" 
                          className="form-control rounded-3 py-2" 
                          name="fullName" 
                          value={formData.fullName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Father's Name *</label>
                        <input 
                          type="text" 
                          className="form-control rounded-3 py-2" 
                          name="fatherName" 
                          value={formData.fatherName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Date of Birth *</label>
                        <input 
                          type="date" 
                          className="form-control rounded-3 py-2" 
                          name="dob" 
                          value={formData.dob} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Gender *</label>
                        <select 
                          className="form-select rounded-3 py-2" 
                          name="gender" 
                          value={formData.gender} 
                          onChange={handleChange} 
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 text-danger">Contact Information</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone Number *</label>
                        <input 
                          type="tel" 
                          className="form-control rounded-3 py-2" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="+91 98765 43210" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control rounded-3 py-2" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="your@email.com" 
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Address *</label>
                        <textarea 
                          className="form-control rounded-3" 
                          name="address" 
                          value={formData.address} 
                          onChange={handleChange} 
                          rows="2" 
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">City *</label>
                        <input 
                          type="text" 
                          className="form-control rounded-3 py-2" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Pincode *</label>
                        <input 
                          type="text" 
                          className="form-control rounded-3 py-2" 
                          name="pincode" 
                          value={formData.pincode} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 text-danger">Vehicle Information</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Vehicle Number *</label>
                        <input 
                          type="text" 
                          className="form-control rounded-3 py-2" 
                          name="vehicleNumber" 
                          value={formData.vehicleNumber} 
                          onChange={handleChange} 
                          placeholder="KA-01-AB-1234" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Vehicle Type *</label>
                        <select 
                          className="form-select rounded-3 py-2" 
                          name="vehicleType" 
                          value={formData.vehicleType} 
                          onChange={handleChange} 
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="Auto Rickshaw">Auto Rickshaw</option>
                          <option value="Taxi">Taxi</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Driving License Number *</label>
                        <input 
                          type="text" 
                          className="form-control rounded-3 py-2" 
                          name="licenseNumber" 
                          value={formData.licenseNumber} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Membership Plan */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 text-danger">Membership Plan</h5>
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label fw-semibold">Select Plan *</label>
                        <select 
                          className="form-select rounded-3 py-2" 
                          name="membershipPlan" 
                          value={formData.membershipPlan} 
                          onChange={handleChange} 
                          required
                        >
                          <option value="">Choose a plan</option>
                          <option value="Basic - ₹300/year">Basic - ₹300/year</option>
                          <option value="Standard - ₹500/year">Standard - ₹500/year</option>
                          <option value="Premium - ₹800/year">Premium - ₹800/year</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="alert alert-info mb-4">
                    <strong>Note:</strong> Clicking submit will open your email client with pre-filled registration details. Please click "Send" in your email to complete the registration.
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="#" className="text-danger">terms and conditions</a> and <a href="#" className="text-danger">privacy policy</a>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-danger w-100 rounded-pill py-3 fw-semibold"
                  >
                    Submit Registration
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center">
            <h4 className="fw-bold mb-3">Alternative Registration Method</h4>
            <p className="text-secondary mb-3">You can also send your details directly to:</p>
            <a href="mailto:support@sunsys.in" className="btn btn-outline-danger btn-lg rounded-pill px-5">
              Email: support@sunsys.in
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Why Register With Us?</h3>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-light rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                ⚡
              </div>
              <h5 className="fw-bold mb-2">Quick Process</h5>
              <p className="text-secondary small">Simple and fast registration within minutes</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-light rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                🔒
              </div>
              <h5 className="fw-bold mb-2">Secure</h5>
              <p className="text-secondary small">Your data is safe and encrypted</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-light rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                ✅
              </div>
              <h5 className="fw-bold mb-2">Verified</h5>
              <p className="text-secondary small">Government registered trust</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;