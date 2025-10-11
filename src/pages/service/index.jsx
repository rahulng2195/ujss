// app/services/page.tsx
import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { 
  Bot, 
  Smartphone, 
  Briefcase, 
  Cloud, 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

const Services = () => {
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
      icon: Bot,
      title: "AI Agents",
      badge: "NEW",
      description: "Intelligent automation solutions powered by artificial intelligence to streamline workflows, enhance customer interactions, and boost operational efficiency with 24/7 digital workforce.",
      link: "/services/ai-agents"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Custom mobile and web application development for iOS and Android platforms, delivering seamless user experiences with modern technology stacks and scalable architecture.",
      link: "/services/app-development"
    },
    {
      icon: Briefcase,
      title: "Business Softwares",
      description: "Enterprise-grade custom software solutions including CRM implementation, ERP systems, and business process automation tools to optimize operations and drive growth.",
      link: "/services/business-software"
    },
    {
      icon: Cloud,
      title: "Cloud & Services",
      description: "Professional cloud hosting, server management, infrastructure setup, and 24/7 support ensuring maximum uptime, scalability, and security for your business operations.",
      link: "/services/cloud-services"
    },
    {
      icon: Calculator,
      title: "Tally Solutions",
      description: "Complete Tally ERP software sales, cloud deployment, dedicated server hosting, implementation, training, and AMC support for seamless accounting and business management.",
      link: "/services/tally-solutions"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Result-driven SEO services, social media marketing, content strategy, PPC campaigns, and online brand management to maximize your digital presence and ROI.",
      link: "/services/digital-marketing"
    },
    {
      icon: ShieldCheck,
      title: "DSC & Legal Services",
      description: "Digital Signature Certificate issuance, renewal, and comprehensive legal compliance services for GST, income tax, company registration, and business regulatory requirements.",
      link: "/services/dsc-legal"
    },
    {
      icon: Globe,
      title: "Web Application",
      description: "Full-stack web application development with responsive design, progressive web apps, e-commerce platforms, portals, and scalable cloud-based solutions for modern businesses.",
      link: "/services/web-application"
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
                  <span className="service-tag">What We Offer</span>
                  <h1 className="hero-title">
                    Our Services<br />
                    <span className="highlight">Empowering Your Digital Success</span>
                  </h1>
                  <p className="hero-subtitle">
                    Comprehensive digital solutions tailored to accelerate your business growth with cutting-edge technology and expert support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">01</div>
                <h2 className="section-title">Our Service Portfolio</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  We offer a complete suite of digital services designed to transform your business operations, 
                  enhance customer experience, and drive measurable results. From cutting-edge AI solutions to 
                  traditional business software, we have everything you need to succeed in the digital age.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <a href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="benefit-card service-card-hover">
                        <div className="d-flex align-items-start">
                          <div className="benefit-icon">
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-grow-1">
                            <h3 className="benefit-title">
                              {service.title}
                              {service.badge && (
                                <span 
                                  style={{
                                    background: '#ff6b6b',
                                    color: 'white',
                                    fontSize: '0.65rem',
                                    padding: '3px 8px',
                                    borderRadius: '12px',
                                    marginLeft: '10px',
                                    fontWeight: '600'
                                  }}
                                >
                                  {service.badge}
                                </span>
                              )}
                            </h3>
                            <p className="benefit-description">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Why Choose Us</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <div className="mb-4">
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Expertise Across Technologies
                  </h4>
                  <p className="section-description">
                    Our team brings deep expertise across multiple technology stacks and business domains, 
                    ensuring you get best-in-class solutions tailored to your specific needs.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
                    24/7 Support & Maintenance
                  </h4>
                  <p className="section-description">
                    We provide round-the-clock support and proactive maintenance to ensure your systems 
                    run smoothly, minimizing downtime and maximizing productivity.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Proven Track Record
                  </h4>
                  <p className="section-description">
                    With hundreds of successful projects delivered across various industries, we have the 
                    experience and expertise to handle projects of any scale and complexity.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Cost-Effective Solutions
                  </h4>
                  <p className="section-description">
                    We offer competitive pricing without compromising on quality, ensuring you get maximum 
                    ROI from your technology investments with transparent pricing and no hidden costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">Industries We Serve</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>E-Commerce & Retail</h5>
                      <p className="section-description" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                        Online stores, inventory management, payment gateways
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Healthcare & Wellness</h5>
                      <p className="section-description" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                        Patient management, telemedicine, health records
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Education & Training</h5>
                      <p className="section-description" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                        E-learning platforms, student management, assessments
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Real Estate</h5>
                      <p className="section-description" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                        Property listings, CRM, virtual tours, lead management
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Finance & Banking</h5>
                      <p className="section-description" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                        Payment systems, accounting, financial reporting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Manufacturing & Logistics</h5>
                      <p className="section-description" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                        Supply chain, warehouse management, tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="cta-title">
                  Ready to Transform<br />
                  <span className="highlight">Your Business?</span>
                </h2>
                <p className="cta-text">
                  Get a free consultation and discover which services are perfect for your business needs
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Schedule Free Consultation
                  </button>
                  <button className="btn btn-outline-custom">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .service-card-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
        }
      `}</style>
    </DarkTheme>
  );
};

export default Services;