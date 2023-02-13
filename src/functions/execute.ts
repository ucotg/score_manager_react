import { TableSongData } from "../types/data";

export const execute = (csvText: string): TableSongData => {
  const csvObject = csvText.split("\n").map((row) => row.split(","));

  const submitSongData: TableSongData = {};

  for (const song of csvObject) {
    submitSongData[song[1]] = {
      anotherScore: Number(song[27]),
      leggendariaScore: Number(song[34]),
      lastPlayed: song[40],
    };
  }

  return submitSongData;
};
