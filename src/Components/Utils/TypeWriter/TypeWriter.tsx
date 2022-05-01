import * as React from "react";
import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  ButtonContinueStyle,
  ButtonSkipStyle,
} from "../../Portables/Styles/ButtonStyle";
import Button from "@mui/material/Button";
import { TypographyTypeWriter } from "../../Portables/Styles/TypographyStyle";

export interface ITypeWriterProps {
  setSnackbar: (
    bool: boolean,
    openSnackbarInfo: (bool: boolean) => void
  ) => void;
  setMessage: (
    message: string,
    setInfoMessage: (message: string) => void
  ) => void;
  goTo: (path: string) => void;
  setInfoMessage: (message: string) => void;
  setOpenInfo: (bool: boolean) => void;
  typewriterMessage1: string;
  typewriterMessage2: string;
}
enum InfoMessage {
  skip = "Skip Snackbar",
  continue = "Continue Snackbar",
}

export function TypeWriter(props: ITypeWriterProps) {
  const {
    setSnackbar,
    setMessage,
    goTo,
    setInfoMessage,
    setOpenInfo,
    typewriterMessage1,
    typewriterMessage2,
  } = props;
  const [choice, setChoice] = React.useState(false);

  return (
    <Typography
      component={"span"}
      variant="body1"
      sx={TypographyTypeWriter}
      color="inherit"
    >
      <Typewriter
        options={{
          autoStart: true,
          delay: 70,
          cursor: "",
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString(typewriterMessage1)
            .pauseFor(1000)
            .typeString(typewriterMessage2)
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
    </Typography>
  );
}
