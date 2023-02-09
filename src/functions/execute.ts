import { importedCSVData } from "../types/data";
import { useMutation } from "@apollo/client";

export const execute = (csvText: string) => {
  const csvObject = csvText.split("\n").map((row) => row.split(","));

  const submitSongData: importedCSVData = csvObject.map((song) => {
    return {
      title: song[1],
      anotherScore: Number(song[27]),
      leggendariaScore: Number(song[34]),
      lastPlayed: song[40],
    };
  });

  console.log(submitSongData);
};
