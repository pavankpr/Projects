import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import { Box } from "@mui/system";
const Cardsection = () => {
  const cardData = {
    data: [
      {
        ValID: "01",
        bgColorr: "#0e1857",
        icon: one,
        desc: "Inmtroduction AI to children in an age appopriate manner",
      },
      {
        ValID: "02",
        bgColorr: "#911951",
        icon: two,
        desc: "Gain awereness on AI and build an interactive story around it",
      },

      {
        ValID: "03",
        bgColorr: "#E77621",
        icon: three,
        desc: "Acquire proggramming skills in a user-friendly formate",
      },
      {
        ValID: "04",
        bgColorr: "#046D15",
        icon: four,
        desc: "Explosure to mini projecrs on diverse topics and much more",
      },
      {
        ValID: "05",
        bgColorr: "#AB8D13",
        icon: five,
        desc: "Train the teachers programme",
      },
    ],
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h5" component="div" sx={{ pt: "30px" }}>
            TECH FOR TEENS - A RUBIXE ® INITIATIVE
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ py: "50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          spacing={1}
        >
          {cardData.data.map((DynamicComponent, keyVal) => {
            return <Card Key={keyVal} componentData={DynamicComponent} />;
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Cardsection;
