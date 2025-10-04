/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about/about-dark">
                <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </span>
              <div className="dropdown-menu">
                <Link href="/service-details/ai-agents">
                  <a className="dropdown-item">AI Agents <sup><span className="hot badge badge-danger">NEW</span></sup></a>
                </Link>
                <Link href="/service-details/app-development">
                  <a className="dropdown-item">App Development</a>
                </Link>
                <Link href="/service-details/business-softwares">
                  <a className="dropdown-item">Business Softwares</a>
                </Link>
                <li className="dropdown-submenu" onClick={handleDropdown}>
                  <span
                    className="dropdown-item dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cloud & Services
                  </span>
                  <div className="dropdown-menu">
                    <Link href="/service-details/user-based-tally-on-cloud-dark">
                      <a className="dropdown-item">User Based Tally On Cloud</a>
                    </Link>
                    <Link href="/service-details/tally-on-dedicated-cloud-server">
                      <a className="dropdown-item">Tally on Dedicated Cloud Server</a>
                    </Link>
                    <Link href="/service-details/tally-on-cloud-with-admin-panel">
                      <a className="dropdown-item">Tally on Cloud with Admin Panel</a>
                    </Link>
                    <Link href="/service-details/tally-implementation">
                      <a className="dropdown-item">Tally Implementation</a>
                    </Link>
                    <Link href="/service-details/tally-support-amc">
                      <a className="dropdown-item">Tally Support (AMC)</a>
                    </Link>
                  </div>
                </li>
                <Link href="/service-details/digital-marketing">
                  <a className="dropdown-item">Digital Marketing</a>
                </Link>
                <Link href="/service-details/dsc-and-legal-services">
                  <a className="dropdown-item">DSC & Legal Services</a>
                </Link>
                <Link href="/service-details/web-application">
                  <a className="dropdown-item">Web Application</a>
                </Link>
              </div>
            </li>
            
            <li className="nav-item">
              <Link href="/portfolio/portfolio-dark">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs/blogs-dark">
                <a className="nav-link">Blogs</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
