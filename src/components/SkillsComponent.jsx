import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import canvaLogo from "../assets/canva-logo.png";
import figmaLogo from "../assets/Figma 1.png"
import reactLogo from "../assets/React 1.png"
import htmlLogo from "../assets/HTML.png"
import gitLogo from "../assets/Git 1.png"
import cssLogo from "../assets/CSS3 1.png"
import bootstrapLogo from "../assets/Bootsrap 1.png"
import jsLogo from "../assets/JS 1.png"
import tailwindLogo from "../assets/Tailwind.png"
import postmanLogo from "../assets/postman-logo.png"
import vercelLogo from "../assets/vercel-logo.svg"
import reduxLogo from "../assets/redux-logo.png"
import unityLogo from "../assets/unity-logo.png"
import aspriteLogo from "../assets/aspirite-logo.png"

const SkillsComponent = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    pauseOnHover: false
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    ltr: true,
    pauseOnHover: false
  };
  return (
    <>
      <div className="relative">
        <h1 className="text-white font-medium text-2xl capitalize text-center">
          my skills
        </h1>
        {/* skill1 */}
        <div className="slider-container overflow-hidden mt-6 mb-6 bg-transparent py-2 shadow-[0px_2px_70px_-10px] shadow-green-500 drop-shadow-2xl">
          <Slider {...settings1}>
            <img
              src={reactLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img src={jsLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img src={bootstrapLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img src={tailwindLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img src={htmlLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img src={cssLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img src={reduxLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
          </Slider>
        </div>
        {/* <div className="h-3 w-full my-4 bg-gradient-to-l from-white via-quaternary rounded-badge blur-md loading-dots shadow-xl drop-shadow-xl shadow-quaternary"></div> */}
        {/* skill2 */}
        <div className="slider-container overflow-hidden bg-transparent  py-2 shadow-[0px_2px_70px_-10px] shadow-green-500 drop-shadow-2xl">
          <Slider {...settings2}>
            <img
              src={figmaLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img
              src={gitLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img
              src={canvaLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img
              src={postmanLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img
              src={vercelLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img
              src={unityLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
            <img
              src={aspriteLogo}
              alt=""
              className="w-12 h-12 object-contain"
            />
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SkillsComponent