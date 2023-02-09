import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Box, Typography, TextField, Button } from "@mui/material";

import { SongData } from "../types/data";
import { AllMusicDocument } from "../graphql/generated/graphql";
import { execute } from "../functions/execute";

export const CsvImportField: React.FC = (props) => {
  const [raw, setRaw] = useState<string>("");
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
        maxRows="4"
      />
      <Button type="button" variant="outlined" size="large" onClick={() => execute(raw)}>
        インポート
      </Button>
    </>
  );
};
