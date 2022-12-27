import React, { useState } from "react";
import {
  InputLabel,
  Stack,
  TextField,
  styled,
  Button,
  Box,
  Typography,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Container } from "@mui/system";

var mobileErrorFlag = true;

var nameErrorFlag = true;

const StyledInputLabel = styled(InputLabel)({
  fontWeight: "bold",
});

function validateEmail() {
  const email = document.getElementById("email").value;
  var reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
}

function validateMobile() {
  const mobile = document.getElementById("mobile").value;
  const reg = /^\d{10}$/;
  console.log("1st function", !reg.test(mobile));
  mobileErrorFlag = !reg.test(mobile) ? true : false;
  console.log("n", mobileErrorFlag);
  return !reg.test(mobile);
}

function validateName() {
  const name = document.getElementById("name").value;
  const reg = /^([a-zA-Z ]){3,30}$/;
  console.log("1st function", !reg.test(name));
  nameErrorFlag = !reg.test(name) ? true : false;
  console.log("n", nameErrorFlag);
  return !reg.test(name);
}

const Table = () => {
  const [fullName, setFullName] = useState(false);
  const [email, setEmail] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [emailError, setEmailError] = useState(" ");
  const [mobileError, setMobileError] = useState(" ");
  const [nameError, setNameError] = useState(" ");
  const emailHelper = "Please Enter a Valid Email";
  const mobileHelper = "Please Enter a Valid Mobile Number";
  const nameHelper = "Please Enter Valid Name";
  function setEmailErrorText() {
    email ? setEmailError(emailHelper) : setEmailError("");
  }
  function setMobileErrorText() {
    console.log(mobile);
    mobileErrorFlag ? setMobileError(mobileHelper) : setMobileError("");
  }
  function setNameErrorText() {
    console.log(fullName);
    nameErrorFlag ? setNameError(nameHelper) : setNameError("");
  }
  function registerBtn() {
    const emailValue = document.getElementById("email").value;
    const mobileValue = document.getElementById("mobile").value;
    const nameValue = document.getElementById("name").value;
    if (
      emailValue === "" ||
      mobileValue === "" ||
      nameValue === "" ||
      email ||
      mobile ||
      fullName
    ) {
      document.getElementById("error").style.display = "flex";
      document.getElementById("success").style.display = "none";
    } else {
      document.getElementById("error").style.display = "none";
      document.getElementById("success").style.display = "flex";
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("mobile").value = "";
    }
    console.log("mob", mobile, "em", email, "fn", fullName);
  }
  return (
    <>
      <Container maxWidth="md" sx={{ my: "20px", border: 1 }}>
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                py: "15px",
                width: { md: "400px", sm: "initial" },
                height: { md: "400px", sm: "auto" },
                // background: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Container sx={{ display: "flex", alignItems: "center" }}>
                <Stack direction="column">
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ mb: "15px", textAlign: "center" }}
                  >
                    GET IN TOUCH
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ mb: "15px", textAlign: "center" }}
                  >
                    Please complete the form and we will get back to you
                  </Typography>
                </Stack>
              </Container>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  height: "65%",
                  alignSelf: "center",
                  mb: "15%",
                  display: { md: "flex", sm: "none", xs: "none" },
                }}
              />
            </Box>
          </Container>
          <Container maxWidth="xs" sx={{ py: "15px", alignSelf: "center" }}>
            <Stack direction="column">
              <StyledInputLabel htmlFor="name">Name*</StyledInputLabel>
              <TextField
                id="name"
                error={fullName}
                helperText={nameError}
                label="Name"
                sx={{ my: "10px" }}
                onChange={() => {
                  setFullName(validateName());
                  setNameErrorText();
                }}
              />
            </Stack>
            <Stack direction="column">
              <StyledInputLabel htmlFor="email">Email*</StyledInputLabel>
              <TextField
                id="email"
                label="Email"
                error={email}
                helperText={emailError}
                sx={{ my: "10px" }}
                onChange={() => {
                  setEmail(validateEmail());
                  setEmailErrorText();
                }}
              />
            </Stack>
            <Stack direction="column">
              <StyledInputLabel htmlFor="mobile">
                Mobile Number*
              </StyledInputLabel>
              <TextField
                id="mobile"
                label="Mobile Number"
                sx={{ my: "10px" }}
                error={mobile}
                helperText={mobileError}
                onChange={() => {
                  setMobile(validateMobile());
                  console.log("last", mobile);
                  setMobileErrorText();
                }}
              />
            </Stack>
            <Button
              variant="contained"
              sx={{ width: "100%", my: "20px" }}
              onClick={() => {
                registerBtn();
              }}
            >
              Register Now
            </Button>
            <Alert id="error" severity="error" sx={{ display: "none" }}>
              <AlertTitle>Error</AlertTitle>
              Please fill all the details — <strong>Please Check Form</strong>
            </Alert>
            <Alert id="success" severity="success" sx={{ display: "none" }}>
              <AlertTitle>Success</AlertTitle>
              Successfully Registered — <strong>Thank you!</strong>
            </Alert>
          </Container>
        </Stack>
      </Container>
    </>
  );
};

export default Table;
