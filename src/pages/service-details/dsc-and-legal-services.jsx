import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { FileText, Store, Rocket, Globe, UtensilsCrossed, Award, Building2, Shield, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';

const DSCLegalServices = () => {
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
      icon: Shield,
      title: "MPCB License Registration",
      description: "End-to-end assistance in obtaining Maharashtra Pollution Control Board License Registration, ensuring your business complies with environmental laws and regulations. We handle documentation, application filing, and coordination with authorities for smooth approval."
    },
    {
      icon: Store,
      title: "Shop Act License (Gumasta)",
      description: "Complete support for obtaining Shop Act License (Gumasta), a mandatory registration for businesses and shops in Maharashtra. We manage documentation, application submission, and follow-up to ensure timely approval and full compliance with local regulations."
    },
    {
      icon: Rocket,
      title: "Startup Registration Certificate",
      description: "Turn your business idea into a recognized startup with official registration. We simplify the process from paperwork to approvals, helping you access tax exemptions, funding opportunities, and government support to accelerate your growth."
    },
    {
      icon: Globe,
      title: "Import Export Code (IEC)",
      description: "Complete assistance in obtaining IE Code, a mandatory license for international trade businesses. Our services cover documentation, application filing, and approval follow-up, ensuring smooth compliance with DGFT regulations for global business expansion."
    },
    {
      icon: UtensilsCrossed,
      title: "FSSAI Food License",
      description: "Expert help in obtaining FSSAI Food License, mandatory for all food businesses in India. We handle document preparation, application filing, and approvals to ensure full compliance with Food Safety and Standards Authority of India regulations."
    },
    {
      icon: Award,
      title: "ISO Certification (9001:2015)",
      description: "Complete support for obtaining ISO Certification including ISO 9001:2015 and other ISO standards. We manage documentation, application process, and certification support to help demonstrate quality management, credibility, and international compliance."
    },
    {
      icon: Building2,
      title: "Udyam (MSME) Registration",
      description: "Assistance in obtaining Udyam MSME Registration, enabling small and medium enterprises to access government schemes, tax benefits, and financial aid. We provide documentation support, online application management, and timely approval coordination."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "100% Legal Compliance",
      description: "Stay fully compliant with all government regulations and avoid penalties, legal issues, or business disruptions through proper licensing and registration."
    },
    {
      icon: Clock,
      title: "Fast & Hassle-Free Process",
      description: "We handle all paperwork, applications, and follow-ups, saving you time and effort. Focus on your business while we manage the bureaucracy."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced team knows exactly what's required for each registration. We guide you through every step, ensuring accuracy and avoiding common mistakes that cause delays."
    },
    {
      icon: TrendingUp,
      title: "Unlock Business Benefits",
      description: "Access government schemes, tax exemptions, subsidies, funding opportunities, and business credibility that come with proper registrations and certifications."
    }
  ];

  const whyRegister = [
    {
      title: "Legal Requirement",
      description: "Many licenses are mandatory by law for operating specific types of businesses. Operating without them can lead to hefty fines, legal action, or business closure."
    },
    {
      title: "Customer Trust",
      description: "Valid licenses and certifications build customer confidence in your business. They show you follow proper standards and care about quality and safety."
    },
    {
      title: "Financial Benefits",
      description: "Registered businesses qualify for government subsidies, tax benefits, easier bank loans, and various financial assistance schemes unavailable to unregistered entities."
    },
    {
      title: "Business Growth",
      description: "Proper registrations open doors to government tenders, corporate contracts, international trade opportunities, and partnerships with larger organizations."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We understand your business type and requirements to identify which licenses and registrations you need for full legal compliance."
    },
    {
      number: "02",
      title: "Document Collection",
      description: "We provide a clear checklist of required documents and help you gather and organize everything needed for your applications."
    },
    {
      number: "03",
      title: "Application Filing",
      description: "Our team prepares and files all applications accurately with the relevant authorities, ensuring everything is in order for approval."
    },
    {
      number: "04",
      title: "Follow-up & Delivery",
      description: "We actively follow up with authorities, handle any queries, and deliver your approved licenses and certificates directly to you."
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
                  <span className="service-tag">Compliance & Registration</span>
                  <h1 className="hero-title">
                    DSC & Legal<br />
                    <span className="highlight">Services</span>
                  </h1>
                  <p className="hero-subtitle">Complete Business Registration & Licensing Solutions</p>
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
                <h2 className="section-title">Your Compliance Partner</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Running a business means navigating complex legal requirements, licenses, and registrations. Missing 
                  even one mandatory registration can lead to penalties, legal troubles, or business disruptions. We make 
                  business compliance simple and stress-free. From startup registration to industry-specific licenses, we 
                  handle all documentation, applications, and government coordination—ensuring your business is fully 
                  legal, compliant, and positioned to access all available benefits and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Our Legal & Registration Services</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Comprehensive licensing and registration solutions for all types of businesses across industries.
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
                <h2 className="section-title">Why Choose Our Services</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Experience the advantage of working with compliance experts who understand business needs.
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

        {/* Why Registration Matters Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">04</div>
                <h2 className="section-title">Why Business Registration Matters</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Understanding the importance of proper licensing and registration for your business success.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {whyRegister.map((reason, index) => (
                <div key={index} className="col-lg-6 col-md-6 my-3">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <FileText size={24} />
                    </div>
                    <h3 className="benefit-title">{reason.title}</h3>
                    <p className="benefit-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">05</div>
                <h2 className="section-title">Our Simple 4-Step Process</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  We've streamlined the registration process to make it quick, easy, and stress-free for you.
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

        {/* Who Needs These Services Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">06</div>
                <h2 className="section-title">Who Needs These Services?</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description mb-4">
                  <strong>Startups & New Businesses:</strong> Get your business legally registered and compliant from day one with startup registration, shop act license, and other essential permits.
                </p>
                <p className="section-description mb-4">
                  <strong>Food & Beverage Businesses:</strong> Restaurants, cafes, cloud kitchens, food manufacturers, and retailers need FSSAI food license to operate legally.
                </p>
                <p className="section-description mb-4">
                  <strong>Manufacturing & Industrial Units:</strong> Factories and manufacturing units require MPCB license for environmental compliance and pollution control.
                </p>
                <p className="section-description mb-4">
                  <strong>Import-Export Companies:</strong> Businesses trading internationally need IE Code registration for customs clearance and international transactions.
                </p>
                <p className="section-description mb-4">
                  <strong>MSMEs & Small Businesses:</strong> Small and medium enterprises benefit from Udyam registration to access government schemes, subsidies, and financial support.
                </p>
                <p className="section-description">
                  <strong>Quality-Focused Organizations:</strong> Businesses seeking to demonstrate quality management and credibility need ISO certification to compete globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">07</div>
                <h2 className="section-title">Common Questions</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <div className="mb-4">
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>How long does the registration process take?</h4>
                  <p className="section-description">
                    Timeline varies by registration type—from 7-15 days for simpler licenses to 30-45 days for certifications like ISO. We provide specific timelines during consultation.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>What documents do I need?</h4>
                  <p className="section-description">
                    Requirements vary by registration type, but typically include business proof, identity documents, address proof, and industry-specific documents. We provide a complete checklist.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Can you help with renewal of existing licenses?</h4>
                  <p className="section-description">
                    Yes! We handle renewals for all types of licenses and registrations, ensuring timely renewal before expiry to avoid penalties or business interruptions.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>What if my application gets rejected?</h4>
                  <p className="section-description">
                    We ensure applications are accurate and complete to minimize rejection risk. If issues arise, we handle resubmission and corrections at no additional cost.
                  </p>
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
                  Ready to Get Your Business<br />
                  <span className="highlight">Fully Compliant?</span>
                </h2>
                <p className="cta-text">
                  Let us handle your registrations and licenses while you focus on growing your business
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Get Free Consultation
                  </button>
                  <button className="btn btn-outline-custom">
                    Check Requirements
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

export default DSCLegalServices;