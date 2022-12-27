import { Box, Container } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box sx={{ background: "black", py: "10px" }}>
        <Container maxWidth="md">
          <Typography
            variant="p"
            component="div"
            color="#747474"
            sx={{ fontSize: "14px" }}
          >
            © Copyright 2017 - 2022 | Rubixe is a brand of THINK AHEAD
            INNOVATIONS PVT. LTD. | All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
