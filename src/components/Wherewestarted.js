import { Container, Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

const Wherewestarted = (props) => {
  const { whereWeStartedHeader, whereWeStartedText } = props.content;
  console.log(props.content);
  return (
    <>
      <Box sx={{ background: "#cc0088", color: "white" }}>
        <Container
          maxWidth="md"
          sx={{
            py: "20px",
          }}
        >
          <Box>
            <Typography
              variant="p"
              sx={{ fontSize: "24px", textTransform: "uppercase" }}
              component="div"
            >
              {whereWeStartedHeader}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "13px", mt: "10px" }}
              component="div"
            >
              {whereWeStartedText}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Wherewestarted;
