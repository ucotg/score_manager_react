import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MusicData from "./pages/MusicData";
import Login from "./pages/Login";
import CsvImport from "./pages/CsvImport";

export const csvSongData = createContext(
  {} as {
    csv: string;
    setCsv: React.Dispatch<React.SetStateAction<string>>;
  }
);

const App: React.FC = () => {
  const [csv, setCsv] = useState<string>("");
  const value = {
    csv,
    setCsv,
  };
  return (
    <csvSongData.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/musicData/`} element={<MusicData />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/csvImport/`} element={<CsvImport />} />
        </Routes>
      </BrowserRouter>
    </csvSongData.Provider>
  );
};

export default App;
