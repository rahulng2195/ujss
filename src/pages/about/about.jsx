import React from "react";
import AboutHeader from "../../components/About-header";
import AboutIntro from "../../components/About-intro";
import AboutMain from "../../components/About-main";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";

const AboutDark = () => {
  const fixedHeader = React.useRef(null);
    const MainContent = React.useRef(null);
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
  
    React.useEffect(() => {
      setInterval(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
        }
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }, 1000);
      var navbar = navbarRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });
    }, []);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <AboutHeader  sliderRef={fixedHeader}/>
      {/* <AboutIntro /> */}
      <AboutMain />
      {/* <MinimalArea /> */}
      {/* <Services4 withPadding withOutTitle /> */}
      <VideoWithTestimonials />
      <SkillsCircle subBG theme="dark" />
      {/* <Team1 /> */}
      <Clients1 theme="dark" />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
