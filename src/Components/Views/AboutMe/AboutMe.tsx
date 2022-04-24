import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import {
  ButtonDrawerStyle,
  ButtonMenuStyle,
} from "../../Portables/Styles/ButtonStyle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
export interface IAboutMeProps {}

export function AboutMe(props: IAboutMeProps) {
  const navigate = useNavigate();
  const [disable, setDisable] = React.useState(false);
  return (
    <React.Fragment>
      <AppBar
        color="primary"
        sx={{
          position: "relative",
          zIndex: 1400,
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton size="large" disableRipple onClick={() => navigate(-1)}>
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              backgroundImage: "none",
              backgroundColor: "none",
              boxShadow: "none",
              background: "none",
              borderRight: "none",
              justifyContent: "center",
            },
          }}
        >
          <Slide direction="right" timeout={2000} in={true}>
            <Stack spacing={2} sx={{ marginLeft: 2, marginRight: 2 }}>
              <Button
                variant="text"
                color="inherit"
                disabled={disable}
                disableRipple
                onClick={() => setDisable(true)}
                sx={ButtonDrawerStyle}
              >
                Placeholder
              </Button>
              <Button
                variant="text"
                color="inherit"
                disableRipple
                onClick={() => setDisable(true)}
                sx={ButtonDrawerStyle}
              >
                Placeholder
              </Button>
              <Button
                variant="text"
                color="inherit"
                disableRipple
                onClick={() => setDisable(true)}
                sx={ButtonDrawerStyle}
              >
                Placeholder
              </Button>
              <Button
                variant="text"
                color="inherit"
                disableRipple
                onClick={() => setDisable(true)}
                sx={ButtonDrawerStyle}
              >
                Placeholder
              </Button>
            </Stack>
          </Slide>
        </Drawer>
      </Container>
    </React.Fragment>
  );
}
