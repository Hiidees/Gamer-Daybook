import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export interface INewGameCreationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  goTo: (path: string) => void;
}

export function NewGameCreation(props: INewGameCreationProps) {
  const { open, setOpen, goTo } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure to start a new game?</DialogTitle>
      <Stack direction={"row"} justifyContent="center" spacing={4}>
        <Button variant="text" onClick={() => goTo("newgame")}>
          Yes
        </Button>
        <Button variant="text" onClick={() => setOpen(false)}>
          No
        </Button>
      </Stack>
    </Dialog>
  );
}
