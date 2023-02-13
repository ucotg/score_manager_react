export type SongData = {
  title: string;
  level: number;
  notes: number;
  bpm: string;
  genre: string;
  difficulty: string;
  exscore: number;
  previousExScore?: number;
  storedAt?: string;
  updatedAt?: string;
  version: string;
  scoreRate: string;
  djRank: string;
};

export type importedCSVData = {
  title: string;
  anotherScore: number;
  leggendariaScore: number;
  lastPlayed: string;
}[];

export type TableSongData = {
  level: number;
  notes: number;
  bpm: string;
  genre: string;
  exscore: number;
  djRank: string;
  scoreRate: string;
}[];
