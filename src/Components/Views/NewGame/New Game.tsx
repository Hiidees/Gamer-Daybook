import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SnackbarInfo } from "../../Utils/Snackbar/SnackbarInfo";
import { AppbarNewGame } from "./AppbarNewGame";
import { TypeWriter } from "../../Utils/TypeWriter/TypeWriter";
import useCookies from "../../../Hooks/useCookies";

export interface INewGameProps {
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
}

enum typewriterMessages {
  typewriterMessage1 = "Benvenuto <br> Il mio nome è Marco <br> Piacere di conoscerti <br>Se sei qui significa che sei interessato al mio passato, presente e futuro <br> <br>",
  typewriterMessage2 = "Beh mettiti comodo, perchè sto per raccontarti una storia <br> La mia storia. <br>",
}

export function NewGame(props: INewGameProps) {
  const { setSnackbar, resizeListener, setMessage, goTo } = props;
  const [height, setHeight] = React.useState(window.innerHeight);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const vertical = "bottom";
  const horizontal = "center";

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      <AppbarNewGame />
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          {!useCookies.getCookie("newgame") &&
            useCookies.setCookie("newgame", "true")}
          <TypeWriter
            setSnackbar={setSnackbar}
            setMessage={setMessage}
            goTo={goTo}
            setInfoMessage={setInfoMessage}
            setOpenInfo={setOpenInfo}
            typewriterMessage1={typewriterMessages.typewriterMessage1}
            typewriterMessage2={typewriterMessages.typewriterMessage2}
          />
          <SnackbarInfo
            vertical={vertical}
            horizontal={horizontal}
            openInfo={openInfo}
            message={infoMessage}
            color={"#ffffff"}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
