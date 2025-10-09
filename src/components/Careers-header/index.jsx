import React from "react";
import Split from "../Split";
import addParlx from "../../common/addParlx";


const CareersHeader = ({ sliderRef }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
    React.useEffect(() => {
      setPageLoaded(true);
      if (pageLoaded) {
        addParlx()
      }
    }, [pageLoaded])
    return (
      <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">
                    <span>Let&apos;s</span>Join Our Team.
                  </h2>
                  <p>
                    Build your career with us and be part of an innovative team 
                  shaping the future of cloud computing and business solutions.
                  </p>
                </div>
  
                <div className="bactxt custom-font valign">
                  <span className="full-width">careers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default CareersHeader;