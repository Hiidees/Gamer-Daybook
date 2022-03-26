import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";
import { useState } from "react";
import {
  ButtonStartStyle,
  ButtonMenuStyle,
  ButtonLoginStyle,
} from "../Portables/Styles/ButtonStyle";
import Typography from "@mui/material/Typography";
import { SnackbarInfo } from "../Utils/Snackbar/SnackbarInfo";
import { TypographyMenu } from "../Portables/Styles/TypographyStyle";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

enum InfoMessage {
  newGame = "Start a new game and discover my life",
  aboutMe = "Check my CV",
  contacts = "Discover how to contact me",
  gameList = "Check my personal game list",
  exit = "Go back to Start Menu",
}

interface IHome {
  setSnackbar: (
    bool: boolean,
    openSnackbarInfo: (bool: boolean) => void
  ) => void;
  setMessage: (
    message: string,
    setInfoMessage: (message: string) => void
  ) => void;
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  goTo: (path: string) => void;
  setMenu: (bool: boolean, openMenu: (bool: boolean) => void) => void;
}

export function Home(props: IHome) {
  const { setSnackbar, resizeListener, setMessage, goTo, setMenu } = props;
  const [height, setHeight] = useState(window.innerHeight);
  const [subMenu, setSubMenu] = useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const vertical = "bottom";
  const horizontal = "center";

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height }}
        >
          <Stack spacing={2}>
            <Typography variant="h1" sx={TypographyMenu} color="#dcd5dd">
              My gamer daybook
            </Typography>
            {!subMenu ? (
              <Button
                sx={ButtonStartStyle}
                disableRipple
                color="inherit"
                onClick={() => setMenu(true, setSubMenu)}
              >
                Press Start
              </Button>
            ) : (
              <React.Fragment>
                <Button
                  sx={ButtonMenuStyle}
                  disableRipple
                  color="inherit"
                  onClick={() => goTo("newgame")}
                  onMouseOver={() => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.newGame, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                >
                  New Game
                </Button>
                <Button
                  sx={ButtonMenuStyle}
                  disableRipple
                  color="inherit"
                  onClick={() => goTo("gamelist")}
                  onMouseOver={() => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.gameList, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                >
                  Game List
                </Button>
                <Button
                  sx={ButtonMenuStyle}
                  disableRipple
                  color="inherit"
                  onClick={() => goTo("aboutme")}
                  onMouseOver={async () => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.aboutMe, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                >
                  About me
                </Button>
                <Button
                  sx={ButtonMenuStyle}
                  disableRipple
                  color="inherit"
                  onClick={() => goTo("contacts")}
                  onMouseOver={() => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.contacts, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                >
                  Contacts
                </Button>
                <Button
                  sx={ButtonMenuStyle}
                  disableRipple
                  color="inherit"
                  onMouseOver={() => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.exit, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                  onClick={() => {
                    setMenu(false, setSubMenu);
                    setSnackbar(false, setOpenInfo);
                  }}
                >
                  Exit
                </Button>
              </React.Fragment>
            )}
          </Stack>
          <SnackbarInfo
            vertical={vertical}
            horizontal={horizontal}
            openInfo={openInfo}
            message={infoMessage}
            color={"white"}
          />
        </Box>
      </Container>
      <IconButton
        size="large"
        sx={ButtonLoginStyle}
        disableRipple
        color="inherit"
        aria-label="login"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ExpandLessIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundImage: "none",
            backgroundColor: "none",
            boxShadow: "none",
            background: "none",
          },
        }}
      >
        <Container disableGutters>
          <FormControl>
            <Stack
              sx={{
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#311336",
                }}
                label="Email"
                id="email"
                size="medium"
              />
              <TextField
                sx={{ marginBottom: 2, backgroundColor: "#311336" }}
                label="Password"
                type="password"
                id="password"
                size="medium"
              />
              <Button
                type="submit"
                onClick={handleClose}
                variant="contained"
                sx={{ backgroundColor: "#7d0075" }}
              >
                Login
              </Button>
            </Stack>
          </FormControl>
        </Container>
      </Menu>
    </React.Fragment>
  );
}
