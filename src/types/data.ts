export type SongData = {
  [key: string]: any;
  title: string;
  level: number;
  notes: number;
  bpm: string;
  genre: string;
  difficulty: "ANOTHER" | "LEGGENDARIA";
  exscore: number;
  previousExScore?: number;
  storedAt: string;
  updatedAt: string;
  version: string;
};
