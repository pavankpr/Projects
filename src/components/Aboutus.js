import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

const Aboutus = () => {
  return (
    <Box sx={{ background: "#e9eaec", py: "30px" }}>
      <Container maxWidth="md" sx={{ color: "black" }}>
        {/* <Container
          maxWidth="md"
          sx={{
            py: "20px",
          }}
        >

        </Container> */}
        <Stack direction="row" gap={2}>
          <Box flex={3}>
            <Typography
              variant="p"
              component="div"
              sx={{ fontSize: "16px", pb: "10px" }}
            >
              ABOUT US
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: "13px" }}>
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). Rubixe mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.
            </Typography>
          </Box>
          <Box flex={0.5} sx={{ ml: "20px" }}>
            <Typography variant="p" component="div">
              MENU
              <Link
                href="Home"
                variant="p"
                color="inherit"
                component="div"
                underline="hover"
                sx={{ fontSize: "15px", pt: "10px" }}
              >
                Home
              </Link>
              <Link
                href="Home"
                variant="p"
                color="inherit"
                component="div"
                underline="hover"
                sx={{ fontSize: "15px" }}
              >
                Services
              </Link>
              <Link
                href="Home"
                variant="p"
                color="inherit"
                component="div"
                underline="hover"
                sx={{ fontSize: "15px" }}
              >
                Product
              </Link>
              <Link
                href="Home"
                variant="p"
                color="inherit"
                component="div"
                underline="hover"
                sx={{ fontSize: "15px" }}
              >
                Career
              </Link>
            </Typography>
          </Box>
          <Box flex={1}>
            <Typography
              variant="p"
              component="div"
              sx={{ fontSize: "16px", pb: "10px" }}
            >
              LEARN MORE
            </Typography>
            <Link
              href="Home"
              variant="p"
              color="inherit"
              component="div"
              underline="hover"
            >
              About
            </Link>
            <Link
              href="Home"
              variant="p"
              color="inherit"
              component="div"
              underline="hover"
            >
              Contact Us
            </Link>
          </Box>
          <Box flex={2}>
            <Typography
              variant="p"
              component="div"
              sx={{ fontSize: "16px", pb: "10px" }}
            >
              ADDRESS
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: "14px" }}>
              Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
              Karnataka 560068 Phone: 0804-717-8999 Email: hi@rubixe.com
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Aboutus;
