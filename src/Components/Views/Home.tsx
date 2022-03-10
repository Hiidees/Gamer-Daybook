import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";
import { useState } from "react";
import {
  ButtonStartStyle,
  ButtonMenuStyle,
  SnackbarSkipStyle,
} from "../Portables/Styles/ButtonStyle";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export function Home() {
  const [height, setHeight] = useState(window.innerHeight);
  const [subMenu, setSubMenu] = useState(false);
  const [openSkip, setOpenSkip] = React.useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  function resizeListener() {
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", resizeListener); //Evento scaturito dal resize (Appartiene al DOM)

  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: height }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Caveat",
              fontSize: "70px",
              marginBottom: 2,
            }}
            color="#dcd5dd"
          >
            My gamer daybook
          </Typography>
          {!subMenu ? (
            <Button
              sx={ButtonStartStyle}
              disableRipple
              color="inherit"
              onClick={() => setSubMenu(true)}
            >
              Press Start
            </Button>
          ) : (
            <React.Fragment>
              <Button
                sx={ButtonMenuStyle}
                disableRipple
                color="inherit"
                onClick={() => navigate("/newgame")}
                onMouseOver={() => setOpenSkip(true)}
                onMouseLeave={() => setOpenSkip(false)}
              >
                New Game
              </Button>
              <Button sx={ButtonMenuStyle} disableRipple color="inherit">
                Game List
              </Button>
              <Button sx={ButtonMenuStyle} disableRipple color="inherit">
                About me
              </Button>
              <Button sx={ButtonMenuStyle} disableRipple color="inherit">
                Contacts
              </Button>
              <Button
                sx={ButtonMenuStyle}
                disableRipple
                color="inherit"
                onClick={() => setSubMenu(false)}
              >
                Exit
              </Button>
            </React.Fragment>
          )}
        </Stack>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          sx={SnackbarSkipStyle}
          open={openSkip}
        >
          <Alert
            icon={false}
            sx={{ background: "none", width: "100%", color: "white" }}
          >
            Start a new game and discover my life
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}
