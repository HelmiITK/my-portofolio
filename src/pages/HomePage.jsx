import Navbar from "../components/NavbarComponent"
import MainSactionComponent from "../components/MainSactionComponent"
import AboutComponent from "../components/AboutComponent"

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto bg-primary h-auto">
        <Navbar />
        {/* main section */}
        <MainSactionComponent />
        <AboutComponent />
      </div>
    </>
  )
}

export default HomePage