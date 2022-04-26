import * as React from "react";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import Button from "@mui/material/Button";
import { SnackbarInfo } from "../../Utils/Snackbar/SnackbarInfo";
import useCookies from "../../../Hooks/useCookies";
import { NewGameCreation } from "./NewGameCreation";

enum InfoMessage {
  newGame = "Start a new game and discover my life",
  aboutMe = "Check my CV",
  contacts = "Discover how to contact me",
  option = "Change configuration",
  exit = "Go back to Start Menu",
}

export interface IHomeMenuProps {
  setSnackbar: (
    bool: boolean,
    openSnackbarInfo: (bool: boolean) => void
  ) => void;
  setMessage: (
    message: string,
    setInfoMessage: (message: string) => void
  ) => void;
  goTo: (path: string) => void;
  setInfoMessage: (message: string) => void;
  setOpenInfo: (bool: boolean) => void;
  setMenu: (bool: boolean, openMenu: (bool: boolean) => void) => void;
  infoMessage: string;
  setSubMenu: (bool: boolean) => void;
  openInfo: boolean;
}

export function HomeMenu(props: IHomeMenuProps) {
  const {
    setInfoMessage,
    setSnackbar,
    setMessage,
    goTo,
    setOpenInfo,
    setMenu,
    infoMessage,
    setSubMenu,
    openInfo,
  } = props;

  const [openDialog, setOpenDialog] = React.useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  return (
    <React.Fragment>
      <Slide direction="down" timeout={2000} in={true}>
        <Alert
          icon={<Avatar src="/me.jpg" />}
          variant="outlined"
          color="info"
          sx={{
            "@media (min-width:600px)": {
              fontSize: "20px",
            },
            fontSize: "15px",
          }}
        >
          Hi! I'm Marco, welcome to my website!
        </Alert>
      </Slide>
      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        onClick={() => {
          if (useCookies.getCookie("newgame")) {
            setOpenDialog(true);
            console.log("ciao");
          } else {
            goTo("newgame");
          }
        }}
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
        onClick={() => goTo("option")}
        onMouseOver={() => {
          setSnackbar(true, setOpenInfo);
          setMessage(InfoMessage.option, setInfoMessage);
        }}
        onMouseLeave={() => setSnackbar(false, setOpenInfo)}
      >
        Option
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
          useCookies.removeCookie("start");
        }}
      >
        Exit
      </Button>
      <SnackbarInfo
        vertical={vertical}
        horizontal={horizontal}
        openInfo={openInfo}
        message={infoMessage}
        color={"white"}
      />
      <NewGameCreation open={openDialog} setOpen={setOpenDialog} goTo={goTo} />
    </React.Fragment>
  );
}
