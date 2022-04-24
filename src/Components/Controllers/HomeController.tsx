import { useNavigate } from "react-router-dom";
import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import useAppTheme from "../../Hooks/useAppTheme";
import { Home } from "../Views/Home/Home";

export function HomeController() {
  const themeUIStore = useAppTheme();

  const navigate = useNavigate();

  function onSwitchTheme() {
    // We should move this method on controller
    const themeToSet =
      themeUIStore.themeKind === AppThemeKind.Light
        ? AppThemeKind.Dark
        : AppThemeKind.Light;

    themeUIStore.setTheme(themeToSet);
  }

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

  function setMenu(bool: boolean, openMenu: (bool: boolean) => void) {
    openMenu(bool);
  }

  return (
    <Home
      setSnackbar={setSnackbar}
      resizeListener={resizeListener}
      setMessage={setMessage}
      goTo={goTo}
      setMenu={setMenu}
    />
  );
}
