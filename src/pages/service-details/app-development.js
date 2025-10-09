import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Smartphone, TabletSmartphone, Layers, Zap, Users, ShoppingBag, Bell, Lock, RefreshCw, Award, TrendingUp, Heart } from 'lucide-react';
import Footer from "../../components/Footer";

const AppDevelopment = () => {
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
      icon: Smartphone,
      title: "iOS App Development",
      description: "Native iPhone and iPad apps built with Swift, delivering exceptional performance and seamless integration with Apple's ecosystem."
    },
    {
      icon: TabletSmartphone,
      title: "Android App Development",
      description: "Feature-rich Android applications that reach billions of users worldwide, optimized for various devices and screen sizes."
    },
    {
      icon: Layers,
      title: "Cross-Platform Apps",
      description: "Build once, deploy everywhere. Cost-effective apps that work flawlessly on both iOS and Android using React Native or Flutter."
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Apps",
      description: "Mobile shopping experiences that drive sales with secure payments, product catalogs, and personalized user experiences."
    },
    {
      icon: Users,
      title: "Social & Community Apps",
      description: "Engaging platforms that connect people, foster communities, and enable seamless communication and content sharing."
    },
    {
      icon: Zap,
      title: "On-Demand Service Apps",
      description: "Uber-like apps for various services—food delivery, taxi booking, home services, and more with real-time tracking."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Direct Customer Access",
      description: "Put your business in your customers' pockets. Apps provide instant access to your services, making it easier for customers to engage with you."
    },
    {
      icon: Bell,
      title: "Enhanced Customer Engagement",
      description: "Send personalized notifications, offers, and updates directly to users' devices, keeping your brand top-of-mind."
    },
    {
      icon: TrendingUp,
      title: "Increase Sales & Revenue",
      description: "Mobile apps can significantly boost sales through improved user experience, personalized recommendations, and seamless checkout processes."
    },
    {
      icon: Award,
      title: "Build Brand Loyalty",
      description: "Apps create stronger connections with customers through personalized experiences, loyalty programs, and exclusive mobile-only features."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Fast, responsive apps optimized for smooth performance even with heavy usage and complex features."
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Built with industry-standard security practices to protect user data and ensure safe transactions."
    },
    {
      icon: RefreshCw,
      title: "Offline Functionality",
      description: "Apps that work even without internet, syncing data automatically when connection is restored."
    },
    {
      icon: Heart,
      title: "Intuitive User Experience",
      description: "Beautiful, user-friendly interfaces designed for easy navigation and high user satisfaction."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Concept & Strategy",
      description: "We analyze your business needs, target audience, and goals to define the perfect app strategy and features."
    },
    {
      number: "02",
      title: "Design & Prototype",
      description: "Creating intuitive user interfaces and interactive prototypes to visualize the app before development begins."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building your app with clean code and rigorous testing to ensure flawless functionality across all devices."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "App store submission, successful launch, and ongoing maintenance to keep your app updated and performing optimally."
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
                  <span className="service-tag">Mobile Solutions</span>
                  <h1 className="hero-title">
                    Mobile App<br />
                    <span className="highlight">Development</span>
                  </h1>
                  <p className="hero-subtitle">Powerful Apps That Connect You With Customers Everywhere</p>
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
                <h2 className="section-title">Your Business in Every Pocket</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  With billions of smartphone users worldwide, mobile apps have become the most powerful way to reach 
                  and engage customers. A well-designed mobile app doesn&#39;t just provide convenience—it creates memorable 
                  experiences, builds customer loyalty, and opens new revenue streams. Whether you need a simple app or 
                  a complex platform, we develop mobile solutions that help your business thrive in the mobile-first world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">App Solutions We Build</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  From native to cross-platform apps, we create mobile solutions for every business need.
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
              <div className="col-lg-4 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">Why Your Business Needs a Mobile App</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  Discover how mobile apps can transform customer relationships and drive business growth.
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
                <h2 className="section-title">What Makes Our Apps Stand Out</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  We build apps with features that users love and technology that businesses trust.
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
                <h2 className="section-title">Our App Development Journey</h2>
              </div>
              <div className="col-lg-7 col-md-8 offset-lg-1">
                <p className="section-description">
                  From idea to app store, we guide you through every step of the development process.
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
                  Ready to Launch Your<br />
                  <span className="highlight">Mobile App?</span>
                </h2>
                <p className="cta-text">
                  Let&#39;s turn your app idea into reality and connect you with millions of mobile users
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Discuss Your App Idea
                  </button>
                  <button className="btn btn-outline-custom">
                    See Our Apps
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

export default AppDevelopment;