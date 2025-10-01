// components/About.jsx
import React from 'react';
import logo from "../assets/auto-association-logo.png"

const About = () => {
  return (
    <div className="bg-light">

 <section className=" text-white py-5" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
                <div className="container py-4 text-center">
                    <h1 className="display-4 fw-bold mb-3">About</h1>
                    {/* <p className="lead mb-0">Have questions? We're here to help you get started</p> */}
                </div>
            </section>

      {/* Hero Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">About KVCSS</h1>
              <h3 className="text-danger mb-3">Karnataka Vahana Chalakara Seva Trust "SPOORTHY"</h3>
              <p className="lead text-secondary">
                At Auto Association, we believe every journey should be safe, reliable, and enjoyable. Established to bring together auto drivers and vehicle owners, we provide trusted services, exclusive benefits, and a strong community for everyone on the road.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img src={logo} alt="KVCSS" className="img-fluid rounded-4 shadow p-2"  width='400' height='400' />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4" style={{ borderLeft: '5px solid #dc3545' }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-danger text-white rounded-circle p-3 me-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎯</span>
                  </div>
                  <h3 className="fw-bold mb-0">Our Mission</h3>
                </div>
                <p className="text-secondary mb-0">
                  To establish, manage, and support educational institutions, healthcare facilities, and community services that empower auto drivers and their families. We are committed to transitioning youth from illiteracy to education, providing comprehensive skills development, and ensuring every member has access to quality services and support.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4" style={{ borderLeft: '5px solid #059669' }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white rounded-circle p-3 me-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.5rem' }}>👁️</span>
                  </div>
                  <h3 className="fw-bold mb-0">Our Vision</h3>
                </div>
                <p className="text-secondary mb-0">
                  To create the largest and most supportive community of auto drivers in Karnataka, providing a platform for growth, education, and prosperity. We envision a future where every auto driver has access to financial security, quality healthcare, educational opportunities, and a strong support network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section - NEW */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Our Future Vision</h2>
            <p className="lead text-secondary">Building a comprehensive support network across Karnataka</p>
          </div>
          
          <div className="row g-4">
            {/* Bus Stop Facilities */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">
                <div className="bg-danger text-white p-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-25 rounded-circle p-3 me-3" style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '2rem' }}>🚌</span>
                    </div>
                    <h3 className="fw-bold mb-0">Main Bus Stops</h3>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="text-secondary mb-4">
                    We envision establishing comprehensive support facilities at every major bus stop across Karnataka to serve auto drivers and travelers.
                  </p>
                  <h5 className="fw-bold mb-3 text-danger">Facilities at Bus Stops:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <span className="text-danger me-3 mt-1" style={{ fontSize: '1.2rem' }}>🚑</span>
                      <div>
                        <strong className="d-block mb-1">24/7 Ambulance Service</strong>
                        <span className="text-secondary small">Emergency medical response available round the clock for drivers and passengers</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="text-danger me-3 mt-1" style={{ fontSize: '1.2rem' }}>🍽️</span>
                      <div>
                        <strong className="d-block mb-1">Food Facility</strong>
                        <span className="text-secondary small">Hygienic and affordable food options with subsidized meals for members</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="text-danger me-3 mt-1" style={{ fontSize: '1.2rem' }}>💧</span>
                      <div>
                        <strong className="d-block mb-1">Clean Drinking Water</strong>
                        <span className="text-secondary small">Free drinking water and restroom facilities</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-start">
                      <span className="text-danger me-3 mt-1" style={{ fontSize: '1.2rem' }}>🩺</span>
                      <div>
                        <strong className="d-block mb-1">First Aid Support</strong>
                        <span className="text-secondary small">Basic medical assistance and emergency care units</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Toll Plaza Facilities */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">
                <div className="bg-success text-white p-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-25 rounded-circle p-3 me-3" style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '2rem' }}>🛣️</span>
                    </div>
                    <h3 className="fw-bold mb-0">Highway Toll Plazas</h3>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="text-secondary mb-4">
                    Strategic rest and recovery centers at toll plazas to ensure driver safety and comfort during long-distance travel.
                  </p>
                  <h5 className="fw-bold mb-3 text-success">Facilities at Toll Plazas:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <span className="text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}>🍲</span>
                      <div>
                        <strong className="d-block mb-1">Food Court</strong>
                        <span className="text-secondary small">Quality meals and refreshments at reasonable prices for drivers</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}>🛏️</span>
                      <div>
                        <strong className="d-block mb-1">Sleeping Facility</strong>
                        <span className="text-secondary small">Safe and comfortable rest areas with beds for tired drivers</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <span className="text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}>🚿</span>
                      <div>
                        <strong className="d-block mb-1">Shower & Wash Rooms</strong>
                        <span className="text-secondary small">Clean bathroom and shower facilities for driver refreshment</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-start">
                      <span className="text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}>☕</span>
                      <div>
                        <strong className="d-block mb-1">Refreshment Zone</strong>
                        <span className="text-secondary small">Tea, coffee, and snacks available at subsidized rates</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {/* <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-4 p-4" style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)' }}>
                <h4 className="fw-bold mb-4 text-center">Implementation Timeline</h4>
                <div className="row g-4 text-center">
                  <div className="col-md-4">
                    <div className="bg-white rounded-4 p-4 h-100">
                      <h5 className="fw-bold text-danger mb-2">Phase 1</h5>
                      <p className="small text-secondary mb-2">2025-2026</p>
                      <p className="small mb-0">Establish facilities at 10 major bus stops and 5 toll plazas</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-white rounded-4 p-4 h-100">
                      <h5 className="fw-bold text-warning mb-2">Phase 2</h5>
                      <p className="small text-secondary mb-2">2027-2028</p>
                      <p className="small mb-0">Expand to 50 bus stops and 20 toll plazas across Karnataka</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-white rounded-4 p-4 h-100">
                      <h5 className="fw-bold text-success mb-2">Phase 3</h5>
                      <p className="small text-secondary mb-2">2029-2030</p>
                      <p className="small mb-0">Complete network coverage at all major transportation hubs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Trust Information */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">Trust Information</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-danger bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>📍</span>
                </div>
                <h5 className="fw-bold mb-2">Registered Office</h5>
                <p className="text-secondary small mb-0">
                  No.229/3, A.C.Complex, Nadaprabhu Kempegowda Main Road, H.A.F Post, Dasarahalli, Bangalore 560024
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-success bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>📅</span>
                </div>
                <h5 className="fw-bold mb-2">Established</h5>
                <p className="text-secondary mb-0">February 12, 2015</p>
                <p className="text-secondary small mb-0">Registered under Karnataka Government</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-warning bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>🌏</span>
                </div>
                <h5 className="fw-bold mb-2">Area of Operation</h5>
                <p className="text-secondary mb-0">Throughout the State of Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">Board of Trustees</h2>
          <div className="row g-4">
            {[
              { name: 'Shivakumar V', role: 'Founder Trustee', location: 'Dasarahalli, Bangalore' },
              { name: 'D.K. Devaraju', role: 'Trustee', location: 'Kempegowda Main Road, Bangalore' },
              { name: 'Anjanappa P', role: 'Trustee', location: 'Nadaprabu Kempegowda, Bangalore' },
              { name: 'Narendra Babu', role: 'Trustee', location: 'Kempegowda Main Road, Bangalore' },
              { name: 'Nethravathi', role: 'Trustee', location: 'Dasarahalli, Bangalore' }
            ].map((trustee, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">
                  <div className="bg-light rounded-circle mx-auto mb-3" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '3rem' }}>👤</span>
                  </div>
                  <h5 className="fw-bold mb-2">{trustee.name}</h5>
                  <p className="text-danger fw-semibold mb-1">{trustee.role}</p>
                  <p className="text-secondary small mb-0">{trustee.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
   
    </div>
  );
};

export default About;