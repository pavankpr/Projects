import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
import { styled, MenuItem, Stack } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Menu as MenuR } from "@mui/material";
const StyledMenuItem = styled(MenuItem)({
  display: "flex",
  gap: "10px",
});
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Box>
        <AppBar position="static" sx={{ background: "black" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img
              className="nav-logo"
              src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
              alt="error"
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{
                "white-space": "nowrap",
                display: { sm: "none", md: "flex", xs: "none" },
              }}
            >
              <Typography variant="h7" component="div">
                HOME
              </Typography>
              <Typography variant="h7" component="div">
                SERVICE
              </Typography>
              <Typography variant="h7" component="div">
                PRODUCTS
              </Typography>
              <Typography variant="h7" component="div">
                AI INTERNSHIP
              </Typography>
              <Typography variant="h7" component="div">
                CAREER
              </Typography>
              <Typography variant="h7" component="div">
                BLOG
              </Typography>
              <Typography variant="h7" component="div">
                ABOUT
              </Typography>
              <Typography variant="h7" component="div">
                CONTACT US
              </Typography>
            </Stack>
            <Menu
              onClick={() => setOpen(true)}
              sx={{ display: { sm: "flex", sx: "flex", md: "none" } }}
            />
            <MenuR
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  HOME
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  SERVICE
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  PRODUCTS
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  AI INTERNSHIP
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  CAREER
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  BLOG
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem>
                <Typography variant="h7" component="div">
                  ABOUT
                </Typography>
              </StyledMenuItem>
            </MenuR>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
