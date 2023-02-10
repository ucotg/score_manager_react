import { importedCSVData } from "../types/data";

export const execute = (
  csvText: string,
  onSubmit: (title: string, anotherScore: number, leggendariaScore: number) => void
) => {
  const csvObject = csvText.split("\n").map((row) => row.split(","));

  const submitSongData: importedCSVData = csvObject.map((song) => {
    return {
      title: song[1],
      anotherScore: Number(song[27]),
      leggendariaScore: Number(song[34]),
      lastPlayed: song[40],
    };
  });

  for (const song of submitSongData) {
    onSubmit(song.title, song.anotherScore, song.leggendariaScore);
  }
};
