import React, { useContext, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Box, Typography, TextField, Button } from "@mui/material";

import {
  AllMusicDocument,
  UpdateAnotherScoreDocument,
  UpdateLeggendariaScoreDocument,
} from "../graphql/generated/graphql";
import { execute } from "../functions/execute";
import { importedCSVData } from "../types/data";
import { csvSongData } from "../App";

export const CsvImportField: React.FC = () => {
  const [raw, setRaw] = useState<string>("");
  const { csv, setCsv } = useContext(csvSongData);
  const { refetch } = useQuery(AllMusicDocument);
  const [updateAnotherScore] = useMutation(UpdateAnotherScoreDocument, {
    onCompleted() {
      refetch();
    },
  });
  const [updateLeggendariaScore] = useMutation(UpdateLeggendariaScoreDocument, {
    onCompleted() {
      refetch();
    },
  });

  const onSubmit = (submitSongs: importedCSVData) => {
    submitSongs.map(async ({ title, anotherScore, leggendariaScore }) => {
      try {
        await updateAnotherScore({
          variables: { title, exscore: anotherScore },
        });
        await updateLeggendariaScore({
          variables: { title, exscore: leggendariaScore },
        });
      } catch (error) {
        throw error;
      }
    });
  };

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
      <Button type="button" variant="outlined" size="large" onClick={() => setCsv(raw)}>
        インポート
      </Button>
    </>
  );
};
