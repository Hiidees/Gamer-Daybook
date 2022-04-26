import React from "react";
import ReactDOM from "react-dom";
import RouteProvider from "./Router";
import CssBaseline from "@mui/material/CssBaseline";
import { AppThemeProvider } from "./Components/Providers/AppThemeProvider";
import ParticlesComponent from "./Components/Controllers/Particles/ParticlesComponent";
import { AppTranslationProvider } from "./Components/Providers/AppTranslationProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <ParticlesComponent />
      <AppTranslationProvider>
        <RouteProvider />
      </AppTranslationProvider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
