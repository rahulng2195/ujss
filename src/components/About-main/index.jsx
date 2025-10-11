import React from "react";
import Split from "../Split";

const AboutMain = () => {
  return (
    <section className="intro-section section-padding pb-0 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                 UJ Software & Solutions (UJSS) is a leading technology partner specializing in cloud infrastructure, Tally solutions, and digital transformation services. We don&#39;t just provide technology—we build smart digital ecosystems that empower businesses to scale faster, work smarter, and achieve sustainable growth.
                </p>
                <p className="wow txt words chars splitting mt-2" data-splitting>With years of expertise and a commitment to innovation, we serve startups, SMEs, and enterprises across India, delivering secure cloud solutions, expert Tally implementation, and comprehensive digital services that drive real business results.</p>
              </Split>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-md-2">
            <div className="htit sm-mb30">
              <h4>Our Mission</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mt-md-2">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                 To empower businesses with cutting-edge cloud technology and reliable Tally solutions that simplify operations, enhance productivity, and drive growth. We are committed to delivering secure, scalable, and cost-effective digital solutions backed by 24/7 support, ensuring our clients stay ahead in the competitive market.
                </p>
              </Split>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-md-2">
            <div className="htit sm-mb30">
              <h4>Our Goal</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mt-md-2">
            <div className="text">
              <Split>
                <ul>
                    <li className="p-2">
                      <strong>Digital Transformation:</strong> Help 10,000+ businesses migrate to cloud infrastructure by 2026
                    </li>
                    <li className="p-2">
                      <strong>Tally Excellence:</strong> Become the most trusted Tally partner across Maharashtra and beyond
                    </li>
                    <li className="p-2">
                      <strong>Innovation Leadership:</strong> Introduce AI-powered automation and smart business solutions
                    </li>
                    <li className="p-2">
                      <strong>Customer Success:</strong> Achieve 100% client satisfaction through proactive support and reliable service
                    </li>
                    <li className="p-2">
                      <strong>Growth Partnership:</strong> Enable businesses to scale operations without technology constraints
                    </li>
                  </ul>
              </Split>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-md-2">
            <div className="htit sm-mb30">
              <h4>Why Us?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mt-md-2">
            <div className="text">
              <Split>
                <ul>
                    <li className="p-2">
                      <strong>Proven Expertise:</strong> 8+ years of combined experience in cloud technology, Tally ERP, and digital solutions with hundreds of successful implementations.
                    </li>
                    <li className="p-2">
                      <strong>24/7 Proactive Support:</strong> Round-the-clock technical assistance ensuring your business operations never stop, with expert support available via phone, email, chat, and remote access.
                    </li>
                    <li className="p-2">
                      <strong>Cost-Effective Solutions:</strong> Affordable pricing without compromising quality, delivering maximum ROI through optimized cloud infrastructure and efficient Tally deployment.
                    </li>
                    <li className="p-2">
                      <strong>Secure & Reliable:</strong> Enterprise-grade security, automatic backups, and 99.9% uptime guarantee protecting your critical business data and operations.
                    </li>
                    <li className="p-2">
                      <strong>End-to-End Services:</strong> From consultation and implementation to training and ongoing maintenance—we handle everything so you can focus on growing your business.
                    </li>
                    <li className="p-2">
                      <strong>Authorized & Certified:</strong> Official Tally Support Centre with certified professionals, ensuring you receive authentic solutions and expert guidance at every step.
                    </li>
                  </ul>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
