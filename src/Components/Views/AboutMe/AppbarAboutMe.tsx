import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AppbarAbout } from "../../Portables/Styles/AppbarStyle";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { DisableKey } from "../../../Domains/Enums/DisableKeyEnums";
import { ButtonDrawerAppbarStyle } from "../../Portables/Styles/ButtonStyle";

export interface IAppbarAboutMeProps {
  setDisableKey: (
    value: DisableKey,
    setDisable: (value: DisableKey) => void
  ) => void;
  setDisable: (value: DisableKey) => void;
  disable: DisableKey;
  setVisibilityKey: (
    value: DisableKey,
    setVisibility: (value: DisableKey) => void
  ) => void;
  visibility: DisableKey;
  setVisibility: (value: DisableKey) => void;
}

export function AppbarAboutMe(props: IAppbarAboutMeProps) {
  const navigate = useNavigate();
  const [disableHover, setDisableHover] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  const {
    setDisable,
    setDisableKey,
    disable,
    setVisibilityKey,
    visibility,
    setVisibility,
  } = props;
  return (
    <AppBar color="primary" sx={AppbarAbout}>
      <Toolbar>
        <IconButton size="large" disableRipple onClick={() => navigate(-1)}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      </Toolbar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {!matches && (
          <React.Fragment>
            <Button
              color="inherit"
              disabled={disable === DisableKey.disableOne ? true : false}
              disableRipple
              onMouseOver={() => {
                !disableHover &&
                  setVisibilityKey(DisableKey.disableOne, setVisibility);
              }}
              onMouseLeave={() => {
                !disableHover &&
                  setVisibilityKey(DisableKey.default, setVisibility);
              }}
              onClick={() => {
                setDisableKey(DisableKey.disableOne, setDisable);
                setVisibilityKey(DisableKey.disableOne, setVisibility);
                setDisableHover(true);
              }}
              sx={ButtonDrawerAppbarStyle}
            >
              1
            </Button>
            <Button
              color="inherit"
              disabled={disable === DisableKey.disableTwo ? true : false}
              disableRipple
              onMouseOver={() => {
                !disableHover &&
                  setVisibilityKey(DisableKey.disableTwo, setVisibility);
              }}
              onMouseLeave={() => {
                !disableHover &&
                  setVisibilityKey(DisableKey.default, setVisibility);
              }}
              onClick={() => {
                setDisableKey(DisableKey.disableTwo, setDisable);
                setVisibilityKey(DisableKey.disableTwo, setVisibility);
                setDisableHover(true);
              }}
              sx={ButtonDrawerAppbarStyle}
            >
              2
            </Button>
            <Button
              color="inherit"
              disabled={disable === DisableKey.disableThree ? true : false}
              disableRipple
              onMouseOver={() => {
                !disableHover &&
                  setVisibilityKey(DisableKey.disableThree, setVisibility);
              }}
              onMouseLeave={() => {
                !disableHover &&
                  setVisibilityKey(DisableKey.default, setVisibility);
              }}
              onClick={() => {
                setDisableKey(DisableKey.disableThree, setDisable);
                setVisibilityKey(DisableKey.disableThree, setVisibility);
                setDisableHover(true);
              }}
              sx={ButtonDrawerAppbarStyle}
            >
              3
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}
