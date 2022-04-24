import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";
import { useState } from "react";
import Start from "./Start";
import { HomeMenu } from "./HomeMenu";

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

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

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
            {!subMenu ? (
              <Start setMenu={setMenu} setSubMenu={setSubMenu} />
            ) : (
              <HomeMenu
                setSnackbar={setSnackbar}
                setMessage={setMessage}
                goTo={goTo}
                setInfoMessage={setInfoMessage}
                setOpenInfo={setOpenInfo}
                setMenu={setMenu}
                infoMessage={infoMessage}
                setSubMenu={setSubMenu}
                openInfo={openInfo}
              />
            )}
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
