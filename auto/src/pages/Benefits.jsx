// components/Benefits.jsx
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: '🚗',
      title: '24/7 Roadside Assistance',
      description: 'Emergency support wherever you are with quick response within 30 minutes. Our dedicated team is always ready to help you get back on the road.',
      color: 'success'
    },
    {
      icon: '💰',
      title: 'Exclusive Discounts',
      description: 'Special rates on fuel, maintenance, spare parts, and insurance for all members. Save money on your daily operational costs.',
      color: 'warning'
    },
    {
      icon: '🎓',
      title: 'Educational Support',
      description: 'Scholarships, stipends, medals and prizes for deserving students. Support for educational institutions and skill development programs.',
      color: 'primary'
    },
    {
      icon: '🏥',
      title: 'Healthcare Facilities',
      description: 'Access to medical relief, ambulatory services, and health camps. Running and managing medical facilities for socially disadvantaged members.',
      color: 'danger'
    },
     {
      icon: '💼',
      title: 'PF Registration & Benefits',
      description: 'Provident Fund services for retirement savings, tax benefits, emergency withdrawals, and pension schemes. Secure your financial future with proper planning.',
      color: 'primary'
    },
     {
      icon: '🩹',
      title: 'Accident Pension',
      description: 'Financial assistance and monthly pension for members who have met with accidents resulting in disability. Comprehensive support for accident victims and their families.',
      color: 'danger'
    },
    {
      icon: '🛡️',
      title: 'Insurance Support',
      description: 'Comprehensive coverage options and claim assistance from our experts. Get the best insurance deals tailored for auto drivers.',
      color: 'info'
    },
     {
      icon: '👴',
      title: 'Senior Citizen Pension (60+)',
      description: 'Monthly pension support for members aged 60 and above. Financial security for retired auto drivers ensuring dignity in their golden years.',
      color: 'secondary'
    },
   
    {
      icon: '👕',
      title: 'KVCSS Uniform',
      description: 'Official KVCSS uniform provided to all registered members. Professional attire that identifies you as a trusted member of our association.',
      color: 'success'
    },
   
    {
      icon: '🏥',
      title: 'ESI Registration & Benefits',
      description: 'Complete Employee State Insurance support including registration, medical benefits, sickness cash benefits, maternity benefits, and disability assistance for you and your family.',
      color: 'success'
    },
   
     {
      icon: '📚',
      title: 'Training & Development',
      description: 'Access to training programs, workshops, and seminars on driving skills, business management, and personal development.',
      color: 'warning'
    },
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className=" text-white py-5" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Membership Benefits</h1>
          <p className="lead mb-0">Discover the exclusive advantages of being part of KVCSS Trust</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center hover-lift" style={{ transition: 'transform 0.3s' }}>
                  <div className={`bg-${benefit.color} bg-gradient text-white rounded-4 mx-auto mb-3`} style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                    {benefit.icon}
                  </div>
                  <h5 className="fw-bold mb-3">{benefit.title}</h5>
                  <p className="text-secondary small mb-0">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Objectives */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-6 fw-bold mb-5">Our Core Objectives</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 border-start border-danger border-4 shadow-sm rounded-4 p-4 h-100">
                <h4 className="fw-bold mb-3">Education & Training</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Establish and manage educational institutions</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Provide scholarships and financial aid</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Skill development and vocational training</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Libraries and reading rooms for members</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 border-start border-success border-4 shadow-sm rounded-4 p-4 h-100">
                <h4 className="fw-bold mb-3">Healthcare & Welfare</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Establish hospitals and health centers</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Medical relief and ambulatory services</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Health camps for disadvantaged members</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Emergency medical assistance</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 border-start border-warning border-4 shadow-sm rounded-4 p-4 h-100">
                <h4 className="fw-bold mb-3">Community Development</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Organize seminars and workshops</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Conduct lectures on arts and science</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Promote knowledge and fine arts</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Support community institutions</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 border-start border-primary border-4 shadow-sm rounded-4 p-4 h-100">
                <h4 className="fw-bold mb-3">Professional Support</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Vehicle inspection services</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Insurance claim assistance</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Legal and financial guidance</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Business development support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container text-center text-white">
          <h2 className="display-5 fw-bold mb-3">Ready to Join?</h2>
          <p className="lead mb-4">Become a member today and enjoy all these exclusive benefits</p>
          <a href="/registration" className="btn btn-dark btn-lg rounded-pill px-5">Register Now</a>
        </div>
      </section>
    </div>
  );
};

export default Benefits;