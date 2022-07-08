import React from "react";
import ReactDOM from "react-dom";
import RouteProvider from "./Router";
import CssBaseline from "@mui/material/CssBaseline";
import { AppThemeProvider } from "./Components/Providers/AppThemeProvider";
import { AppTranslationProvider } from "./Components/Providers/AppTranslationProvider";
import Favicon from "react-favicon";


ReactDOM.render(
  <React.StrictMode>
    <Favicon url="./icon.png" iconSize={300} />
    <AppThemeProvider>
      <CssBaseline />
      <AppTranslationProvider>
        <RouteProvider />
      </AppTranslationProvider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
