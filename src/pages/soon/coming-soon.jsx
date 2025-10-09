import React from "react";
import Head from "next/head";
import Link from "next/link";
import appData from "../../data/app.json";

const ComingSoonSimple = () => {
  return (
    <>
      <Head>
        <title>Coming Soon - UJ Software & Solutions</title>
      </Head>
      
      <div className="coming-soon-simple">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-lg-8 text-center">
              {/* Logo */}
              <div className="mb-5">
                <img src={appData.lightLogo} alt="Logo" className="logo mb-4" />
              </div>

              {/* Content */}
              <h1 className="display-3 fw-bold text-white mb-4">
                Coming Soon
              </h1>
              <p className="lead text-white-50 mb-5">
                We're working on something exciting. This page will be available soon!
              </p>

              {/* Back to Home */}
              <Link href="/">
                <a className="btn-back-home">
                  <i className="fas fa-arrow-left me-2"></i>
                  Back to Home
                </a>
              </Link>

              {/* Contact */}
              <div className="mt-5 pt-5">
                <p className="text-white-50">Need help?</p>
                <a href="mailto:enquiry@ujss.in" className="text-white">
                  enquiry@ujss.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .coming-soon-simple {
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0e14 0%, #1a1f2e 100%);
            position: relative;
            overflow: hidden;
          }

          .logo {
            max-width: 200px;
            height: auto;
          }

          .btn-back-home {
            display: inline-flex;
            align-items: center;
            padding: 15px 40px;
            background: linear-gradient(135deg, #75bed9, #5a9fb8);
            color: #fff;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .btn-back-home:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(117, 190, 218, 0.3);
            color: #fff;
          }

          @media (max-width: 768px) {
            .logo {
              max-width: 150px;
            }

            .display-3 {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ComingSoonSimple;