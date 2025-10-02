// Home.jsx
import React from 'react';
import bannerBg from '../assets/banner-new.jpg';
import about from '../assets/about.jpg';
import { Carousel } from 'react-bootstrap';


// Your slides data
const slides = [
  {
    title: "Where Auto Enthusiasts",
    highlight: "Drive Together",
    subtitle: "Stay Protected",
    description: "Join the largest community of auto drivers. Get exclusive benefits, roadside assistance, and comprehensive insurance coverage.",
    bg: bannerBg // your first background image
  },
  {
    title: "Get Comprehensive",
    highlight: "Auto Coverage",
    subtitle: "24/7 Support",
    description: "Protect your vehicle with our comprehensive insurance plans. Enjoy peace of mind with round-the-clock roadside assistance.",
    bg: bannerBg // add your second background image
  },
  {
    title: "Join Thousands of",
    highlight: "Happy Drivers",
    subtitle: "Nationwide",
    description: "Be part of a community that values safety and quality. Access exclusive perks and premium benefits for members.",
    bg: bannerBg // add your third background image
  }
];



const Home = () => {
  return (

    <>

      <section>
        <Carousel
          fade
          controls={true}
          indicators={true}
          interval={5000}
          className="hero-carousel"
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <section
                className="py-5 position-relative"
                style={{
                  background: `url(${slide.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '500px'
                }}
              >
                <div className="container py-5">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8 text-center">
                      <h1 className="display-3 fw-bold mb-4">
                        {slide.title}
                        <span className="text-danger d-block">{slide.highlight}</span>
                        {slide.subtitle}
                      </h1>
                      <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                        {slide.description}
                      </p>
                      <div className="d-flex gap-3 flex-wrap justify-content-center">
                        <a href="#pricing" className="btn btn-dark btn-lg rounded-pill px-4">Get Started</a>
                        <a href="#about" className="btn btn-outline-dark btn-lg rounded-pill px-4">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>


      {/* Hero Section */}
      {/* <section    
  className="py-5 position-relative"    
  style={{      
    background: ` url(${bannerBg})`,
    backgroundSize: 'cover',     
    backgroundPosition: 'center',     
    backgroundRepeat: 'no-repeat',
    minHeight: '500px'
  }} 
>         
  <div className="container py-5">           
    <div className="row align-items-center justify-content-center">             
      <div className="col-lg-8 text-center">               
        <h1 className="display-3 fw-bold mb-4">                 
          Where Auto Enthusiasts                 
          <span className="text-danger d-block">Drive Together</span>                 
          Stay Protected               
        </h1>               
        <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>                 
          Join the largest community of auto drivers. Get exclusive benefits, roadside assistance, and comprehensive insurance coverage.               
        </p>               
        <div className="d-flex gap-3 flex-wrap justify-content-center">                 
          <a href="#pricing" className="btn btn-dark btn-lg rounded-pill px-4">Get Started</a>                 
          <a href="#about" className="btn btn-outline-dark btn-lg rounded-pill px-4">Learn More</a>               
        </div>             
      </div>                       
    </div>         
  </div>       
</section> */}

      {/* Stats Section */}
      {/* <section className="bg-white py-5 shadow-sm">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3 col-6">
              <h3 className="display-4 fw-bold text-danger mb-2">10K+</h3>
              <p className="text-secondary fw-semibold">Active Members</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="display-4 fw-bold text-danger mb-2">500+</h3>
              <p className="text-secondary fw-semibold">Daily Services</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="display-4 fw-bold text-danger mb-2">24/7</h3>
              <p className="text-secondary fw-semibold">Roadside Support</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="display-4 fw-bold text-danger mb-2">98%</h3>
              <p className="text-secondary fw-semibold">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="bg-light py-5" id="benefits">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Quick Benefits</h2>
            <p className="lead text-secondary">Discover the exclusive advantages of being part of our auto community</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <div className="bg-success bg-gradient text-white rounded-4 mx-auto mb-4" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                  🚗
                </div>
                <h5 className="fw-bold mb-3">Roadside Assistance</h5>
                <p className="text-secondary small">24/7 emergency support wherever you are. Quick response within 30 minutes.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <div className="bg-warning bg-gradient text-white rounded-4 mx-auto mb-4" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                  👥
                </div>
                <h5 className="fw-bold mb-3">Exclusive Discounts</h5>
                <p className="text-secondary small">Special rates on fuel, maintenance, and insurance for all members.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <div className="bg-danger bg-gradient text-white rounded-4 mx-auto mb-4" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                  🎉
                </div>
                <h5 className="fw-bold mb-3">Events & Networking</h5>
                <p className="text-secondary small">Connect with fellow drivers at exclusive community events and workshops.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <div className="bg-primary bg-gradient text-white rounded-4 mx-auto mb-4" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                  🛡️
                </div>
                <h5 className="fw-bold mb-3">Insurance Support</h5>
                <p className="text-secondary small">Comprehensive coverage options and claim assistance from our experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 text-white" id="about" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img src={about} alt="Team" className="img-fluid rounded-4 shadow-lg" style={{ maxWidth: '400px' }} />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">About Us</h2>
              <p className="lead mb-4">
                At Auto Association, we believe every journey should be safe, reliable, and enjoyable. Established to bring together car owners, we provide trusted services, exclusive benefits, and a strong community for everyone on the road.
              </p>
              <p className="mb-4">
                With over 10,000 active members, we're committed to making every drive better through comprehensive support, competitive insurance rates, and a network you can depend on.
              </p>
              <a href="#contact" className="btn btn-dark btn-lg rounded-pill px-4">Learn More About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-5" id="services">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Services</h2>
            <p className="lead text-secondary">Comprehensive solutions designed for auto drivers and owners</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100 border-0 border-start border-warning border-4 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3">🛣️ Roadside Help</h5>
                <p className="text-secondary">At Auto Association, we believe every journey should be safe, reliable, and enjoyable. Established to bring together car owners.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 border-start border-success border-4 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3">🔧 Vehicle Inspection</h5>
                <p className="text-secondary">At Auto Association, we believe every journey should be safe, reliable, and enjoyable. Established to bring together car owners.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 border-start border-danger border-4 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3">🛡️ Insurance Support</h5>
                <p className="text-secondary">At Auto Association, we believe every journey should be safe, reliable, and enjoyable. Established to bring together car owners.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 border-start border-primary border-4 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3">✈️ Travel Benefits</h5>
                <p className="text-secondary">At Auto Association, we believe every journey should be safe, reliable, and enjoyable. Established to bring together car owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="bg-light py-5" id="pricing">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Choose Your Plan</h2>
            <p className="lead text-secondary">Flexible membership options to suit every driver's needs</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <h5 className="fw-bold mb-3">Basic</h5>
                <h2 className="display-4 fw-bold text-danger mb-2">₹300</h2>
                <p className="text-secondary mb-4">per year</p>
                <ul className="list-unstyled mb-4 text-start">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Roadside Assistance</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Basic Insurance Support</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Community Access</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Email Support</li>
                </ul>
                <button className="btn btn-dark w-100 rounded-pill py-2">Choose Plan</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-danger border-3 shadow rounded-4 p-4 text-center position-relative">
                <span className="badge bg-danger position-absolute top-0 end-0 m-3">Most Popular</span>
                <h5 className="fw-bold mb-3">Standard</h5>
                <h2 className="display-4 fw-bold text-danger mb-2">₹500</h2>
                <p className="text-secondary mb-4">per year</p>
                <ul className="list-unstyled mb-4 text-start">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>All Basic Features</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Priority Assistance</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Vehicle Inspection</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>10% Discount on Services</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>24/7 Phone Support</li>
                </ul>
                <button className="btn btn-danger w-100 rounded-pill py-2">Choose Plan</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <h5 className="fw-bold mb-3">Premium</h5>
                <h2 className="display-4 fw-bold text-danger mb-2">₹800</h2>
                <p className="text-secondary mb-4">per year</p>
                <ul className="list-unstyled mb-4 text-start">
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>All Standard Features</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Comprehensive Insurance</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Free Vehicle Checkups</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>20% Discount on Services</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Exclusive Events Access</li>
                  <li className="mb-2"><span className="text-success fw-bold me-2">✓</span>Dedicated Account Manager</li>
                </ul>
                <button className="btn btn-dark w-100 rounded-pill py-2">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-5 text-white" id="contact" style={{ background: 'linear-gradient(132deg, #f16b24 0%, #e1801c 100%)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
            <p className="lead">Have questions? We're here to help you get started</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-4 p-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                    <input type="text" className="form-control rounded-3 py-2" id="name" placeholder="John Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                    <input type="tel" className="form-control rounded-3 py-2" id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                    <input type="email" className="form-control rounded-3 py-2" id="email" placeholder="john@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">Message</label>
                    <textarea className="form-control rounded-3" id="message" rows="4" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger w-100 rounded-pill py-2 fw-semibold">Send Message</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="h2 fw-bold mb-4">Contact Information</h3>
              <div className="card bg-white border-0 shadow-sm rounded-4 p-3 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className=" rounded-3 p-3" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    📍
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Address</h6>
                    <p className="mb-0 text-secondary">123 Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>
              <div className="card bg-white border-0 shadow-sm rounded-4 p-3 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className=" rounded-3 p-3" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    📞
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Phone</h6>
                    <p className="mb-0 text-secondary">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              <div className="card bg-white border-0 shadow-sm rounded-4 p-3 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className=" rounded-3 p-3" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    ✉️
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Email</h6>
                    <p className="mb-0 text-secondary">contact@kvcss.com</p>
                  </div>
                </div>
              </div>
              <div className="card bg-white border-0 shadow-sm rounded-4 p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className=" rounded-3 p-3" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                    🕐
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Working Hours</h6>
                    <p className="mb-0 text-secondary">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;