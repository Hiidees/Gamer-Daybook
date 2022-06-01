import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  ButtonSkipStyle,
  ButtonContinueStyle,
} from "../../Portables/Styles/ButtonStyle";
import { StackTypewriter } from "../../Portables/Styles/StackStyle";
export interface ISkipContinueProps {
  setSnackbar: (
    bool: boolean,
    openSnackbarInfo: (bool: boolean) => void
  ) => void;
  setMessage: (
    message: string,
    setInfoMessage: (message: string) => void
  ) => void;
  setOpenInfo: (bool: boolean) => void;
  setInfoMessage: (message: string) => void;
  setIsContinue: (bool: boolean) => void;
  goTo: (path: string) => void;
  setExpand: (bool: boolean) => void;
}
enum InfoMessage {
  skip = "Skip Snackbar",
  continue = "Continue Snackbar",
}

export function SkipContinue(props: ISkipContinueProps) {
  const {
    setSnackbar,
    setMessage,
    setOpenInfo,
    setInfoMessage,
    setIsContinue,
    goTo,
    setExpand,
  } = props;
  return (
    <Stack direction="row" spacing={5} sx={StackTypewriter}>
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
        onClick={() => {
          setIsContinue(true);
          setExpand(true);
        }}
      >
        Continue
      </Button>
    </Stack>
  );
}
