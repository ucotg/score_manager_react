import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { useForm, SubmitHandler, FieldErrors, DefaultValues } from "react-hook-form";

import { csvSongData } from "../App";
import { getSampleCsv } from "../functions/getSmapleCsv";

type Input = {
  csv: string;
};

export const CsvImportField: React.FC = () => {
  const [raw, setRaw] = useState<string>("");
  const { setCsv } = useContext(csvSongData);
  const {
    setValue,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    setCsv(data.csv);
    reset();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("csv")}
        style={{ width: "100%" }}
        margin="dense"
        variant="outlined"
        multiline
        maxRows="8"
      />
      <Button type="submit" variant="outlined" size="large" disabled={isSubmitting}>
        {!isSubmitting ? "インポート" : <CircularProgress size={19} />}
      </Button>
      <Button
        type="button"
        variant="outlined"
        size="large"
        onClick={() => {
          setRaw(getSampleCsv());
          console.log(getSampleCsv());
        }}
      >
        サンプルCSVを入力
      </Button>
    </form>
  );
};
