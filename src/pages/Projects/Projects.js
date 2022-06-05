import React, { useRef, useEffect } from "react";
import {
  ProjectContainer,
  ParentProjectBox,
  ParticularProjectBox,
  ProjectImageLinkBox,
  ProjectInfoDataBox,
  ProjectNumbers,
  ProjectPaper,
} from "./ProjectStyle";
import { Typography, Box, Button, Tooltip, Fade } from "@mui/material";
import { ProjectsData } from "./ProjectsData";
import hoverEffect from "hover-effect";
import { IconContext } from "react-icons/lib";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { useSelector } from "react-redux";

const Projects = () => {
  let wrappers = useRef({});
  ProjectsData.map(
    (project) => (wrappers.current[project.id - 1] = React.createRef())
  );

  useEffect(() => {
    ProjectsData.map(
      (project) =>
        new hoverEffect({
          parent: wrappers.current[project.id - 1].current,
          imagesRatio: 2245 / 1587,
          image1: project.img,
          image2: project.img2,
          displacementImage: project.distort,
        })
    );
  }, []);

  const themeValue = useSelector((state) => state.nightmode.darkmode);

  return (
    <>
      <Typography
        color="#6D83F2"
        sx={{
          margin: "30px 100px",
          typography: { sm: "h3", xs: "h4", md: "h2" },
        }}
      >
        Projects
      </Typography>
      <ProjectContainer>
        <ParentProjectBox>
          {ProjectsData.map((project, index) => (
            <ParticularProjectBox
              key={project.id}
              className={`list__${project.id}`}
            >
              <Box display="flex" justifyContent="space-around">
                <ProjectNumbers>0{project.id}</ProjectNumbers>
                <ProjectNumbers>{project.date}</ProjectNumbers>
              </Box>
              <ProjectPaper elevation={5}>
                <Box display="flex">
                  <Box
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ProjectImageLinkBox
                        className="wrapper"
                        ref={wrappers.current[project.id - 1]}
                      />
                    </a>
                  </Box>
                  <ProjectInfoDataBox>
                    <Typography
                      sx={{
                        margin: {
                          md: "30px 100px",
                          sm: "5px 10px",
                          xs: "5px 5px",
                        },
                        color: "projectSection.title",
                        typography: { sm: "h2", xs: "h3", md: "h3" },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="inherit"
                      marginBottom="20px"
                      sx={{ color: "projectSection.description" }}
                    >
                      {project.description}
                    </Typography>
                    <Box display="flex">
                      {project.tech.map((techs) => (
                        <Box key={techs.name}>
                          <IconContext.Provider
                            value={{
                              style: {
                                width: "35px",
                                height: "35px",
                                marginRight: "15px",
                              },
                            }}
                          >
                            <Tooltip
                              title={techs.name}
                              arrow
                              TransitionComponent={Fade}
                              TransitionProps={{ timeout: 600 }}
                            >
                              <Box
                                sx={{
                                  color: "projectSection.icons",
                                  width: { md: "35px", sm: "25px", xs: "20px" },
                                  marginRight: { md: "15px", xs: "20px" },
                                }}
                              >
                                {techs.icon}
                              </Box>
                            </Tooltip>
                          </IconContext.Provider>
                        </Box>
                      ))}
                    </Box>
                    <Box display="flex">
                      <Button
                        variant={
                          themeValue === "light" ? "contained" : "outlined"
                        }
                        startIcon={<BsGithub />}
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ marginRight: "15px" }}
                        color="primary"
                      >
                        GitHub
                      </Button>
                      <Button
                        variant={
                          themeValue === "light" ? "contained" : "outlined"
                        }
                        startIcon={<MdWeb />}
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="secondary"
                      >
                        Demo
                      </Button>
                    </Box>
                  </ProjectInfoDataBox>
                </Box>
              </ProjectPaper>
            </ParticularProjectBox>
          ))}
        </ParentProjectBox>
      </ProjectContainer>
    </>
  );
};

export default Projects;
