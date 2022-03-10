import * as React from "react";
import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  ButtonContinueStyle,
  ButtonSkipStyle,
  SnackbarSkipStyle,
  SnackbarContinueStyle,
} from "../Portables/Styles/ButtonStyle";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
export interface INewGameProps {}

export function NewGame(props: INewGameProps) {
  const [height, setHeight] = React.useState(window.innerHeight);
  const [choice, setChoice] = React.useState(false);
  const [openSkip, setOpenSkip] = React.useState(false);
  const [openContinue, setOpenContinue] = React.useState(false);
  const vertical = "bottom";
  const horizontal = "center";
  const navigate = useNavigate();

  function resizeListener() {
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", resizeListener); //Evento scaturito dal resize (Appartiene al DOM)
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
                  onMouseOver={() => setOpenSkip(true)}
                  onMouseLeave={() => setOpenSkip(false)}
                  color="inherit"
                  onClick={() => navigate("/")}
                >
                  Skip
                </Button>
                <Button
                  sx={ButtonContinueStyle}
                  disableRipple
                  onMouseOver={() => setOpenContinue(true)}
                  onMouseLeave={() => setOpenContinue(false)}
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

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            sx={SnackbarSkipStyle}
            open={openSkip}
          >
            <Alert
              icon={false}
              sx={{ background: "none", width: "100%", color: "#fe3a21" }}
            >
              Skip Snackbar
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            sx={SnackbarContinueStyle}
            open={openContinue}
          >
            <Alert
              icon={false}
              sx={{
                background: "none",
                width: "100%",
                color: "#66f136",
              }}
            >
              Continue Snackbar
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </React.Fragment>
  );
}
