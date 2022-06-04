import { styled } from "@mui/material/styles";

export const CursorDotOutline = styled("div")(({ theme }) => ({
  width: "12px",
  height: "12px",
  backgroundColor: "rgba(220, 90, 90, 0.3)",

  zIndex: 999,
  pointerEvents: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "50%",
  opacity: 0,
  transform: "translate(-50%, -50%)",
  transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
}));

export const CursorDot = styled("div")(({ theme }) => ({
  width: "12px",
  height: "12px",
  backgroundColor: "rgba(220, 90, 90, 1)",

  zIndex: 9999999,
  pointerEvents: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "50%",
  opacity: 0,
  transform: "translate(-50%, -50%)",
  transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
}));
