import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Users, ShoppingCart, BarChart3, Package, DollarSign, FileText, Settings, Zap, Target, TrendingUp, Shield, Cloud } from 'lucide-react';
import Footer from "../../components/Footer";
const BusinessSoftware = () => {
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

  const solutions = [
    {
      icon: Users,
      title: "CRM Software",
      description: "Manage customer relationships effectively with tools that track interactions, automate follow-ups, and help your sales team close more deals."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      description: "Complete online selling solutions with inventory management, payment processing, order tracking, and customer management—all in one place."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Tools",
      description: "Turn your data into actionable insights with custom dashboards, reports, and analytics that help you make smarter business decisions."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage suppliers, automate reordering, and eliminate stockouts or overstock situations with intelligent inventory control."
    },
    {
      icon: DollarSign,
      title: "Billing & Invoicing Systems",
      description: "Streamline your billing process with automated invoicing, payment tracking, recurring billing, and seamless accounting integration."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Organize, store, and retrieve business documents efficiently with secure digital filing systems and automated workflow approvals."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Automate Repetitive Tasks",
      description: "Free up your team's time by automating routine processes like data entry, report generation, and customer communications."
    },
    {
      icon: Target,
      title: "Improve Efficiency",
      description: "Streamline workflows and eliminate bottlenecks with software designed specifically for your business processes and needs."
    },
    {
      icon: TrendingUp,
      title: "Make Data-Driven Decisions",
      description: "Access real-time insights and comprehensive reports that help you identify opportunities and solve problems faster."
    },
    {
      icon: Shield,
      title: "Reduce Errors & Costs",
      description: "Minimize human errors, reduce operational costs, and improve accuracy with automated systems and validations."
    }
  ];

  const features = [
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Software tailored to your exact business requirements, not generic solutions that force you to change how you work."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Access",
      description: "Work from anywhere with secure cloud solutions that let your team access business tools from any device, anytime."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Protect sensitive business data with advanced security measures, regular backups, and compliance with industry standards."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems for smooth data flow across all your business applications."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Business Analysis",
      description: "We study your current processes, identify pain points, and understand your specific requirements in detail."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our team designs a custom software solution that perfectly fits your workflow and addresses your business challenges."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building robust, scalable software with thorough testing to ensure reliability and performance under real-world conditions."
    },
    {
      number: "04",
      title: "Training & Support",
      description: "Comprehensive user training and dedicated ongoing support to ensure your team uses the software effectively."
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
                  <span className="service-tag">Enterprise Solutions</span>
                  <h1 className="hero-title">
                    Business Software<br />
                    <span className="highlight">Solutions</span>
                  </h1>
                  <p className="hero-subtitle">Custom Software That Transforms How You Do Business</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">p
                <div className="section-number">01</div>
                <h2 className="section-title">Software Built for Your Business</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Every business is unique, with its own processes, challenges, and goals. Off-the-shelf software often 
                  falls short because it&#39;s designed for everyone, not specifically for you. We create custom business 
                  software—CRM systems, inventory management, billing solutions, and more—that fits your exact needs. 
                  Our solutions automate tasks, reduce errors, improve efficiency, and help your business run smoother 
                  and smarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Software Solutions We Build</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  From CRM to inventory management, we develop software that solves real business problems.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{solution.title}</h3>
                      <p className="benefit-description">{solution.description}</p>
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
              <div className="col-lg-4 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">How Custom Software Helps Your Business</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Discover the transformative impact of software designed specifically for your operations.
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
              <div className="col-lg-4 col-md-4">
                <div className="section-number">04</div>
                <h2 className="section-title">What Makes Our Software Different</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Built with the features and flexibility your business needs to succeed and scale.
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
              <div className="col-lg-4 col-md-4">
                <div className="section-number">05</div>
                <h2 className="section-title">Our Development Approach</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  A collaborative process that ensures your software perfectly matches your business needs.
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

        {/* Industries Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">06</div>
                <h2 className="section-title">Industries We Serve</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description mb-4">
                  <strong>Retail & E-Commerce:</strong> Inventory management, POS systems, and customer loyalty platforms.
                </p>
                <p className="section-description mb-4">
                  <strong>Manufacturing:</strong> Production tracking, supply chain management, and quality control systems.
                </p>
                <p className="section-description mb-4">
                  <strong>Healthcare:</strong> Patient management, appointment scheduling, and medical records systems.
                </p>
                <p className="section-description mb-4">
                  <strong>Professional Services:</strong> Project management, time tracking, and client billing solutions.
                </p>
                <p className="section-description">
                  <strong>Education:</strong> Student information systems, learning management platforms, and administrative tools.
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
                  Ready to Transform Your<br />
                  <span className="highlight">Business Operations?</span>
                </h2>
                <p className="cta-text">
                  Let&#39;s build custom software that automates tasks, improves efficiency, and drives growth
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Schedule Consultation
                  </button>
                  <button className="btn btn-outline-custom">
                    Explore Solutions
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

export default BusinessSoftware;