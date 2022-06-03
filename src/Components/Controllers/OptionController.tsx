import { useNavigate } from "react-router-dom";
import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import useAppTheme from "../../Hooks/useAppTheme";
import { Option } from "../Views/Option/Option";
export interface IOptionControllerProps {}

export function OptionController(props: IOptionControllerProps) {
  const themeUIStore = useAppTheme();
  const navigate = useNavigate();

  function onSwitchTheme() {
    const themeToSet =
      themeUIStore.themeKind === AppThemeKind.Light
        ? AppThemeKind.Dark
        : AppThemeKind.Light;

    themeUIStore.setTheme(themeToSet);
  }

  function goTo(path: string) {
    navigate("/" + path);
  }

  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  return (
    <Option
      onSwitchTheme={onSwitchTheme}
      goTo={goTo}
      resizeListener={resizeListener}
    />
  );
}
