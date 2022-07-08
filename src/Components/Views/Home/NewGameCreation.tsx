import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { PaperDialog } from "../../Portables/Styles/PaperStyle";
import { ButtonNewGameCreationStyle } from "../../Portables/Styles/ButtonStyle";
import { DialogTitleNewGame } from "../../Portables/Styles/TypographyStyle";
import useAppTranslation from "../../../Hooks/useAppTranslation";

export interface INewGameCreationProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  open: boolean;
  setOpenDialog: (open: boolean) => void;
  goTo: (path: string) => void;
}

export function NewGameCreation(props: INewGameCreationProps) {
  const { open, setOpenDialog, goTo, setState } = props;
  const translationState = useAppTranslation();
  const handleClose = () => {
    setState(false, setOpenDialog);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: PaperDialog,
      }}
    >
      <DialogTitle sx={DialogTitleNewGame}>
        {translationState.translation["Are you sure to start a new game?"]}
      </DialogTitle>
      <Stack direction={"row"} justifyContent="center" spacing={4}>
        <Button sx={ButtonNewGameCreationStyle} onClick={() => goTo("newgame")}>
          {translationState.translation["Yes"]}
        </Button>
        <Button
          sx={ButtonNewGameCreationStyle}
          onClick={() => setState(false, setOpenDialog)}
        >
          {translationState.translation["No"]}
        </Button>
      </Stack>
    </Dialog>
  );
}
