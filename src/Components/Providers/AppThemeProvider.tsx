import createTheme, {
  Theme,
  ThemeOptions,
} from "@mui/material/styles/createTheme";
import * as DarkTheme from "../../Stores/Data/Themes/DarkTheme.json";
import * as LightTheme from "../../Stores/Data/Themes/LightTheme.json";
import * as ParticlesOptionsDark from "../../Stores/Data/Particles/ParticlesOptionsDark.json";
import * as ParticlesOptionsLight from "../../Stores/Data/Particles/ParticlesOptionsLight.json";
import * as GlobalDarkStyles from "../../Stores/Data/GlobalStyles/GlobalDarkStyles.json";
import * as GlobalLightStyles from "../../Stores/Data/GlobalStyles/GlobalLightStyles.json";
import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import { useReducer } from "react";
import AppThemeUIStore from "../../Stores/UIStores/AppTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import GlobalStyles from "@mui/material/GlobalStyles";
import { IAppTheme } from "../../Domains/Interfaces/IContextTheme";
import { AppThemeAction } from "../../Domains/Enums/AppThemeEnums";
import reducer from "./reducers/AppThemeReducer";
import useCookies from "../../Hooks/useCookies";
import ParticlesComponent from "../Controllers/Particles/ParticlesComponent";

interface IProviderProps {}

function AppThemeProvider(props: React.PropsWithChildren<IProviderProps>) {
  const { children } = props;

  const darkTheme = createTheme(DarkTheme as ThemeOptions);
  const lightTheme = createTheme(LightTheme as ThemeOptions);
  let theme;
  let globalStyles;
  let themeKind;
  let options;

  if (useCookies.getCookie("theme") === "light") {
    theme = lightTheme;
    globalStyles = GlobalLightStyles;
    themeKind = AppThemeKind.Light;
    options = ParticlesOptionsLight;
  } else {
    theme = darkTheme;
    globalStyles = GlobalDarkStyles;
    themeKind = AppThemeKind.Dark;
    options = ParticlesOptionsDark;
  }

  const initialState: IAppTheme = {
    theme: theme,
    globalStyles: globalStyles,
    themeKind: themeKind,
    options: options,
    setTheme: setTheme,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTheme(themeKind: AppThemeKind): void {
    let theme = darkTheme;
    let globalStyles = GlobalDarkStyles;
    let options = ParticlesOptionsDark;

    switch (themeKind) {
      case AppThemeKind.Dark:
        theme = darkTheme;
        globalStyles = GlobalDarkStyles;
        options = ParticlesOptionsDark;
        break;
      case AppThemeKind.Light:
        theme = lightTheme;
        globalStyles = GlobalLightStyles;
        options = ParticlesOptionsLight;
        break;
    }
    useCookies.setCookie(
      "theme",
      themeKind == AppThemeKind.Dark ? "dark" : "light"
    );
    const action = {
      type: AppThemeAction.SetTheme,
      payload: {
        theme: theme,
        globalStyles: globalStyles,
        themeKind: themeKind,
        options: options,
      },
    };
    dispatch(action);
  }

  return (
    <AppThemeUIStore.Provider
      value={{
        theme: state.theme,
        globalStyles: state.globalStyles,
        themeKind: state.themeKind,
        options: state.options,
        setTheme: setTheme,
      }}
    >
      <ThemeProvider theme={state.theme}>
        <GlobalStyles styles={state.globalStyles} />
        <ParticlesComponent options={state.options} />
        {children}
      </ThemeProvider>
    </AppThemeUIStore.Provider>
  );
}

export { AppThemeProvider };
