import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { ResumeContainer, GoogleDriveButton } from "./ResumeStyles";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "../../assets/resume.pdf";
import { FaGoogleDrive } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import LogoSvg from "../../assets/LogoSvg";
import { IconContext } from "react-icons";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const errorContainer = () => (
    <>
      <Box>
        <Typography variant="h4">Uh oh 😔.. Some error occured.</Typography>
        <Typography variant="h4">
          Try the download button or download from GoogleDrive
        </Typography>
      </Box>
    </>
  );

  return (
    <>
      <Typography variant="h2" color="#6D83F2" sx={{ margin: "30px 100px" }}>
        Resume
      </Typography>
      <ResumeContainer>
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          error={errorContainer}
          onLoadError={(error) =>
            alert("Error while loading document! " + error.message)
          }
          onLoadProgress={({ loaded, total }) =>
            alert("Loading a document: " + (loaded / total) * 100 + "%")
          }
          loading={
            <>
              <LogoSvg width="50%" />
              <Typography
                variant="h5"
                style={{ marginTop: "10px", color: "theme.palette.textColor" }}
              >
                Sarvesh is thinking.....
              </Typography>
            </>
          }
          externalLinkTarget="_blank"
        >
          <Page
            pageNumber={pageNumber}
            error={errorContainer}
            // height="600"
            loading={
              <>
                <LogoSvg width="50%" />
                <Typography
                  variant="h5"
                  style={{
                    marginTop: "10px",
                    color: "theme.palette.textColor",
                  }}
                >
                  Sarvesh is thinking.....
                </Typography>
              </>
            }
          />
        </Document>
        <Box display="flex" flexDirection="column" padding="35px">
          <Typography variant="h6" marginLeft="15px">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </Typography>
          <Box>
            <Button disabled={pageNumber <= 1} onClick={previousPage}>
              Previous
            </Button>
            <Button disabled={pageNumber >= numPages} onClick={nextPage}>
              Next
            </Button>
          </Box>
          <GoogleDriveButton
            className="btn-89"
            component="a"
            download="sarvesh_cv.pdf"
            href={resume}
            target="_blank"
          >
            <ImDownload />
          </GoogleDriveButton>
          <GoogleDriveButton
            className="btn-95"
            component="a"
            href="https://bit.ly/3x6Y1PV"
            target="_blank"
          >
            <FaGoogleDrive />
          </GoogleDriveButton>
        </Box>
      </ResumeContainer>
    </>
  );
}
export default Resume;
