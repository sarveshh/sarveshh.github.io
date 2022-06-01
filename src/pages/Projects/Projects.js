import React, { useRef, useEffect, useState } from "react";
import { ProjectContainer, ProjectSection, ProjectPaper } from "./ProjectStyle";
import { Typography, Box, Button } from "@mui/material";
import { ProjectsData } from "./ProjectsData";
import hoverEffect from "hover-effect";
import { IconContext } from "react-icons/lib";

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

  return (
    <>
      <ProjectContainer>
        <ProjectSection>
          <Typography variant="h2" color="#808080">
            Projects
          </Typography>
          <Box display="flex" flexDirection="column">
            {ProjectsData.map((project, index) => (
              <Box
                key={project.id}
                className={`list__${project.id}`}
                margin="25px"
              >
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h1" fontSize="55px" position="relative">
                    0{project.id}
                  </Typography>
                  <Typography variant="h1" fontSize="55px" position="relative">
                    {project.date}
                  </Typography>
                </Box>
                <ProjectPaper elevation={5}>
                  <Box display="flex">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        // onMouseLeave={onCursor}
                        // onMouseEnter={() => onCursor("projectHovered")}
                        className="wrapper"
                        style={{
                          position: "relative",
                          height: "500px",
                          width: "350px",
                          borderRadius: "5.3rem",
                          overflow: "hidden",
                        }}
                        ref={wrappers.current[project.id - 1]}
                      />
                    </a>
                    <Box
                      margin="25px 40px"
                      display="flex"
                      flexDirection="column"
                    >
                      <Typography>{project.title}</Typography>
                      <Typography>{project.description}</Typography>
                      <Box display="flex">
                        <Button>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </a>
                        </Button>
                        <Button>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </a>
                        </Button>
                      </Box>
                      <Box display="flex" alignItems="center">
                        {project.tech.map((techs) => (
                          <>
                            <IconContext.Provider
                              value={{
                                style: {
                                  width: "35px",
                                  height: "35px",
                                  marginRight: "15px",
                                },
                              }}
                            >
                              {techs.icon}
                            </IconContext.Provider>
                          </>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </ProjectPaper>
              </Box>
            ))}
          </Box>
        </ProjectSection>
      </ProjectContainer>
    </>
  );
};

export default Projects;
