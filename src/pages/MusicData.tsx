import { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AllMusicDocument } from "../graphql/generated/graphql";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { Typography, TextField, MenuItem } from "@mui/material";
import { SongData } from "../types/data";
import { convertVersionNumToStr } from "../functions/convertVersionNumToStr";
import { djRank } from "../functions/djRank";
import { csvSongData } from "../App";
import { execute } from "../functions/execute";

const Register: React.FC = () => {
  const { data, loading, error } = useQuery(AllMusicDocument);
  const { csv } = useContext(csvSongData);
  const tableSongData = execute(csv);
  const allMusics = data ? data.musics.filter((song) => song.exscore != null) : [];

  const songs: SongData[] = csv
    ? allMusics.map((song) => {
        const version = convertVersionNumToStr(song.version);
        const exscore =
          song.difficulty === "ANOTHER"
            ? tableSongData[song.title].anotherScore
            : tableSongData[song.title].leggendariaScore;
        const scoreRate = Math.floor((exscore / (song.notes * 2)) * 10000) / 100;
        const djRankDiff = djRank(song.notes, exscore);
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
      enableSorting: true,
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
          <MenuItem value="8">???8</MenuItem>
          <MenuItem value="9">???9</MenuItem>
          <MenuItem value="10">???10</MenuItem>
          <MenuItem value="11">???11</MenuItem>
          <MenuItem value="12">???12</MenuItem>
        </TextField>
      ),
      filterFn: (row, _columnIds, filterValue) => row.getValue<number>("level").toString() === filterValue,
    },
    { header: "????????????", accessorKey: "title" },
    {
      header: "?????????",
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
    { header: "????????????", accessorKey: "notes", size: 50, enableColumnFilter: false },
    { header: "EX SCORE", accessorKey: "exscore", size: 50, enableColumnFilter: false },
    { header: "DJ RANK", accessorKey: "djRank", size: 50 },
    { header: "SCORE RATE", accessorKey: "scoreRate", size: 50 },
    { header: "???????????????", accessorKey: "version", size: 50 },
    {
      header: "BPL GENRE",
      accessorKey: "genre",
      size: 50,
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
          <MenuItem value="NOTES">NOTES</MenuItem>
          <MenuItem value="PEAK">PEAK</MenuItem>
          <MenuItem value="SCRATCH">SCRATCH</MenuItem>
          <MenuItem value="SOF-LAN">SOF-LAN</MenuItem>
          <MenuItem value="CHARGE">CHARGE</MenuItem>
          <MenuItem value="CHORD">CHORD</MenuItem>
        </TextField>
      ),
      filterFn: (row, _columnIds, filterValue) => row.getValue<string>("genre").toString() === filterValue,
    },
  ];

  return (
    <>
      <Typography variant="h2">????????????</Typography>
      <Typography variant="h3">
        <Link to={`/`}>??????????????????</Link>
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={songs}
        enableFullScreenToggle={false}
        muiTablePaperProps={{ sx: { mx: 2, boxShadow: "none" } }}
        enableHiding={false}
        enableColumnResizing={false}
        enableFilterMatchHighlighting={false}
        enableDensityToggle={false}
        enableRowActions={false}
        state={{ isLoading: csv != null && data == null }}
      />
    </>
  );
};

export default Register;
