import * as React from "react";
import { useNavigate } from "react-router-dom";
import { NewGame } from "../Views/NewGame/NewGame";

export interface INewGameControllerProps {}

export function NewGameController(props: INewGameControllerProps) {
  const navigate = useNavigate();

  function setState(arg: any, changeState: (arg: any) => void) {
    changeState(arg);
  }

  function goTo(path: string) {
    navigate("/" + path);
  }

  return (
    <React.Fragment>
      <NewGame setState={setState} goTo={goTo} />
    </React.Fragment>
  );
}
