import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RingDiv = styled(Box)(({ theme, x, y }) => ({
  position: "fixed",
  top: y ? `${y}px` : 0,
  left: x ? `${x}px` : 0,
  width: "22px",
  height: "22px",
  border: "2px solid rgba(31, 30, 30, 0.808)",
  borderRadius: "100%",
  transform: "translate(-50%, -50%)",
  transitionDuration: "100ms",
  transitionTimingFunction: "ease-out",
  willChange: "width, height, transform, border",
  zIndex: 999,
  pointerEvents: "none",

  "&:hover": {
    width: "50px",
    height: "50px",
    borderWidth: "3px",
    borderColor: "lightgray",
  },
}));

export const DotDiv = styled(Box)(({ theme, x, y }) => ({
  position: "fixed",
  top: y ? `${y}px` : "50%",
  left: x ? `${x}px` : "50%",
  width: "8px",
  height: "8px",
  backgroundColor: "black",
  borderRadius: "100%",
  transform: "translate(-50%, -50%)",
  zIndex: 999,
  pointerEvents: "none",

  "&:hover": {
    display: "none",
  },
}));
