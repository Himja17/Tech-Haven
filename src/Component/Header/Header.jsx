import "./Header.scss";
import logo from "../../Assets/Logo/logo.png";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  


  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="header__right">
        <ul className="header__links">
          <Link to="/" className="header__links--each">
            <li>Home</li>
          </Link>

          <Link to="/services" className="header__links--each">
            <li>Services</li>
          </Link>
          <Link to="/" className="header__links--each">
            <li>About</li>
          </Link>
          <Link to="/" className="header__links--each">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <MdMenu className="hamburger" id="hamburger-toggle"/>
    </nav>
  );
}

export default Header;
