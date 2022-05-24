import { styled } from "@mui/material/styles";

export const HeroContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  paddingLeft: "15vw",
}));

export const LetterAnimate = styled("span")(({ theme }) => ({
  fontSize: "6rem",
  "&:hover": {
    color: "red",
    transform: "translate(scale(1.5))",
  },
}));

export const TypewriterComponent = styled("div")(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#fff",
  textShadow: "0 0 0.5rem #000",
  animation: "typewriter 1s steps(30) 1s 1 normal both",
}));
