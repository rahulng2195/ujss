import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { CheckCircle, Sliders, Users, Search, Package, Settings, Database, BookOpen, Headphones } from 'lucide-react';
import Footer from "../../components/Footer";

const TallyImplementation = () => {
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
      icon: CheckCircle,
      title: "Flawless Setup with Expert Configuration",
      description: "Professional installation and configuration ensuring your Tally system runs perfectly from day one."
    },
    {
      icon: Sliders,
      title: "Personalized Tally to Suit Your Business",
      description: "Customized solutions tailored to match your unique business processes and requirements."
    },
    {
      icon: Users,
      title: "Equip Your Team for Smart & Effective Use",
      description: "Comprehensive training programs that empower your team to utilize Tally efficiently and confidently."
    }
  ];

  const implementationSteps = [
    {
      icon: Search,
      title: "Business Understanding",
      description: "We analyze your workflows to design the perfect Tally roadmap."
    },
    {
      icon: Package,
      title: "Seamless Setup",
      description: "A smooth installation tailored to fit your business environment."
    },
    {
      icon: Settings,
      title: "Smart Configuration",
      description: "Customizing Tally features to align with your unique operations."
    },
    {
      icon: Database,
      title: "Data Transition",
      description: "Safe and hassle-free migration of your existing records into Tally."
    },
    {
      icon: BookOpen,
      title: "Team Empowerment",
      description: "Interactive training sessions to equip your team with practical know-how."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Continuous guidance to keep your Tally efficient, updated, and reliable."
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
                  <span className="service-tag">Implementation Services</span>
                  <h1 className="hero-title">
                    Tally<br />
                    <span className="highlight">Implementation</span>
                  </h1>
                  <p className="hero-subtitle">Smart Setup. Seamless Integration. Smarter Business.</p>
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
                  Smart Tally setup isn&#39;t just about installing software—it&#39;s about making your business run smoother. 
                  At Software@Work, we customize Tally to fit your exact needs. From quick setup to easy configuration 
                  and hands-on training, we make sure you get a hassle-free experience that saves time, improves efficiency, 
                  and helps your business grow.
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
                <h2 className="section-title">Benefits of Tally Implementation</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Harness Tally&#39;s Full Power for Smooth Operations
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="col-lg-4 col-md-6 my-3">
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

        {/* Implementation Process Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">The Way We Implement Tally</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Our proven methodology ensures a smooth transition to Tally with minimal disruption to your business operations.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {implementationSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="col-lg-4 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{step.title}</h3>
                      <p className="benefit-description">{step.description}</p>
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
                  <span className="highlight">Business with Tally?</span>
                </h2>
                <p className="cta-text">
                  Let our experts implement a Tally solution perfectly tailored to your business needs
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Start Implementation
                  </button>
                  <button className="btn btn-outline-custom">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer /> 
    </DarkTheme>
  );
};

export default TallyImplementation;