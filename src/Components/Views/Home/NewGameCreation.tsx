import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

export interface INewGameCreationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function NewGameCreation(props: INewGameCreationProps) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure to start a new Game?</DialogTitle>
    </Dialog>
  );
}
