// components/Services.jsx
import React from 'react';
import services from '../assets/services.png'


 const Services = () => {
  const mainServices = [
    {
      icon: '🛣️',
      title: 'Roadside Assistance',
      description: '24/7 emergency support for breakdowns, accidents, and vehicle issues. Quick response team available across Karnataka.',
      features: ['Emergency towing', 'On-spot repairs', 'Fuel delivery', 'Battery jump-start', 'Tire replacement'],
      color: 'warning'
    },
    {
      icon: '🔧',
      title: 'Vehicle Inspection',
      description: 'Comprehensive vehicle inspection services to ensure your auto is safe and roadworthy.',
      features: ['Pre-purchase inspection', 'Annual maintenance check', 'Safety certification', 'Emission testing', 'Document verification'],
      color: 'success'
    },
    {
      icon: '🏥',
      title: 'ESI Registration & Support',
      description: 'Complete Employee State Insurance assistance including registration, claims, and medical benefits for you and your family.',
      features: ['ESI registration assistance', 'Medical claim support', 'Hospital empanelment guidance', 'Maternity benefits help', 'Disability benefits assistance'],
      color: 'info'
    },
    {
      icon: '💰',
      title: 'PF Registration & Support',
      description: 'Provident Fund services to help you secure your financial future with proper retirement planning and savings.',
      features: ['PF account opening', 'Online UAN activation', 'Withdrawal assistance', 'Transfer and settlement', 'Pension scheme guidance'],
      color: 'primary'
    },
    {
      icon: '🛡️',
      title: 'Insurance Support',
      description: 'Complete insurance assistance from policy selection to claim processing.',
      features: ['Policy comparison', 'Claim assistance', 'Renewal reminders', 'Documentation help', 'Best rate negotiation'],
      color: 'danger'
    },
    {
      icon: '🎓',
      title: 'Training Programs',
      description: 'Professional development and skill enhancement programs for members.',
      features: ['Defensive driving', 'Customer service', 'Vehicle maintenance', 'Business management', 'Digital literacy'],
      color: 'secondary'
    }
  ];

  const additionalServices = [
    { icon: '📋', title: 'Registration Assistance', description: 'Help with vehicle registration and documentation' },
    { icon: '💼', title: 'Financial Services', description: 'Loan assistance and financial planning' },
    { icon: '🏥', title: 'Health Checkups', description: 'Regular health camps and medical support' },
    { icon: '👨‍👩‍👧', title: 'Family Support', description: 'Educational support for children of members' },
    { icon: '📱', title: 'Digital Services', description: 'Online booking and payment systems' },
    { icon: '🎯', title: 'Career Guidance', description: 'Professional counseling and career development' }
  ];
  return (
    <div className="bg-light">

 <section className=" text-white py-5" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Services</h1>
          {/* <p className="lead mb-0">Have questions? We're here to help you get started</p> */}
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead text-secondary mb-4">
                Comprehensive solutions designed specifically for auto drivers and vehicle owners. We provide end-to-end support for all your professional and personal needs.
              </p>
              <a href="/registration" className="btn btn-danger btn-lg rounded-pill px-4">Get Started</a>
            </div>
            <div className="col-lg-6 text-center">
              <img src={services} alt="Services" className="img-fluid rounded-4 shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">Core Services</h2>
          <div className="row g-4">
            {mainServices.map((service, index) => (
              <div className="col-lg-6" key={index}>
                <div className={`card border-0 border-start border-${service.color} border-4 shadow-sm rounded-4 p-4 h-100`}>
                  <div className="d-flex align-items-start mb-3">
                    <div className={`bg-${service.color} bg-gradient text-white rounded-3 p-3 me-3`} style={{ fontSize: '2rem', minWidth: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="fw-bold mb-2">{service.title}</h4>
                      <p className="text-secondary mb-3">{service.description}</p>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <span className="text-success fw-bold me-2">✓</span>
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">Additional Services</h2>
          <div className="row g-4">
            {additionalServices.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center">
                  <div className="bg-light rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                    {service.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="text-secondary small mb-0">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-5">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-3 text-center">
              <div className="bg-danger text-white rounded-circle mx-auto mb-3 fw-bold" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                1
              </div>
              <h5 className="fw-bold mb-2">Register</h5>
              <p className="text-secondary small">Sign up and become a member</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="bg-danger text-white rounded-circle mx-auto mb-3 fw-bold" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                2
              </div>
              <h5 className="fw-bold mb-2">Choose Plan</h5>
              <p className="text-secondary small">Select the membership plan that suits you</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="bg-danger text-white rounded-circle mx-auto mb-3 fw-bold" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                3
              </div>
              <h5 className="fw-bold mb-2">Get Access</h5>
              <p className="text-secondary small">Receive your membership card and benefits</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="bg-danger text-white rounded-circle mx-auto mb-3 fw-bold" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                4
              </div>
              <h5 className="fw-bold mb-2">Enjoy Services</h5>
              <p className="text-secondary small">Start using all member services</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container text-center text-white">
          <h2 className="display-5 fw-bold mb-3">Need Our Services?</h2>
          <p className="lead mb-4">Contact us today to learn more about how we can help you</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="/contact" className="btn btn-dark btn-lg rounded-pill px-5">Contact Us</a>
            <a href="/registration" className="btn btn-outline-light btn-lg rounded-pill px-5">Register Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;