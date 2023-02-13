import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { csvSongData } from "../App";

export const CsvImportField: React.FC = () => {
  const [raw, setRaw] = useState<string>("");
  const { setCsv } = useContext(csvSongData);

  return (
    <>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setRaw(e.target.value);
        }}
        style={{ width: "100%" }}
        value={raw}
        margin="dense"
        variant="outlined"
        multiline
        maxRows="8"
      />
      <Button
        type="button"
        variant="outlined"
        size="large"
        onClick={() => {
          setCsv(raw);
        }}
      >
        インポート
      </Button>
    </>
  );
};
