import * as React from "react";
import { ChooseLanguage } from "../Views/Languages/ChooseLanguage";

export interface ILanguageControllerProps {}

export function LanguageController(props: ILanguageControllerProps) {
  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  return (
    <React.Fragment>
      <ChooseLanguage resizeListener={resizeListener} />
    </React.Fragment>
  );
}
