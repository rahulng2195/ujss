import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Cloud, Shield, Database, Zap, Printer, Save } from 'lucide-react';
import Footer from "../../components/Footer";

const UserBasedTally = () => {
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
      icon: Cloud,
      title: "Access Anytime, Anywhere",
      description: "Enjoy the full power of TallyPrime on any device through a secure web browser—no installation needed. Stay connected to your accounts wherever you go."
    },
    {
      icon: Shield,
      title: "Advanced Security & Control",
      description: "Your data is always protected with enterprise-grade security, ensuring only authorized users can access it."
    },
    {
      icon: Database,
      title: "Centralized Data Management",
      description: "Keep all your business data centralized at your head office while enabling real-time access for teams across multiple locations."
    },
    {
      icon: Zap,
      title: "Seamless Multi-App Integration",
      description: "Work smarter by using TallyPrime alongside other essential apps like MS Word, Excel, GST/TDS software, and more—all in one place."
    },
    {
      icon: Printer,
      title: "Easy & Direct Printing",
      description: "Print invoices and reports instantly from your local printer, anytime you need them."
    },
    {
      icon: Save,
      title: "Smart Cloud Backups",
      description: "Automatic backups keep your data safe, secure, and easily retrievable—so you never lose important information."
    }
  ];

  return (
    <DarkTheme>
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
                    User Based<br />
                    <span className="highlight">Tally On Cloud</span>
                  </h1>
                  <p className="hero-subtitle">Experience Tally on Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">01</div>
                <h2 className="section-title">Introduction</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  No more boundaries! With Tally on Cloud, your accounts travel with you. 
                  Access TallyPrime 24/7 from any device, stay connected to your business on 
                  the go, and experience effortless accounting like never before.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Key Benefits</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Discover how Tally on Cloud transforms your accounting experience with 
                  powerful features designed for modern businesses.
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
                  Ready to Transform Your<br />
                  <span className="highlight">Accounting Experience?</span>
                </h2>
                <p className="cta-text">
                  Join thousands of businesses that have already moved to Tally on Cloud
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
      <Footer />
      </div>
    </DarkTheme>
  );
};

export default UserBasedTally;
