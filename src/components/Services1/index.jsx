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
            <Link href="/service">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link>
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
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s">
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>AI Agents <sup><span className="badge badge-danger">New</span></sup></h6>
            <p>
              An intelligent AI agent that automates tasks, analyzes data, and delivers smart business insights.
            </p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
