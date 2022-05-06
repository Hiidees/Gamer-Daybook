import { AboutMe } from "../Views/AboutMe/AboutMe";
import { DisableKey } from "../../Domains/Enums/DisableKeyEnums";

export interface IAboutMeControllerProps {}

function setDisableKey(
  value: DisableKey,
  setDisable: (value: DisableKey) => void
) {
  setDisable(value);
}

function setVisibilityKey(
  value: DisableKey,
  setVisibility: (value: DisableKey) => void
) {
  setVisibility(value);
}

function resizeListener(height: number, setHeight: (height: number) => void) {
  setHeight(height);
}

export function AboutMeController(props: IAboutMeControllerProps) {
  return (
    <AboutMe
      setDisableKey={setDisableKey}
      resizeListener={resizeListener}
      setVisibilityKey={setVisibilityKey}
    />
  );
}
