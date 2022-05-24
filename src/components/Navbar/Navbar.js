import React, { useState } from "react";
import navbarItems from "./NavbarItems";
import { FaBars } from "react-icons/fa";
import LogoSvg from "../../assets/LogoSvg";
import { Nav, Link, MobileMenuIcon } from "./NavbarStyles";
import { Box } from "@mui/material";

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
        <LogoSvg />
      </Link>
      <Box display="flex" alignItems="center">
        {navbarItems.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </Box>

      <MobileMenuIcon>
        <FaBars onClick={toggle} />
      </MobileMenuIcon>
    </Nav>
  );
};

export default Navbar;
