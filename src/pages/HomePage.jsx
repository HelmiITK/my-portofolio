import Navbar from "../components/NavbarComponent"
import MainSactionComponent from "../components/MainSactionComponent"
import AboutComponent from "../components/AboutComponent"
import ContactMeComponent from "../components/ContactMeComponent"
import FooterComponent from "../components/FooterComponent"

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto bg-primary h-auto">
        <Navbar />
        <MainSactionComponent />
        <AboutComponent />
        <ContactMeComponent />
        <FooterComponent />
      </div>
    </>
  )
}

export default HomePage