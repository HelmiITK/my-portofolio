import Navbar from "../components/NavbarComponent"
import MainSactionComponent from "../components/MainSactionComponent"
import AboutComponent from "../components/AboutComponent"
import SkillsComponent from "../components/SkillsComponent"
import CertificateComponent from "../components/CertificateComponent"
import ContactMeComponent from "../components/ContactMeComponent"
import FooterComponent from "../components/FooterComponent"

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto bg-primary h-auto">
        <Navbar />
        <MainSactionComponent />
        <AboutComponent />
        <SkillsComponent />
        <CertificateComponent />
        <ContactMeComponent />
        <FooterComponent />
      </div>
    </>
  )
}

export default HomePage