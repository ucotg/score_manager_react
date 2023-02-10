import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AllMusicDocument } from "../graphql/generated/graphql";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { SongData } from "../types/data";
import { convertVersionNumToStr } from "../functions/convertVersionNumToStr";
import { djRank } from "../functions/djRank";

const Register: React.FC = () => {
  const { data, error, loading } = useQuery(AllMusicDocument);

  const songs: SongData[] = data
    ? data?.musics.map((song) => {
        const version = convertVersionNumToStr(song.version);
        const exscore = song.exscore ? song.exscore : 0;
        const scoreRate = Math.floor((exscore / (song.notes * 2)) * 10000) / 100;
        const djRankDiff = djRank(true, false, song.notes, exscore);
        return {
          title: song.title,
          level: song.level,
          notes: song.notes,
          bpm: song.bpm,
          genre: song.genre,
          difficulty: song.difficulty,
          exscore: exscore,
          version: version ? version : "",
          scoreRate: `${scoreRate}%`,
          djRank: djRankDiff,
        };
      })
    : [];

  const columns: MRT_ColumnDef<SongData>[] = [
    { header: "Lv", accessorKey: "level" },
    { header: "タイトル", accessorKey: "title" },
    { header: "難易度", accessorKey: "difficulty" },
    { header: "BPM", accessorKey: "bpm" },
    { header: "ノーツ数", accessorKey: "notes" },
    { header: "EX SCORE", accessorKey: "exscore" },
    { header: "DJ RANK", accessorKey: "djRank" },
    { header: "SCORE RATE", accessorKey: "scoreRate" },
    { header: "バージョン", accessorKey: "version" },
  ];

  return (
    <>
      <h1>楽曲一覧</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      <MaterialReactTable columns={columns} data={songs} />
    </>
  );
};

export default Register;
