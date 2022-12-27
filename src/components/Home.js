import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import genesis from "../images/genesis.png";
const Home = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(https://i.ibb.co/Z1yrv1b/home2.png)`,
          height: "400px",
          mt: "10px",
          display: "flex",
          //   filter: "blur(5px)",
        }}
      >
        <Container sx={{ alignSelf: "flex-end" }} maxWidth="md">
          <Stack direction="row">
            <Stack direction="column">
              {" "}
              <img src={genesis} alt="error" sx={{ height: "50%" }} />
              <Typography variant="h5" component="div" color="white">
                FOR
              </Typography>
            </Stack>
            <Stack direction="column">
              <Typography
                variant="h3"
                component="div"
                color="white"
                sx={{ fontWeight: "bold" }}
              >
                TECH
              </Typography>
              <Typography
                variant="h3"
                component="div"
                color="white"
                sx={{ fontWeight: "bold" }}
              >
                TEENS
              </Typography>
            </Stack>
          </Stack>
          <Box sx={{ my: "20px" }}>
            <Typography variant="h5" component="div" color="white">
              CARVING FUTURE
            </Typography>
            <Typography variant="h5" component="div" color="white">
              TECHNOLOGY PROFESSIONALS
            </Typography>
            <Typography variant="h5" component="div" color="white">
              OUT OF YOUNG MINDS
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
