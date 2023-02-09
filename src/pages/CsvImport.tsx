import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useQuery } from "@apollo/client";
import { NotesDocument } from "../graphql/generated/graphql";

import { CsvImportField } from "../components/CsvImportField";

const CsvImport = () => {
  const { data } = useQuery(NotesDocument);
  data?.musics.map((data) => console.log(data.title));
  return (
    <>
      <h1>あいうえお</h1>
      <CsvImportField />
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default CsvImport;
