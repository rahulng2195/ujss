import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Headphones, RefreshCw, TrendingUp, ArrowUpCircle, GraduationCap, Phone, Mail, Monitor, MapPin, Database, CheckCircle, BarChart, Shield, Settings } from 'lucide-react';
import Footer from "../../components/Footer";

const TallySupportAMC = () => {
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

  const amcBenefits = [
    {
      icon: Headphones,
      title: "Continuous Support",
      description: "Keep your accounting team efficient and worry-free with dedicated year-round assistance."
    },
    {
      icon: RefreshCw,
      title: "Timely Product Updates",
      description: "Get the latest Tally enhancements, including features like e-way bills, online banking, and more — delivered on time."
    },
    {
      icon: TrendingUp,
      title: "Always Stay Current",
      description: "Remain ahead with every new release, update, and advanced feature of Tally."
    },
    {
      icon: ArrowUpCircle,
      title: "Smooth Migration Services",
      description: "Seamlessly upgrade to the latest versions with expert guidance for migration and related needs."
    },
    {
      icon: GraduationCap,
      title: "Exclusive Learning Access",
      description: "Participate in complimentary Tally training programs and webinars to boost your team's skills."
    }
  ];

  const supportTypes = [
    {
      icon: Phone,
      title: "Phone Assistance",
      description: "Speak directly with specialists for immediate solutions."
    },
    {
      icon: Mail,
      title: "Email & Chat Help",
      description: "Convenient query resolution through written support channels."
    },
    {
      icon: Monitor,
      title: "Remote Support",
      description: "Quick troubleshooting via online and remote access."
    },
    {
      icon: MapPin,
      title: "On-Site Visits",
      description: "Personalized, in-person assistance for advanced requirements."
    }
  ];

  const syncBenefits = [
    {
      icon: CheckCircle,
      title: "No More Rework",
      description: "Automatic updates across all branches mean zero duplication and reduced manual intervention."
    },
    {
      icon: BarChart,
      title: "Smarter MIS Reports",
      description: "Accurate, real-time MIS data helps management make quicker and more informed business decisions."
    },
    {
      icon: Shield,
      title: "Highly Secure",
      description: "Your information is transmitted safely with encrypted XML over HTTP, ensuring data confidentiality."
    },
    {
      icon: Settings,
      title: "Effortless Setup",
      description: "Once configured, Tally Sync works seamlessly—simple to manage, no special IT expertise required."
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
                  <span className="service-tag">Support & Maintenance</span>
                  <h1 className="hero-title">
                    Tally Support<br />
                    <span className="highlight">(AMC)</span>
                  </h1>
                  <p className="hero-subtitle">Trusted Support. Seamless Performance. Peace of Mind.</p>
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
                  Maximize the power of TallyPrime with UJ Software and solutions. Our expert support and 
                  annual maintenance contracts guarantee seamless performance and hassle-free operations. 
                  As an Authorized Tally Support Centre with 30+ years of experience, we deliver trusted 
                  solutions to keep your business moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AMC Benefits Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Our AMC Benefits</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Comprehensive advantages designed to keep your Tally running smoothly year-round.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {amcBenefits.map((benefit, index) => {
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

        {/* Support Types Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">Types of Tally AMC Support</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Multiple support channels to assist you whenever and however you need help.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {supportTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{type.title}</h3>
                      <p className="benefit-description">{type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Data Synchronization Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">04</div>
                <h2 className="section-title">Data Synchronization</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>What is Data Synchronization?</h3>
                <p className="section-description mb-4">
                  Tally Data Synchronization simplifies the way you manage information across multiple business locations. 
                  By ensuring real-time data flow and consistency, it helps you streamline operations, improve accuracy, 
                  and maintain efficiency no matter where your branches or teams are located.
                </p>
                <p className="section-description mb-4">
                  Managing multiple branches means dealing with payments, receipts, and stock details across locations. 
                  Tally Data Synchronization ensures that your data flows seamlessly between head office, branches, 
                  and warehouses keeping everything accurate and connected.
                </p>
                <p className="section-description">
                  Prefer an alternative? With Tally on Cloud, you can access your data anytime, anywhere, and allow 
                  multiple users to work on the same license simultaneously for smarter collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Tally Sync Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">05</div>
                <h2 className="section-title">Why Choose Tally Sync?</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Experience the advantages of synchronized data management across your entire business network.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {syncBenefits.map((benefit, index) => {
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
                  Ready for Reliable<br />
                  <span className="highlight">Tally Support?</span>
                </h2>
                <p className="cta-text">
                  Join businesses that trust our 30+ years of expertise for seamless Tally operations
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Get AMC Support
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

export default TallySupportAMC;