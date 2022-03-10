import * as React from "react";
import { NewGame } from "../Views/New Game";

export interface INewGameControllerProps {}

export function NewGameController(props: INewGameControllerProps) {
  return (
    <React.Fragment>
      <NewGame />
    </React.Fragment>
  );
}
