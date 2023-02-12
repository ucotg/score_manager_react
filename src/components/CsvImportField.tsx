import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Box, Typography, TextField, Button } from "@mui/material";

import {
  AllMusicDocument,
  UpdateAnotherScoreDocument,
  UpdateLeggendariaScoreDocument,
} from "../graphql/generated/graphql";
import { execute } from "../functions/execute";

export const CsvImportField: React.FC = () => {
  const [raw, setRaw] = useState<string>("");
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

  const onSubmit = async (title: string, anotherScore: number, leggendariaScore: number) => {
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
      <Button type="button" variant="outlined" size="large" onClick={() => execute(raw, onSubmit)}>
        インポート
      </Button>
    </>
  );
};
