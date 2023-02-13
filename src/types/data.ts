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

export type TableSongData = {
  [key: string]: {
    anotherScore: number;
    leggendariaScore: number;
    lastPlayed: string;
  };
};
