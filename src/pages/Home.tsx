import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <Typography variant="h4">beatmaniaIIDX BPL課題曲スコア・オプションマネージャー</Typography>
      <div>
        楽曲一覧は<Link to={`/musicData/`}>こちら</Link>
        <Typography color="red">※最初にCSVインポートをしないと楽曲一覧が表示されません！！※</Typography>
        CSVインポートは<Link to={`/csvImport/`}>こちら</Link>
      </div>
    </>
  );
};

export default Home;
