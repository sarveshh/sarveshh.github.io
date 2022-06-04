import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const ProjectContainer = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  margin: "30px 100px",
}));

export const ProjectSection = styled("div")(({ theme }) => ({
  paddingRight: "60px",
  textAlign: "justify",
  textJustify: "inter-word",
}));

export const ProjectPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 25,
  padding: "30px",
  backgroundColor: "#f5f5f5",
}));
