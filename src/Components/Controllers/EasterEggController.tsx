import * as React from "react";
import { useNavigate } from "react-router-dom";
import { EasterEgg } from "../Views/404/EasterEgg";

export interface IEasterEggProps {}

export function EasterEggController(props: IEasterEggProps) {
  const navigate = useNavigate();
  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  function goTo(path: string) {
    navigate("/" + path);
  }

  return (
    <React.Fragment>
      <EasterEgg resizeListener={resizeListener} goTo={goTo} />
    </React.Fragment>
  );
}
