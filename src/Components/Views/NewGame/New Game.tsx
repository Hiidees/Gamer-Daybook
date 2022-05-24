import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SnackbarInfo } from "../../Utils/Snackbar/SnackbarInfo";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { TypeWriter } from "../../Utils/TypeWriter/TypeWriter";
import useCookies from "../../../Hooks/useCookies";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import Stack from "@mui/material/Stack";
import { SkipContinue } from "./SkipContinue";

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
  const translationState = useAppTranslation();
  const [orderTypeWriter, setOrderTypeWriter] = React.useState(0);
  const [choice, setChoice] = React.useState(false);
  const [isContinue, setIsContinue] = React.useState(false);

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["NewGame"]} />
      <AppbarGoBack />
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: !isContinue ? height - 100 : "none",
          }}
        >
          {!useCookies.getCookie("newgame") &&
            useCookies.setCookie("newgame", "true")}
          {!isContinue && (
            <React.Fragment>
              <Stack>
                <TypeWriter
                  setChoice={setChoice}
                  typewriterMessage1={typewriterMessages.typewriterMessage1}
                  typewriterMessage2={typewriterMessages.typewriterMessage2}
                  cursor=""
                  initialPause={1500}
                />
                {choice && (
                  <SkipContinue
                    setSnackbar={setSnackbar}
                    setInfoMessage={setInfoMessage}
                    setIsContinue={setIsContinue}
                    setMessage={setMessage}
                    goTo={goTo}
                    setOpenInfo={setOpenInfo}
                  />
                )}
                <SnackbarInfo
                  vertical={vertical}
                  horizontal={horizontal}
                  openInfo={openInfo}
                  message={infoMessage}
                  color={"inherit"}
                />
              </Stack>
            </React.Fragment>
          )}
          {isContinue && (
            <React.Fragment>
              <Stack>
                <TypeWriter
                  setOrderTypeWriter={setOrderTypeWriter}
                  orderTypeWriter={orderTypeWriter}
                  cursor=""
                  initialPause={1500}
                  typewriterMessage1={typewriterMessages.typewriterMessage1}
                  typewriterMessage2={typewriterMessages.typewriterMessage2}
                />
                {orderTypeWriter >= 1 && (
                  <TypeWriter
                    setOrderTypeWriter={setOrderTypeWriter}
                    orderTypeWriter={orderTypeWriter}
                    cursor=""
                    initialPause={1500}
                    typewriterMessage1={typewriterMessages.typewriterMessage1}
                    typewriterMessage2={typewriterMessages.typewriterMessage2}
                  />
                )}
                {orderTypeWriter >= 2 && (
                  <TypeWriter
                    setOrderTypeWriter={setOrderTypeWriter}
                    orderTypeWriter={orderTypeWriter}
                    cursor=""
                    initialPause={1500}
                    typewriterMessage1={typewriterMessages.typewriterMessage1}
                    typewriterMessage2={typewriterMessages.typewriterMessage2}
                  />
                )}
              </Stack>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}
