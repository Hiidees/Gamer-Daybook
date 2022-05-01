import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/material/styles/createTheme";
import { ISourceOptions } from "tsparticles";
import { AppThemeKind } from "../Enums/AppThemeEnums";

export interface IAppTheme {
  theme: Theme;
  themeKind: AppThemeKind;
  globalStyles?: Interpolation<Theme>;
  options: ISourceOptions;
  setTheme: (themeKind: AppThemeKind) => void;
}
