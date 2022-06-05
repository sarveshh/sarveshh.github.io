import React, { useState } from "react";
import navbarItems from "./NavbarItems";
import { FaBars } from "react-icons/fa";
import LogoSvg from "../../assets/LogoSvg";
import { Nav, Link, MobileMenuIcon, NavMenu } from "./NavbarStyles";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Nav navbar={navbar.toString()}>
      <Link to="/">
        <LogoSvg width="15%" />
      </Link>
      <NavMenu>
        {navbarItems.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </NavMenu>

      <MobileMenuIcon>
        <FaBars onClick={toggle} />
      </MobileMenuIcon>
    </Nav>
  );
};

export default Navbar;
