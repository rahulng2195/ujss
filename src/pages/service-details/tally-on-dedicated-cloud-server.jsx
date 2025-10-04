import React from "react";
import Navbar from "../../components/Navbar";
import { Server, Shield, Zap, Database, Users, TrendingUp } from 'lucide-react';

const TallyOnDedicatedServer = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.pageYOffset > 300) {
          navbarRef.current.classList.add("nav-scroll");
        } else {
          navbarRef.current.classList.remove("nav-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const benefits = [
    {
      icon: Server,
      title: "Dedicated Performance",
      description: "Enjoy unmatched performance with a server dedicated exclusively to your business. No more sharing resources or compromising on speed."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Your data is protected in a secure, isolated environment, giving you complete control and peace of mind."
    },
    {
      icon: Zap,
      title: "Custom Configuration",
      description: "Tailor the server to your exact needs. From storage to processing power, get the flexibility your business deserves."
    },
    {
      icon: Database,
      title: "Centralized Data Control",
      description: "Maintain a single source of truth with centralized data management, ensuring consistency and accuracy across all branches."
    },
    {
      icon: Users,
      title: "Unlimited User Access",
      description: "Scale your operations without limits. Provide seamless access to an unlimited number of users from anywhere, anytime."
    },
    {
      icon: TrendingUp,
      title: "High Reliability & Uptime",
      description: "Count on exceptional uptime and reliability, ensuring your business operations run smoothly without interruption."
    }
  ];

  return (
    <>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="service-detail-section">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="hero-content">
                  <span className="service-tag">Cloud Solutions</span>
                  <h1 className="hero-title">
                    Tally on Dedicated<br />
                    <span className="highlight">Cloud Server</span>
                  </h1>
                  <p className="hero-subtitle">The ultimate Tally experience with your own private server.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">01</div>
                <h2 className="section-title">Introduction</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Unlock unparalleled control and performance with Tally on a Dedicated Cloud Server. 
                  This premium solution offers an isolated, high-speed environment where your Tally operations can thrive without compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Key Benefits</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Experience the power of a dedicated server for your Tally operations.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="cta-title">
                  Ready for a<br />
                  <span className="highlight">Dedicated Solution?</span>
                </h2>
                <p className="cta-text">
                  Upgrade to a dedicated server and experience Tally like never before.
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Get Started Now
                  </button>
                  <button className="btn btn-outline-custom">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TallyOnDedicatedServer;
