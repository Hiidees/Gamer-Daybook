import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMeController } from "./Components/Controllers/AboutMeController";
import { HomeController } from "./Components/Controllers/HomeController";
import { NewGameController } from "./Components/Controllers/NewGameController";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeController />} />
          <Route path="/newgame" element={<NewGameController />} />
          <Route path="/aboutme" element={<AboutMeController />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
