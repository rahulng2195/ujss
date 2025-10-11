import React from "react";
import Split from "../Split";

const AboutIntro = () => {
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
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
