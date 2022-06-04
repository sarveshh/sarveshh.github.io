import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Nav = styled("nav")(({ theme, navbar }) => ({
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  zIndex: 100,
  position: "relative",
  width: "100%",
  background: navbar === "true" ? "red" : "transparent",
}));

export const Link = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  color: "black",
  alignItems: "center",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",

  "&.active": {
    color: "red",
  },
}));

export const NavMenu = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "@media (max-width:768px)": {
    display: "none",
  },
}));

export const MobileMenuIcon = styled("div")(({ theme }) => ({
  display: "none",

  "@media (max-width:768px)": {
    display: "block",
    color: "black",
    alignItems: "center",
    fontSize: "4vh",
    cursor: "pointer",
    top: 0,
    right: 0,
  },
}));
