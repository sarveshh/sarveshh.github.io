import { styled } from "@mui/material/styles";

export const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  justifyContent: "space-around",
  margin: "30px 100px",
}));

export const AboutMeSection = styled("div")(({ theme }) => ({
  paddingRight: "60px",
  [theme.breakpoints.down("md")]: {
    paddingRight: "0px",
  },
  textAlign: "justify",
  textJustify: "inter-word",
}));

export const AboutMeIllustration = styled("img")(({ theme }) => ({
  height: "500px",
  [theme.breakpoints.down("md")]: {
    height: "300px",
  },
}));
