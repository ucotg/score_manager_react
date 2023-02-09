import React from "react";
import "../App.css";
import { TextField } from "@mui/material";
import { useQuery } from "@apollo/client";
import { NotesDocument } from "../graphql/generated/graphql";

const CsvImport = () => {
  const { data } = useQuery(NotesDocument);
  data?.musics.map((data) => console.log(data.title));
  return (
    <>
      <div className="CsvImport">あいうえお</div>
      <TextField />
    </>
  );
};

export default CsvImport;
