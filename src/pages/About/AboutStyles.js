import { styled } from "@mui/material/styles";

export const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  justifyContent: "space-around",
  margin: "70px",
}));

export const AboutMeSection = styled("div")(({ theme }) => ({
  paddingRight: "60px",
  textAlign: "justify",
  textJustify: "inter-word",
}));

export const AboutMeIllustration = styled("img")(({ theme }) => ({}));
