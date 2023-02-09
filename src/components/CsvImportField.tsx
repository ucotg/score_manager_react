import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Box, Typography, TextField } from "@mui/material";

export const CsvImportField: React.FC = () => {
  return (
    <>
      <TextField
        style={{ width: "100%" }}
        margin="dense"
        variant="outlined"
        multiline
        maxRows="4"
      />
    </>
  );
};
