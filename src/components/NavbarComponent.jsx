import { useEffect, useState } from "react";
import logo from "../assets/Helmi logo 1.png";
import PropTypes from "prop-types";

const NavbarComponent = ({ handleNavItemClick }) => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = () => {
    setOpenNav(!openNav);
  };

  const handleItemClick = (section) => {
    handleNavItemClick(section);
    setOpenNav(false);
  };

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full bg-gradient-to-b from-lime-50 fixed z-50 lg:flex justify-between items-center bg-primary bg-opacity-70 lg:from-transparent ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-24" />
        {/* hamburger menu */}
        <button
          className="btn btn-circle swap swap-rotate bg-transparent border-none z-30 relative lg:hidden"
          onClick={handleNavToggle}
        >
          {/* hamburger icon */}
          {!openNav ? (
            <svg
              className="swap-off fill-current text-quaternary"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          ) : (
            <svg
              className="swap-off fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          )}
        </button>
      </div>
      {/* isi navbar jika opened mode hp*/}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs bg-quaternary h-screen transform ${
          openNav ? "translate-x-24" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <ul className="text-primary font-medium flex flex-col gap-3 pt-10 px-5">
          <li
            onClick={() => handleItemClick("home")}
            className="cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleItemClick("about")}
            className="cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => handleItemClick("skills")}
            className="cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleItemClick("certificate")}
            className="cursor-pointer"
          >
            Certificate
          </li>
          <li
            onClick={() => handleItemClick("experience")}
            className="cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => handleItemClick("contact")}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* navbar web mode */}
      <ul className="hidden lg:flex flex-row text-white font-medium gap-16 px-5">
        <li
          onClick={() => handleItemClick("home")}
          className="cursor-pointer hover:text-quaternary hover:scale-95 hover:ease-in duration-200"
        >
          Home
        </li>
        <li
          onClick={() => handleItemClick("about")}
          className="cursor-pointer hover:text-quaternary hover:scale-95 hover:ease-in duration-200"
        >
          About
        </li>
        <li
          onClick={() => handleItemClick("skills")}
          className="cursor-pointer hover:text-quaternary hover:scale-95 hover:ease-in duration-200"
        >
          Skills
        </li>
        <li
          onClick={() => handleItemClick("certificate")}
          className="cursor-pointer hover:text-quaternary hover:scale-95 hover:ease-in duration-200"
        >
          Certificate
        </li>
        <li
          onClick={() => handleItemClick("experience")}
          className="cursor-pointer hover:text-quaternary hover:scale-95 hover:ease-in duration-200"
        >
          Experience
        </li>
        <li
          onClick={() => handleItemClick("contact")}
          className="cursor-pointer hover:text-quaternary hover:scale-95 hover:ease-in duration-200"
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
  handleNavItemClick: PropTypes.func,
};
