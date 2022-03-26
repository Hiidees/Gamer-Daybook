import * as React from "react";
import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  ButtonContinueStyle,
  ButtonSkipStyle,
} from "../Portables/Styles/ButtonStyle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { SnackbarInfo } from "../Utils/Snackbar/SnackbarInfo";

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

enum InfoMessage {
  skip = "Skip Snackbar",
  continue = "Continue Snackbar",
}

export function NewGame(props: INewGameProps) {
  const { setSnackbar, resizeListener, setMessage, goTo } = props;
  const [height, setHeight] = React.useState(window.innerHeight);
  const [choice, setChoice] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const vertical = "bottom";
  const horizontal = "center";
  const navigate = useNavigate();

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Typography
            component={"span"}
            variant="body1"
            sx={{ textAlign: "justify" }}
            color="white"
          >
            <Typewriter
              options={{
                autoStart: true,
                delay: 50,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString("Benvenuto <br>")
                  .pauseFor(1000)
                  .typeString("Il mio nome è Marco <br>")
                  .pauseFor(1000)
                  .typeString("Piacere di conoscerti <br>")
                  .pauseFor(1000)
                  .typeString(
                    "Se sei qui significa che sei interessato al mio passato, presente e futuro <br>"
                  )
                  .pauseFor(1000)
                  .typeString(
                    "Beh mettiti comodo, perchè sto per raccontarti una storia <br>"
                  )
                  .pauseFor(1000)
                  .typeString("La mia storia. <br>")
                  .pauseFor(1000)
                  .callFunction(() => {
                    setChoice(true);
                  })
                  .start();
              }}
            />

            {choice && (
              <Stack
                direction="row"
                spacing={5}
                sx={{ justifyContent: "space-between" }}
              >
                <Button
                  sx={ButtonSkipStyle}
                  disableRipple
                  onMouseOver={() => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.skip, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                  color="inherit"
                  onClick={() => goTo("")}
                >
                  Skip
                </Button>
                <Button
                  sx={ButtonContinueStyle}
                  disableRipple
                  onMouseOver={() => {
                    setSnackbar(true, setOpenInfo);
                    setMessage(InfoMessage.continue, setInfoMessage);
                  }}
                  onMouseLeave={() => setSnackbar(false, setOpenInfo)}
                  color="inherit"
                >
                  Continue
                </Button>
              </Stack>
            )}
            {/* <Typewriter
              options={{
                strings: [
                  "Ciao!",
                  "Il mio nome è Marco",
                  "Se sei qui significa che sei interessato al mio passato, presente e futuro",
                  "Beh mettiti comodo, perchè sto per raccontarti una storia",
                  "La storia della mia vita.",
                ],
                autoStart: true,
                deleteSpeed: 10,
                delay: 80,
                cursor: "",
              }}
            /> */}
          </Typography>

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
