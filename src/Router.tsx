import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeController } from "./Components/Controllers/HomeController";
import { NewGame } from "./Components/Views/New Game";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeController />} />
          <Route path="/newgame" element={<NewGame />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
