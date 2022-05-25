import * as React from "react";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import Button from "@mui/material/Button";
import { SnackbarInfo } from "../../Utils/Snackbar/SnackbarInfo";
import useCookies from "../../../Hooks/useCookies";
import { NewGameCreation } from "./NewGameCreation";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { TypeWriter } from "../../Utils/TypeWriter/TypeWriter";

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
  const translationState = useAppTranslation();

  return (
    <React.Fragment>
      <Slide direction="down" timeout={2000} in={true}>
        <Alert icon={<Avatar src="/me.jpg" />} variant="outlined" color="info">
          <TypeWriter
            typewriterMessage1={
              translationState.translation[
                "Hi! I'm Marco, welcome to my website!"
              ]
            }
            typewriterMessage2=""
            cursor="|"
            initialPause={0}
          />
        </Alert>
      </Slide>
      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        onClick={() => {
          if (useCookies.getCookie("newgame")) {
            setOpenDialog(true);
          } else {
            goTo("newgame");
          }
        }}
        onMouseOver={() => {
          setSnackbar(true, setOpenInfo);
          setMessage(
            translationState.translation[
              "Start a new game and discover my life"
            ],
            setInfoMessage
          );
        }}
        onMouseLeave={() => setSnackbar(false, setOpenInfo)}
      >
        {translationState.translation["NewGame"]}
      </Button>

      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        onClick={() => goTo("aboutme")}
        onMouseOver={async () => {
          setSnackbar(true, setOpenInfo);
          setMessage(
            translationState.translation["Check my CV"],
            setInfoMessage
          );
        }}
        onMouseLeave={() => setSnackbar(false, setOpenInfo)}
      >
        {translationState.translation["AboutMe"]}
      </Button>
      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        onClick={() => goTo("contact")}
        onMouseOver={() => {
          setSnackbar(true, setOpenInfo);
          setMessage(
            translationState.translation["Discover how to contact me"],
            setInfoMessage
          );
        }}
        onMouseLeave={() => setSnackbar(false, setOpenInfo)}
      >
        {translationState.translation["Contact"]}
      </Button>
      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        onClick={() => goTo("option")}
        onMouseOver={() => {
          setSnackbar(true, setOpenInfo);
          setMessage(
            translationState.translation["Change configuration"],
            setInfoMessage
          );
        }}
        onMouseLeave={() => setSnackbar(false, setOpenInfo)}
      >
        {translationState.translation["Options"]}
      </Button>
      <Button
        sx={ButtonMenuStyle}
        disableRipple
        color="inherit"
        onMouseOver={() => {
          setSnackbar(true, setOpenInfo);
          setMessage(
            translationState.translation["Go back to Start Menu"],
            setInfoMessage
          );
        }}
        onMouseLeave={() => setSnackbar(false, setOpenInfo)}
        onClick={() => {
          setMenu(false, setSubMenu);
          setSnackbar(false, setOpenInfo);
          useCookies.removeCookie("start");
        }}
      >
        {translationState.translation["Exit"]}
      </Button>
      <SnackbarInfo
        vertical={vertical}
        horizontal={horizontal}
        openInfo={openInfo}
        message={infoMessage}
        color={"inherit"}
      />
      <NewGameCreation open={openDialog} setOpen={setOpenDialog} goTo={goTo} />
    </React.Fragment>
  );
}
