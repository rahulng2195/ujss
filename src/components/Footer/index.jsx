/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '' : 'sub-bg'} pb-0`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 p-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> enquiry@ujss.in
                  </li>
                  <li>
                    <span>Address : </span> 78 Business Park Promises, 4th Floor, Office No. 418 BMC Building, Bhandup Station Road, Bhandup - west.
                  </li>
                  <li>
                    <span>Phone : </span> +91-9082405331, +91-9167423035
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a
                    href="https://www.facebook.com/ujsoftwaresolutions/"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a href="https://www.instagram.com/ujsoftware"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/anita-jaiswal-551968a1"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512.935980503196!2d72.93180369928787!3d19.14676682697231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9fd9cebf537%3A0xc6d90c706316028f!2sBmc%20Market%20Building!5e1!3m2!1sen!2sin!4v1759934400851!5m2!1sen!2sin"
              className="w-100 h-100"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UJ Software Location"
            />
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2025, All Rights Reserved By <Link href="/"><span>UJSS</span></Link>.
          </p>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
