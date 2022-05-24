import React from "react";
import navbarItems from "../Navbar/NavbarItems";
import {
  SidebarContainer,
  CloseIconContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLinks,
} from "./SidebarStyles";

const Sidebar = ({ isopen, toggle }) => {
  return (
    <SidebarContainer isopen={isopen.toString()} onClick={toggle}>
      <CloseIconContainer>
        <CloseIcon onClick={toggle} />
      </CloseIconContainer>
      <SidebarMenu className="sidebar-menu">
        {navbarItems.map((item, index) => (
          <SidebarLinks to={item.link} key={index} className="sidebar-links">
            {item.title}
          </SidebarLinks>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
