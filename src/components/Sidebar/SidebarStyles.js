import { styled } from "@mui/material/styles";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled("div")(({ theme, isopen }) => ({
  position: "fixed",
  zIndex: 999,
  width: "100%",
  height: "100%",
  background: "#000d1a",
  display: "grid",
  alignItems: "center",
  left: 0,
  transition: "0.3s ease-in-out",

  opacity: isopen === "true" ? 1 : 0,
  top: isopen === "true" ? 0 : "-100%",
}));

export const CloseIconContainer = styled("div")(({ theme }) => ({
  background: "transparent",
  fontSize: "2rem",
  cursor: "pointer",
  outline: "none",
  color: "white",
  position: "absolute",
  top: "2rem",
  right: "2.5rem",
}));

export const CloseIcon = styled(FaTimes)(({ theme }) => ({
  color: "whitesmoke",
}));

export const SidebarMenu = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(4, 80px)",
  textAlign: "center",
  marginBottom: "4rem",

  "@media (max-width:480px)": {
    gridTemplateRows: "repeat(4, 60px)",
  },
}));

export const SidebarLinks = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "1.5rem",
  textDecoration: "none",
  listStyle: "none",
  cursor: "pointer",
  transition: "0.2s ease-in-out",
}));
