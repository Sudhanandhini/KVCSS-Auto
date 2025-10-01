// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className=" text-white py-5" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-0">Have questions? We're here to help you get started</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 h-100">
                <h3 className="fw-bold mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input type="text" className="form-control rounded-3 py-2" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone Number *</label>
                    <input type="tel" className="form-control rounded-3 py-2" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input type="email" className="form-control rounded-3 py-2" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Subject *</label>
                    <input type="text" className="form-control rounded-3 py-2" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message *</label>
                    <textarea className="form-control rounded-3" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us more about your query..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger w-100 rounded-pill py-2 fw-semibold">Send Message</button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Contact Information</h3>
              
              {/* Office Address */}
              <div className="card bg-white border-0 shadow-sm rounded-4 p-4 mb-3">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-light rounded-3 p-3" style={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    📍
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Registered Office</h6>
                    <p className="text-secondary mb-0 small">
                      No.229/3, A.C.Complex, Nadaprabhu Kempegowda Main Road,<br />
                      H.A.F Post, Dasarahalli, Bangalore - 560024, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card bg-white border-0 shadow-sm rounded-4 p-4 mb-3">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-light rounded-3 p-3" style={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    📞
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Phone Numbers</h6>
                    <p className="text-secondary mb-1">+91 9865321470</p>
                    <p className="text-secondary mb-0">+91 6985231473</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card bg-white border-0 shadow-sm rounded-4 p-4 mb-3">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-light rounded-3 p-3" style={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    ✉️
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Email Address</h6>
                    <p className="text-secondary mb-0">contact@kvcss.org</p>
                    <p className="text-secondary mb-0">info@kvcss.org</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card bg-white border-0 shadow-sm rounded-4 p-4 mb-3">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-light rounded-3 p-3" style={{ minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    🕐
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Working Hours</h6>
                    <p className="text-secondary mb-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-secondary mb-0">Sunday: Closed</p>
                    <p className="text-danger small mb-0 mt-2">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Find Us</h3>
          <div className="ratio ratio-21x9 rounded-4 overflow-hidden shadow">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.5!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-5">Frequently Asked Questions</h3>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 shadow-sm rounded-4 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button rounded-4 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What are the membership fees?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We offer three membership plans: Basic (₹300/year), Standard (₹500/year), and Premium (₹800/year). Each plan comes with different benefits tailored to your needs.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm rounded-4 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded-4 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      How do I register?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can register online through our registration page or visit our office in person. You'll need your vehicle documents, driving license, and a passport-size photo.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm rounded-4 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded-4 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Is roadside assistance available 24/7?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! Our roadside assistance service is available 24/7 across Karnataka for all our members. We guarantee response within 30 minutes in urban areas.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm rounded-4">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded-4 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What documents do I need?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You need: Valid driving license, vehicle registration certificate, Aadhar card or any government ID proof, passport-size photos, and proof of address.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;