import * as React from "react";
import { useNavigate } from "react-router-dom";
import { NewGame } from "../Views/New Game";

export interface INewGameControllerProps {}

export function NewGameController(props: INewGameControllerProps) {
  const navigate = useNavigate();

  function setSnackbar(
    bool: boolean,
    openSnackbarInfo: (bool: boolean) => void
  ) {
    openSnackbarInfo(bool);
  }

  function setMessage(
    message: string,
    setInfoMessage: (message: string) => void
  ) {
    setInfoMessage(message);
  }

  function goTo(path: string) {
    navigate("/" + path);
  }

  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  return (
    <React.Fragment>
      <NewGame
        setSnackbar={setSnackbar}
        resizeListener={resizeListener}
        setMessage={setMessage}
        goTo={goTo}
      />
    </React.Fragment>
  );
}
