import { useNavigate } from "react-router-dom";
import { Home } from "../Views/Home/Home";

export function HomeController() {
  const navigate = useNavigate();

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
