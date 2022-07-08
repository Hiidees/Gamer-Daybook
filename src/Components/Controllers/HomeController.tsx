import { useNavigate } from "react-router-dom";
import { Home } from "../Views/Home/Home";

export function HomeController() {
  const navigate = useNavigate();

  function setState(arg: any, changeState: (arg: any) => void) {
    changeState(arg);
  }

  function goTo(path: string) {
    navigate("/" + path);
  }

  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  return (
    <Home setState={setState} resizeListener={resizeListener} goTo={goTo} />
  );
}
