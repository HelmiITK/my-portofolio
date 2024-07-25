import Navbar from "../components/NavbarComponent"
import MainSactionComponent from "../components/MainSactionComponent"
import AboutComponent from "../components/AboutComponent"
import SkillsComponent from "../components/SkillsComponent"
import CertificateComponent from "../components/CertificateComponent"
import ContactMeComponent from "../components/ContactMeComponent"
import FooterComponent from "../components/FooterComponent"
import ExperienceComponent from "../components/ExperienceComponent"
import { useRef } from "react"

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const certificateRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavItemClick = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "certificate":
        certificateRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="container mx-auto bg-primary h-auto">
        <Navbar handleNavItemClick={handleNavItemClick} />
        <div ref={homeRef}><MainSactionComponent /></div>
        <div ref={aboutRef}><AboutComponent /></div>
        <div ref={skillsRef}><SkillsComponent /></div>
        <div ref={certificateRef}><CertificateComponent /></div>
        <div ref={experienceRef}><ExperienceComponent /></div>
        <div ref={contactRef}><ContactMeComponent /></div>
        <FooterComponent />
      </div>
    </>
  )
}

export default HomePage