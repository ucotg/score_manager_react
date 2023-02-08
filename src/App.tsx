import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CsvImport from "./pages/CsvImport";
import Hello from "./components/Hello";
import { NotesDocument } from "./graphql/generated/graphql";
import { useQuery } from "@apollo/client";

const App: React.FC = () => {
  const { data } = useQuery(NotesDocument);
  console.log(data?.music.map((data) => data.title));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello />
      </header>
    </div>
  );
};

export default App;
