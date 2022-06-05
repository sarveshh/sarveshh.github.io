import { styled } from "@mui/material/styles";

export const HeroContainer = styled("div")(({ theme }) => ({
  height: "calc(100vh - 100px)",
  width: "100vw",
  display: "flex",
  position: "absolute",
  justifyContent: "space-between",
  padding: "7vw",
  alignItems: "center",
  background: theme.palette.background.default,
}));

export const LetterAnimate = styled("span")(({ theme }) => ({
  fontSize: "6rem",
  "&:hover": {
    color: "red",
  },
}));

export const TypewriterComponent = styled("div")(({ theme }) => ({
  fontSize: "2.7rem",
  fontWeight: "bold",
  color: "#fff",
  overflow: "hidden",
  textShadow: `${theme.palette.typewriter.shadow}`,
  animation: "typewriter 1s steps(30) 1s 1 normal both",
}));
