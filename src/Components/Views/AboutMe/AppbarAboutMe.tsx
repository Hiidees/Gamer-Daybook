import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AppbarAbout } from "../../Portables/Styles/AppbarStyle";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

export interface IAppbarAboutMeProps {}

export function AppbarAboutMe(props: IAppbarAboutMeProps) {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
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
            <Button color="inherit" disableRipple>
              1
            </Button>
            <Button color="inherit" disableRipple>
              2
            </Button>
            <Button color="inherit" disableRipple>
              3
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}
