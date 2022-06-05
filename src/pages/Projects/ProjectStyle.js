import { styled } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";

export const ProjectContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
}));

export const ProjectPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "5rem",
  padding: "30px",
  maxWidth: "70vw",
  background: "linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))",
  border: "0.2rem solid #20222e",
  backdropFilter: "blur(54px)",
}));

export const ParentProjectBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
}));

export const ParticularProjectBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "70vw",
  marginBottom: "35px",
}));

export const ProjectNumbers = styled(Typography)(({ theme }) => ({
  variant: "h1",
  fontSize: "65px",
  position: "relative",
  color: `${theme.palette.projectSection.numbers}`,
  maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
}));

export const ProjectImageLinkBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "400px",
  width: "250px",
  borderRadius: "3.5rem",
  overflow: "hidden",
}));

export const ProjectInfoDataBox = styled(Box)(({ theme }) => ({
  margin: "25px 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
