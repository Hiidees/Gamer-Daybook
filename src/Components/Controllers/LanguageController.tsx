import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ChooseLanguage } from "../Views/Languages/ChooseLanguage";

export interface ILanguageControllerProps {}

export function LanguageController(props: ILanguageControllerProps) {
  const navigate = useNavigate();

  function goTo(path: string) {
    navigate("/" + path);
  }

  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  return (
    <React.Fragment>
      <ChooseLanguage resizeListener={resizeListener} goTo={goTo} />
    </React.Fragment>
  );
}
