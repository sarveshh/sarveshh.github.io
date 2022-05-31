import React, { useRef, useEffect } from "react";
import { ProjectContainer, ProjectSection, ProjectPaper } from "./ProjectStyle";
import { Typography, Box } from "@mui/material";
import { ProjectsData } from "./ProjectsData";
import hoverEffect from "hover-effect";

const Projects = () => {
  const container = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "https://picsum.photos/400/600",
      image2: "https://picsum.photos/420/620",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [container]);
  return (
    <ProjectContainer>
      <ProjectSection>
        <Typography variant="h2" color="#808080">
          Projects
        </Typography>
        <Box>
          <ProjectPaper elevation={5}>
            <Box p={1} display="flex" justifyContent="space-around">
              <div
                className="parent"
                id="imgContainer"
                ref={container}
                style={{
                  width: 400,
                  height: 600,
                }}
              />
              <Box>Text Material</Box>
            </Box>
          </ProjectPaper>
        </Box>
      </ProjectSection>
    </ProjectContainer>
  );
};

export default Projects;
