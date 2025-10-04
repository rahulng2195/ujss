import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Globe, Smartphone, Zap, Shield, Search, Palette, Code, Layout, ShoppingCart, Award, Users, TrendingUp } from 'lucide-react';

const WebsiteDevelopment = () => {
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

  const services = [
    {
      icon: Layout,
      title: "Business Websites",
      description: "Professional websites that showcase your brand, build credibility, and help customers learn about your products and services with ease."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online stores that let you sell products 24/7. We build secure, user-friendly shopping experiences that convert visitors into buyers."
    },
    {
      icon: Globe,
      title: "Corporate Portals",
      description: "Enterprise-level websites with advanced features for large organizations, including intranets, client portals, and employee management systems."
    },
    {
      icon: Palette,
      title: "Custom Web Design",
      description: "Unique, eye-catching designs tailored to your brand identity. Stand out from competitors with a website that truly represents your business."
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Custom web-based tools and platforms built to solve your specific business challenges and streamline your operations."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Websites that look perfect on all devices—desktops, tablets, and smartphones. Your customers get a great experience no matter how they visit."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Reach More Customers",
      description: "A professional website makes your business accessible to anyone, anywhere, anytime—expanding your reach beyond physical limitations."
    },
    {
      icon: Award,
      title: "Build Trust & Credibility",
      description: "In today's digital age, customers expect businesses to have a professional online presence. A quality website establishes trust instantly."
    },
    {
      icon: TrendingUp,
      title: "Generate More Leads",
      description: "Convert website visitors into customers with strategic design, compelling content, and clear calls-to-action that drive business growth."
    },
    {
      icon: Zap,
      title: "Stay Competitive",
      description: "Your competitors are online. A modern, functional website ensures you don't lose customers to businesses with better digital presence."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized websites that load in seconds, keeping visitors engaged and improving your search engine rankings."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with the latest security standards to protect your business and customer data from threats and vulnerabilities."
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Websites structured for search engines, helping customers find you easily when searching for your products or services."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Designed for smartphones first, ensuring perfect user experience for the majority of today's web users."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and requirements to create a strategic website plan."
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team creates stunning designs and develops a fully functional website using the latest technologies."
    },
    {
      number: "03",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your website to the world."
    },
    {
      number: "04",
      title: "Support & Growth",
      description: "Ongoing maintenance, updates, and optimization to keep your website performing at its best."
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
                  <span className="service-tag">Web Solutions</span>
                  <h1 className="hero-title">
                    Website Development<br />
                    <span className="highlight">Services</span>
                  </h1>
                  <p className="hero-subtitle">Professional Websites That Drive Business Growth</p>
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
                <h2 className="section-title">Your Digital Storefront</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Your website is often the first impression customers have of your business. In today's digital world, 
                  a professional, user-friendly website isn't just nice to have—it's essential for business success. 
                  We create websites that not only look stunning but also drive real results, turning visitors into 
                  customers and helping your business grow. Whether you need a simple business website or a complex 
                  e-commerce platform, we deliver solutions that work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Website Solutions We Offer</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  From simple business sites to complex web applications, we build digital solutions tailored to your needs.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{service.title}</h3>
                      <p className="benefit-description">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">Why Your Business Needs a Website</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Discover how a professional website transforms your business and opens new opportunities.
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

        {/* Features Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">04</div>
                <h2 className="section-title">Key Features</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Every website we build includes these essential features for optimal performance and results.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{feature.title}</h3>
                      <p className="benefit-description">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">05</div>
                <h2 className="section-title">Our Development Process</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  A proven approach that ensures your website is delivered on time, within budget, and exceeds expectations.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {process.map((step, index) => (
                <div key={index} className="col-lg-6 col-md-6 my-3">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{step.number}</div>
                    </div>
                    <h3 className="benefit-title">{step.title}</h3>
                    <p className="benefit-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="cta-title">
                  Ready to Build Your<br />
                  <span className="highlight">Dream Website?</span>
                </h2>
                <p className="cta-text">
                  Let's create a website that represents your brand and drives real business results
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Start Your Project
                  </button>
                  <button className="btn btn-outline-custom">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DarkTheme>
  );
};

export default WebsiteDevelopment;