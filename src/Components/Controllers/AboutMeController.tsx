import { AboutMe } from "../Views/AboutMe/AboutMe";
import { DisableKey } from "../../Domains/Enums/DisableKeyEnums";

export interface IAboutMeControllerProps {}

function setState(arg: any, changeState: (arg: any) => void) {
  changeState(arg);
}

function resizeListener(height: number, setHeight: (height: number) => void) {
  setHeight(height);
}

export function AboutMeController(props: IAboutMeControllerProps) {
  return <AboutMe setState={setState} resizeListener={resizeListener} />;
}
