import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">
              Best Of <br /> Our Features
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s">
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>Cloud & Servers</h6>
            <p>
              This would involve cloud hosting, server management, and related infrastructure services.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s">
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>Tally Solutions</h6>
            <p>
              Tally is a popular accounting and ERP software in India. This service likely includes Tally software sales, implementation, and support.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s">
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>Digital Marketing</h6>
            <p>
              This is a broad category, but the user is likely offering services like SEO, social media marketing, and content marketing.
            </p>
          </div>
          {/* <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>
              DSC &amp; <br /> Legal Services
            </h6>
            <p>DSC stands for Digital Signature Certifi cate. This service likely involves providing DSCs and other related legal compliance services for businesses.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>
              Business Applications
            </h6>
            <p>This could refer to custom software development, CRM implementation, or other business process automation tools.</p>
          </div> */}
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
