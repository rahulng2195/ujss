import React from "react";
import Navbar from "../../components/Navbar";
import { UserCog, Shield, Zap, Database, Users, LayoutDashboard } from 'lucide-react';

const TallyWithAdminPanel = () => {
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
      icon: UserCog,
      title: "Full Admin Control",
      description: "Manage users, assign permissions, and monitor activity with a powerful admin panel. You have complete control over your Tally environment."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Your data is protected with robust security features, ensuring that only authorized users have access."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Keep an eye on user activity and system performance in real-time. The admin panel gives you the insights you need to manage your team effectively."
    },
    {
      icon: Database,
      title: "Centralized Data Management",
      description: "Maintain a single source of truth with centralized data management, ensuring consistency and accuracy across all users."
    },
    {
      icon: Users,
      title: "Scalable User Management",
      description: "Easily add or remove users as your team grows. The admin panel makes it simple to manage user access and permissions."
    },
    {
      icon: LayoutDashboard,
      title: "Customizable Dashboard",
      description: "Get a clear overview of your Tally operations with a customizable dashboard. See the metrics that matter most to your business."
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
                    Tally on Cloud with<br />
                    <span className="highlight">Admin Panel</span>
                  </h1>
                  <p className="hero-subtitle">Complete control and visibility over your Tally on Cloud.</p>
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
                  Take charge of your Tally on Cloud experience with a dedicated admin panel. 
                  This powerful solution gives you the tools to manage users, monitor activity, and customize your Tally environment to fit your business needs.
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
                  Discover the advantages of having full administrative control over your Tally on Cloud.
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
                  Ready for<br />
                  <span className="highlight">Complete Control?</span>
                </h2>
                <p className="cta-text">
                  Get the admin panel and take your Tally on Cloud to the next level.
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

export default TallyWithAdminPanel;
