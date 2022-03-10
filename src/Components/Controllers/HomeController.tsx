import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import useAppTheme from "../../Hooks/useAppTheme";
import { Home } from "../Views/Home";

export function HomeController() {
  const themeUIStore = useAppTheme();

  function onSwitchTheme() {
    // We should move this method on controller
    const themeToSet =
      themeUIStore.themeKind === AppThemeKind.Light
        ? AppThemeKind.Dark
        : AppThemeKind.Light;

    themeUIStore.setTheme(themeToSet);
  }
  return <Home />;
}
