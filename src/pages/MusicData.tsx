import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AllMusicDocument } from "../graphql/generated/graphql";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { SongData } from "../types/data";

const Register: React.FC = () => {
  const { data, error, loading } = useQuery(AllMusicDocument);

  const songs = useMemo(() => data?.musics || [], [data]);

  const columns: MRT_ColumnDef<SongData>[] = [
    { header: "タイトル", accessorKey: "title" },
    { header: "スコア", accessorKey: "exscore" },
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
