import React, { useState, useEffect } from 'react';

const ServiceCenterWebpage = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const schemes = [
    { id: 1, name: "Basic Service Scheme", description: "Comprehensive basic maintenance package", link: "#basic-scheme" },
    { id: 2, name: "Premium Care Scheme", description: "Extended warranty and premium services", link: "#premium-scheme" },
    { id: 3, name: "Emergency Support Scheme", description: "24/7 emergency breakdown support", link: "#emergency-scheme" }
  ];

  const exchangeMethods = [
    {
      id: 1,
      name: "Standard Exchange",
      description: "Traditional engine exchange with 7-day processing time",
      icon: "🔧",
      features: ["Quality Assurance", "7-Day Processing", "Warranty Included"]
    },
    {
      id: 2,
      name: "Express Exchange",
      description: "Fast-track engine exchange with 48-hour turnaround",
      icon: "⚡",
      features: ["48-Hour Service", "Priority Handling", "Premium Support"]
    }
  ];

  const shops = [
    {
      id: 1,
      name: "AutoCare Central",
      location: "Downtown Plaza, Block A-15",
      phone: "+1 (555) 123-4567",
      rating: 4.8,
      speciality: "Engine Specialists"
    },
    {
      id: 2,
      name: "MechPro Services",
      location: "Industrial Area, Unit 23",
      phone: "+1 (555) 987-6543",
      rating: 4.9,
      speciality: "Quick Service"
    },
    {
      id: 3,
      name: "Elite Motors Hub",
      location: "Riverside Mall, Level 2",
      phone: "+1 (555) 456-7890",
      rating: 4.7,
      speciality: "Premium Care"
    }
  ];

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
    window.location.href = scheme.link;
  };

  const handleBookNow = (shop) => {
    alert(`Booking appointment at ${shop.name}. You will be redirected to the booking system.`);
  };

  return (
    <div className="page">
      <style>{`
        .page {
          font-family: Arial, sans-serif;
          background: linear-gradient(to bottom right, #f0f4ff, #e0e7ff);
          padding: 20px;
          color: #111; /* DARK TEXT COLOR */
          margin:0;
          width:100vw;
          min-height:100vh;
          box-sizing:border-box;
          overflow-x:hidden
        }
        header {
          background: white;
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        h1, h2, h3, h4 {
          color: #111;
        }
        .nav a {
          margin-right: 20px;
          color: #333;
          text-decoration: none;
        }
        .nav a:hover {
          color: #007BFF;
        }
        .section {
          margin: 40px 0;
        }
        .card {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .button {
          background: linear-gradient(to right, #007BFF, #6610f2);
          color: white;
          border: none;
          padding: 10px 20px;
          margin-top: 10px;
          border-radius: 8px;
          cursor: pointer;
        }
        .button:hover {
          opacity: 0.9;
        }
        .shop-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 20px;
          background: #fefefe;
        }
        .footer {
          background: #333;
          color: white;
          padding: 20px;
          text-align: center;
          margin-top: 40px;
        }
        .footer a {
          color: #bbb;
          margin: 0 10px;
          text-decoration: none;
        }
        .footer a:hover {
          color: white;
        }
      `}</style>

      <header>
        <h1>ENGINE-EX</h1>
        <nav className="nav">
          <a href="#schemes">Schemes</a>
          <a href="#exchange">Exchange</a>
          <a href="#shops">Shops</a>
        </nav>
      </header>

      <main>
        <section className="section">
          <h2>Premium Automotive Services</h2>
          <p>Discover our comprehensive range of automotive services, from maintenance schemes to engine exchanges and certified service centers.</p>
        </section>

        <section id="schemes" className="section">
          <h3>Service Schemes</h3>
          {schemes.map((scheme) => (
            <div key={scheme.id} className="card">
              <h4>{scheme.name}</h4>
              <p>{scheme.description}</p>
              <button className="button" onClick={() => handleSchemeClick(scheme)}>Explore →</button>
            </div>
          ))}
        </section>

        <section id="exchange" className="section">
          <h3>Engine Exchange</h3>
          {exchangeMethods.map((method) => (
            <div key={method.id} className="card">
              <h4>{method.icon} {method.name}</h4>
              <p>{method.description}</p>
              <ul>
                {method.features.map((f, i) => (
                  <li key={i}>- {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="shops" className="section">
          <h3>Authorized Service Centers</h3>
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card">
              <h4>{shop.name} ⭐ {shop.rating}</h4>
              <p>📍 {shop.location}</p>
              <p>📞 {shop.phone}</p>
              <p><strong>{shop.speciality}</strong></p>
              <button className="button" onClick={() => handleBookNow(shop)}>Book Now →</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <h4>ServiceHub Pro</h4>
        <p>Your trusted partner for automotive excellence</p>
        <div>
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a> | 
          <a href="#">Contact Us</a>
        </div>
        <p>© 2024 ServiceHub Pro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServiceCenterWebpage;