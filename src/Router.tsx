import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeController } from "./Components/Controllers/HomeController";
import { NewGameController } from "./Components/Controllers/NewGameController";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeController />} />
          <Route path="/newgame" element={<NewGameController />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
