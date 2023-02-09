import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CsvImport from "./pages/CsvImport";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/CsvImport/`} element={<CsvImport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
