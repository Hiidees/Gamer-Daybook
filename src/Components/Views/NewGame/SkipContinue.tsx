import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  ButtonSkipStyle,
  ButtonContinueStyle,
} from "../../Portables/Styles/ButtonStyle";
import { StackTypewriter } from "../../Portables/Styles/StackStyle";
import useAppTranslation from "../../../Hooks/useAppTranslation";

export interface ISkipContinueProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  setOpenInfo: (bool: boolean) => void;
  setInfoMessage: (message: string) => void;
  setIsContinue: (bool: boolean) => void;
  goTo: (path: string) => void;
  setExpand: (bool: boolean) => void;
}

export function SkipContinue(props: ISkipContinueProps) {
  const {
    setOpenInfo,
    setInfoMessage,
    setIsContinue,
    goTo,
    setExpand,
    setState,
  } = props;
  const translationState = useAppTranslation();
  return (
    <Stack direction="row" spacing={5} sx={StackTypewriter}>
      <Button
        sx={ButtonSkipStyle}
        disableRipple
        onMouseOver={() => {
          setState(true, setOpenInfo);
          setState(
            translationState.translation["Go back to menu"],
            setInfoMessage
          );
        }}
        onMouseLeave={() => setState(false, setOpenInfo)}
        color="inherit"
        onClick={() => goTo("")}
      >
        {translationState.translation["Go back"]}
      </Button>
      <Button
        sx={ButtonContinueStyle}
        disableRipple
        onMouseOver={() => {
          setState(true, setOpenInfo);
          setState(translationState.translation["I'm ready!"], setInfoMessage);
        }}
        onMouseLeave={() => setState(false, setOpenInfo)}
        color="inherit"
        onClick={() => {
          setState(true, setIsContinue);
          setState(true, setExpand);
        }}
      >
        {translationState.translation["Continue"]}
      </Button>
    </Stack>
  );
}
