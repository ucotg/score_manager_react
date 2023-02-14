import React, { useContext } from "react";
import { Box, Typography, TextField, Button, CircularProgress, FormHelperText } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import { csvSongData } from "../App";
import { SAMPLE_CSV } from "../functions/sampleCsv";

type Input = {
  csv: string;
};

export const CsvImportField: React.FC = () => {
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
      <FormHelperText sx={{ color: "green", fontSize: 16 }}>
        {isSubmitSuccessful ? "～インポートが正常に完了しました～" : ""}
      </FormHelperText>
      <Button type="submit" variant="outlined" size="large" disabled={isSubmitting}>
        {!isSubmitting ? "インポート" : <CircularProgress size={19} />}
      </Button>
      <Button type="button" variant="outlined" size="large" onClick={() => setValue("csv", SAMPLE_CSV)}>
        {"サンプルCSVを入力(CSVがダウンロードできない場合)"}
      </Button>
    </form>
  );
};
