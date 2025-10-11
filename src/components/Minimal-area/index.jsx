/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
  }, []);
  
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <p className="wow txt" data-wow-delay=".1s">
                UJ Software & Solutions (UJSS) is a leading technology partner specializing in cloud infrastructure, Tally solutions, and digital transformation services. We don&apos;t just provide technology—we build smart digital ecosystems that empower businesses to scale faster, work smarter, and achieve sustainable growth.
              </p>
              
              <p className="wow txt" data-wow-delay=".2s">
                With years of expertise and a commitment to innovation, we serve startups, SMEs, and enterprises across India, delivering secure cloud solutions, expert Tally implementation, and comprehensive digital services that drive real business results.
              </p>

              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    To empower businesses with cutting-edge cloud technology and reliable Tally solutions that simplify operations, enhance productivity, and drive growth. We are committed to delivering secure, scalable, and cost-effective digital solutions backed by 24/7 support, ensuring our clients stay ahead in the competitive market.
                  </p>
                </li>
                
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Digital Transformation:</strong> Help 10,000+ businesses migrate to cloud infrastructure by 2026
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Tally Excellence:</strong> Become the most trusted Tally partner across Maharashtra and beyond
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Innovation Leadership:</strong> Introduce AI-powered automation and smart business solutions
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Customer Success:</strong> Achieve 100% client satisfaction through proactive support and reliable service
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      <strong>Growth Partnership:</strong> Enable businesses to scale operations without technology constraints
                    </li>
                  </ul>
                </li>
                
                <li className="wow fadeInUp" data-wow-delay=".5s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <div style={{ marginTop: '15px' }}>
                    <p style={{ marginBottom: '15px' }}>
                      <strong>Proven Expertise:</strong> 30+ years of combined experience in cloud technology, Tally ERP, and digital solutions with hundreds of successful implementations.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                      <strong>24/7 Proactive Support:</strong> Round-the-clock technical assistance ensuring your business operations never stop, with expert support available via phone, email, chat, and remote access.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                      <strong>Cost-Effective Solutions:</strong> Affordable pricing without compromising quality, delivering maximum ROI through optimized cloud infrastructure and efficient Tally deployment.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                      <strong>Secure & Reliable:</strong> Enterprise-grade security, automatic backups, and 99.9% uptime guarantee protecting your critical business data and operations.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                      <strong>End-to-End Services:</strong> From consultation and implementation to training and ongoing maintenance—we handle everything so you can focus on growing your business.
                    </p>
                    <p style={{ marginBottom: '0' }}>
                      <strong>Authorized & Certified:</strong> Official Tally Support Centre with certified professionals, ensuring you receive authentic solutions and expert guidance at every step.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;