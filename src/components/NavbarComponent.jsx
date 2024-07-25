import { useState } from "react";
import logo from "../assets/Helmi logo 1.png";
import PropTypes from "prop-types";

const NavbarComponent = ({ handleNavItemClick }) => {
  const [openNav, setOpenNav] = useState(false);

  const handleNavToggle = () => {
    setOpenNav(!openNav);
  };

  const handleItemClick = (section) => {
    handleNavItemClick(section);
    setOpenNav(false);
  };

  return (
    <div className="w-full bg-gradient-to-b from-lime-50 fixed z-50">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-24" />
        {/* hamburger menu */}
        <button
          className="btn btn-circle swap swap-rotate bg-transparent border-none z-30 relative"
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
      {/* isi navbar jika opened */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs bg-quaternary h-screen transform ${openNav ? "translate-x-24" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}
      >
        <ul className="text-primary font-medium flex flex-col gap-3 pt-10 px-5">
          <li onClick={() => handleItemClick("home")}>Home</li>
          <li onClick={() => handleItemClick("about")}>About</li>
          <li onClick={() => handleItemClick("skills")}>Skills</li>
          <li onClick={() => handleItemClick("certificate")}>Certificate</li>
          <li onClick={() => handleItemClick("experience")}>Experience</li>
          <li onClick={() => handleItemClick("contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
  handleNavItemClick: PropTypes.func
}