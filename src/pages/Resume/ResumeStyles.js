import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const ResumeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const GoogleDriveButton = styled(Button)(({ theme }) => ({
  width: "80px",
  height: "80px",
  boxSizing: "border-box",
  padding: "0px 0px",
  borderRadius: "50%",
  position: "relative",
  background: "rgba(255, 255, 255, 0.2)",
  backgroundClip: "content-box",
  transition: "0.2s",
  margin: "20px",

  "&:hover": {
    background: "rgba(255, 255, 255, 1)",
  },

  "&::before": {
    inset: "1px",
    content: `""`,
    position: "absolute",
    pointerEvents: "none",
    outline: "5px solid white",
    borderRadius: "50%",
    opacity: 0,
    transform: "scale(2)",
    transition: "0.2s",
  },
  "&:hover::before": {
    opacity: 1,
    transform: "scale(1)",
  },
}));
