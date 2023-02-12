import { importedCSVData } from "../types/data";

export const execute = (csvText: string, onSubmit: (submitSongs: importedCSVData) => void) => {
  const csvObject = csvText.split("\n").map((row) => row.split(","));

  const submitSongData: importedCSVData = csvObject.map((song) => {
    return {
      title: song[1],
      anotherScore: Number(song[27]),
      leggendariaScore: Number(song[34]),
      lastPlayed: song[40],
    };
  });

  onSubmit(submitSongData);
};
