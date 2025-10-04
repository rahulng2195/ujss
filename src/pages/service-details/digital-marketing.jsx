import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Search, Share2, FileText, MousePointerClick, Mail, BarChart3, Target, TrendingUp, Users, Award, Zap, Globe } from 'lucide-react';

const DigitalMarketingService = () => {
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
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Get found by customers searching for your services. We optimize your website to appear on the first page of Google, bringing you more visibility and organic traffic."
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Connect with your audience where they spend their time. We create engaging content and manage your presence on Facebook, Instagram, LinkedIn, and other platforms."
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Quality content that attracts and converts. We create blogs, articles, and videos that educate your audience and establish your brand as an industry leader."
    },
    {
      icon: MousePointerClick,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Instant visibility with targeted ads. We manage Google Ads and social media campaigns that deliver qualified leads while maximizing your advertising budget."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Stay connected with your customers. We design email campaigns that nurture relationships, promote offers, and drive repeat business with personalized messaging."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Understand what's working. We provide clear, actionable reports showing your marketing performance, website traffic, and return on investment."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Reach Your Ideal Customers",
      description: "Stop wasting money on people who aren't interested. We help you target exactly the customers who need your products or services."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business Online",
      description: "Increase your website traffic, generate more leads, and boost sales through strategic digital marketing campaigns that deliver measurable results."
    },
    {
      icon: Users,
      title: "Build Brand Awareness",
      description: "Make your business memorable. We create consistent messaging across all platforms so customers recognize and trust your brand."
    },
    {
      icon: Award,
      title: "Stay Ahead of Competitors",
      description: "Your competitors are already online. We help you stand out with creative strategies that capture attention and win customers."
    }
  ];

  const process = [
    {
      icon: Search,
      title: "Research & Strategy",
      description: "We start by understanding your business, target audience, and goals. Then we create a customized digital marketing plan tailored to your needs."
    },
    {
      icon: Zap,
      title: "Implementation & Optimization",
      description: "Our team launches your campaigns across selected channels, continuously monitoring and adjusting for the best performance and results."
    },
    {
      icon: BarChart3,
      title: "Tracking & Reporting",
      description: "Receive regular, easy-to-understand reports showing exactly how your marketing is performing and the value it's delivering to your business."
    },
    {
      icon: Globe,
      title: "Continuous Growth",
      description: "Digital marketing is ongoing. We constantly refine strategies, test new approaches, and scale what works to keep growing your online presence."
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
                  <span className="service-tag">Digital Growth Solutions</span>
                  <h1 className="hero-title">
                    Digital Marketing<br />
                    <span className="highlight">Services</span>
                  </h1>
                  <p className="hero-subtitle">Grow Your Business Online. Reach More Customers. Increase Sales.</p>
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
                <h2 className="section-title">Why Digital Marketing Matters</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  In today's digital world, your customers are online—searching, browsing, and making decisions. 
                  Digital marketing helps you meet them where they are, build meaningful connections, and turn 
                  online visitors into loyal customers. Whether you're looking to increase brand awareness, drive 
                  website traffic, or boost sales, our comprehensive digital marketing solutions are designed to 
                  deliver real, measurable results for your business.
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
                <h2 className="section-title">Our Digital Marketing Services</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Comprehensive solutions to amplify your online presence and drive business growth.
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
                <h2 className="section-title">Benefits for Your Business</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Discover how digital marketing transforms your business and delivers tangible results.
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

        {/* Our Process Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">04</div>
                <h2 className="section-title">How We Work</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Our proven approach ensures your digital marketing delivers maximum impact and measurable ROI.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {process.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
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

        {/* Why Choose Us Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">05</div>
                <h2 className="section-title">Why Choose Us</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description mb-4">
                  <strong>Results-Driven Approach:</strong> We focus on delivering measurable outcomes that directly impact your bottom line, not just vanity metrics.
                </p>
                <p className="section-description mb-4">
                  <strong>Transparent Communication:</strong> No confusing jargon. We explain everything in simple terms and keep you informed with regular updates and clear reports.
                </p>
                <p className="section-description mb-4">
                  <strong>Industry Expertise:</strong> Our team stays updated with the latest digital marketing trends and best practices to keep your business ahead of the curve.
                </p>
                <p className="section-description">
                  <strong>Customized Solutions:</strong> Every business is unique. We create tailored strategies that align with your specific goals, budget, and target audience.
                </p>
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
                  Ready to Grow Your<br />
                  <span className="highlight">Online Presence?</span>
                </h2>
                <p className="cta-text">
                  Let's discuss how digital marketing can help your business reach more customers and increase revenue
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Get Free Consultation
                  </button>
                  <button className="btn btn-outline-custom">
                    View Our Portfolio
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

export default DigitalMarketingService;