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
        <div ref={homeRef} className="lg:scroll-mt-10"><MainSactionComponent /></div>
        <div ref={aboutRef} className="scroll-mt-10"><AboutComponent /></div>
        <div ref={skillsRef} className="scroll-mt-20"><SkillsComponent /></div>
        <div ref={certificateRef} className="scroll-mt-20"><CertificateComponent /></div>
        <div ref={experienceRef} className="scroll-mt-20"><ExperienceComponent /></div>
        <div ref={contactRef} className="scroll-mt-20"><ContactMeComponent /></div>
        <FooterComponent />
      </div>
    </>
  )
}

export default HomePage