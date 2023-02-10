import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MusicData from "./pages/MusicData";
import Login from "./pages/Login";
import CsvImport from "./pages/CsvImport";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/musicData/`} element={<MusicData />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/csvImport/`} element={<CsvImport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
