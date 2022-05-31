import React, { useRef, useEffect, useState } from "react";
import { ProjectContainer, ProjectSection, ProjectPaper } from "./ProjectStyle";
import { Typography, Box } from "@mui/material";
import { ProjectsData } from "./ProjectsData";
import hoverEffect from "hover-effect";
import { motion, useTransform, useViewportScroll } from "framer-motion";

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
          intensity: 0.3,
          imagesRatio: 1080 / 1920,
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
          <Box>
            <Box p={1} display="flex" flexDirection="column">
              {ProjectsData.map((project) => (
                <ProjectPaper elevation={5}>
                  <Box key={project.id} className={`list__${project.id}`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        // onMouseLeave={onCursor}
                        // onMouseEnter={() => onCursor("projectHovered")}
                        className="wrapper"
                        style={{
                          position: "relative",
                          marginTop: "5rem",
                          height: "12rem",
                          width: "3 4rem",
                          boxShadow: "rgba(0, 0, 0, 0.5) 0px 50px 100px",
                        }}
                        ref={wrappers.current[project.id - 1]}
                      ></div>
                    </a>
                    <Box>{project.name}</Box>
                  </Box>
                </ProjectPaper>
              ))}
            </Box>
          </Box>
        </ProjectSection>
      </ProjectContainer>
    </>
  );
};

export default Projects;
