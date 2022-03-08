import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";
import { useState } from "react";
import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import useAppTheme from "../../Hooks/useAppTheme";
import {
  ButtonStartStyle,
  ButtonMenuStyle,
} from "../Portables/Styles/ButtonStyle";

export function Home() {
  const [height, setHeight] = useState(window.innerHeight);
  const [subMenu, setSubMenu] = useState(false);
  function resizeListener() {
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", resizeListener); //Evento scaturito dal resize (Appartiene al DOM)

  const themeUIStore = useAppTheme();

  function onSwitchTheme() {
    // We should move this method on controller
    const themeToSet =
      themeUIStore.themeKind === AppThemeKind.Light
        ? AppThemeKind.Dark
        : AppThemeKind.Light;

    themeUIStore.setTheme(themeToSet);
  }

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: height }}
      >
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
            <Stack spacing={2}>
              <Button sx={ButtonMenuStyle} disableRipple color="inherit">
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
            </Stack>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}
