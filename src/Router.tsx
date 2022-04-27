import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AboutMeController } from "./Components/Controllers/AboutMeController";
import { HomeController } from "./Components/Controllers/HomeController";
import { LanguageController } from "./Components/Controllers/LanguageController";
import { NewGameController } from "./Components/Controllers/NewGameController";
import useAppTranslation from "./Hooks/useAppTranslation";

export default function RouteProvider() {
  const appTranslation = useAppTranslation();

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              appTranslation.translationOnCookies ? (
                <HomeController />
              ) : (
                <LanguageController />
              )
            }
          />

          <Route path="/newgame" element={<NewGameController />} />
          <Route path="/aboutme" element={<AboutMeController />} />
          <Route path="/languages" element={<LanguageController />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
