import { Container, Stack, Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import "./Whoweare.css";
const Whoweare = (props) => {
  const { whoWeAreHeader, whoWeAreText1, whoWeAreText2 } = props.content;
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          py: "20px",
        }}
      >
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
          <Box>
            <Typography
              variant="p"
              sx={{ fontSize: "24px", textTransform: "uppercase" }}
              component="div"
            >
              {whoWeAreHeader}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "13px", mt: "10px" }}
              component="div"
            >
              {whoWeAreText1}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "13px", mt: "10px" }}
              component="div"
            >
              {whoWeAreText2}
            </Typography>
          </Box>
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              alignItems: "flex-end",
              pt: "10px",
            }}
          >
            <img
              src="https://rubixe.com/assets/img/aboutus/about-us.jpg"
              className="image-wwa"
              alt="error"
            ></img>
          </Container>
        </Stack>
      </Container>
    </>
  );
};

export default Whoweare;
