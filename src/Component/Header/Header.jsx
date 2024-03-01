import "./Header.scss";
import logo from "../../Assets/Logo/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleToggle() {
    setIsNavOpen(!isNavOpen);
  }
  function handleToggleClose() {
    setIsNavOpen(false);
  }

  const iconStyle = {
    width: "40px",
    height: "45px",
  };

  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__nav--links">
        <div
          className={`hamburger ${isNavOpen ? "hide" : ""}`}
          onClick={handleToggle}
        >
          <MdMenu style={iconStyle} />
        </div>
        {isNavOpen && (
          <div className={`hamburger-close`} onClick={handleToggleClose}>
            <MdClose style={iconStyle} />
          </div>
        )}

        <div className={`header__right ${isNavOpen ? "open" : ""}`}>
          <ul className="header__links">
            <li className="header__links--each">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={100}
                onClick={handleToggleClose}
              >
                Home
              </Link>
            </li>

            <li className="header__links--each">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleToggleClose}
              >
                Services
              </Link>
            </li>

            <li className="header__links--each">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleToggleClose}
              >
                About
              </Link>
            </li>

            <li className="header__links--each">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleToggleClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
