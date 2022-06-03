import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";
import { useState } from "react";
import Start from "./Start";
import { HomeMenu } from "./HomeMenu";
import useCookies from "../../../Hooks/useCookies";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import { BoxHeight } from "../../Portables/Styles/BoxStyle";

interface IHome {
  setState: (arg: any, changeState: (arg: any) => void) => void;
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
  const { setSnackbar, resizeListener, setMessage, goTo, setMenu, setState } =
    props;
  const [height, setHeight] = useState(window.innerHeight);
  const [subMenu, setSubMenu] = useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  return (
    <React.Fragment>
      <MyHelmet title={"Home"} />
      <Container maxWidth="md">
        <BoxHeight
          display="flex"
          alignItems="center"
          justifyContent="center"
          myheight={height}
        >
          <Stack spacing={2}>
            {!subMenu && !useCookies.getCookie("start") ? (
              <Start setState={setState} setSubMenu={setSubMenu} />
            ) : (
              <HomeMenu
                setState={setState}
                goTo={goTo}
                setInfoMessage={setInfoMessage}
                setOpenInfo={setOpenInfo}
                infoMessage={infoMessage}
                setSubMenu={setSubMenu}
                openInfo={openInfo}
              />
            )}
          </Stack>
        </BoxHeight>
      </Container>
    </React.Fragment>
  );
}
