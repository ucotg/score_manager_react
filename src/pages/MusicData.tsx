import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AllAnotherMusicsDocument, AllLeggendariaMusicsDocument } from "../graphql/generated/graphql";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { Typography, TextField, MenuItem } from "@mui/material";
import { SongData } from "../types/data";
import { convertVersionNumToStr } from "../functions/convertVersionNumToStr";
import { djRank } from "../functions/djRank";

const Register: React.FC = () => {
  const { data: dataAnother, loading: loadingAnother, error: errorAnother } = useQuery(AllAnotherMusicsDocument);
  const {
    data: dataLeggendaria,
    loading: loadingLeggendaria,
    error: errorLeggendaria,
  } = useQuery(AllLeggendariaMusicsDocument);

  const songs: SongData[] = dataAnother
    ? dataAnother?.musics.map((song) => {
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
    {
      header: "Lv",
      accessorKey: "level",
      size: 20,
      enableSorting: false,
      Filter: ({ header }) => (
        <TextField
          onChange={(e) => header.column.setFilterValue(e.target.value || undefined)}
          select
          value={header.column.getFilterValue() ?? ""}
          margin="none"
          placeholder="Filter"
          variant="standard"
          fullWidth
        >
          {/*@ts-ignore*/}
          <MenuItem value={null}>All</MenuItem>
          <MenuItem value="8">☆8</MenuItem>
          <MenuItem value="9">☆9</MenuItem>
          <MenuItem value="10">☆10</MenuItem>
          <MenuItem value="11">☆11</MenuItem>
          <MenuItem value="12">☆12</MenuItem>
        </TextField>
      ),
      filterFn: (row, _columnIds, filterValue) => row.getValue<number>("level").toString() === filterValue,
    },
    { header: "タイトル", accessorKey: "title" },
    {
      header: "難易度",
      accessorKey: "difficulty",
      size: 70,
      enableSorting: false,
      Filter: ({ header }) => (
        <TextField
          onChange={(e) => header.column.setFilterValue(e.target.value || undefined)}
          select
          value={header.column.getFilterValue() ?? ""}
          margin="none"
          placeholder="Filter"
          variant="standard"
          fullWidth
        >
          {/*@ts-ignore*/}
          <MenuItem value={null}>All</MenuItem>
          <MenuItem value="ANOTHER">ANOTHER</MenuItem>
          <MenuItem value="LEGGENDARIA">LEGGENDARIA</MenuItem>
        </TextField>
      ),
      filterFn: (row, _columnIds, filterValue) => row.getValue<string>("difficulty") === filterValue,
    },
    { header: "BPM", accessorKey: "bpm", size: 50 },
    { header: "ノーツ数", accessorKey: "notes", size: 50 },
    { header: "EX SCORE", accessorKey: "exscore", size: 50 },
    { header: "DJ RANK", accessorKey: "djRank", size: 50 },
    { header: "SCORE RATE", accessorKey: "scoreRate", size: 50 },
    { header: "バージョン", accessorKey: "version", size: 50 },
  ];

  return (
    <>
      <Typography variant="h1">楽曲一覧</Typography>
      <Typography variant="h3">
        ログインは<Link to={`/login/`}>こちら</Link>
      </Typography>
      <Typography variant="h3">
        <Link to={`/`}>ホームに戻る</Link>
      </Typography>
      <MaterialReactTable columns={columns} data={songs} muiTablePaperProps={{ sx: { mx: 2, boxShadow: "none" } }} />
    </>
  );
};

export default Register;
