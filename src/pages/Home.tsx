import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>beatmaniaIIDX BPL課題曲スコア・オプションマネージャー</h1>
      <div>
        楽曲一覧は<Link to={`/musicData/`}>こちら</Link> <br />
        CSVインポートは<Link to={`/csvImport/`}>こちら</Link>
      </div>
    </>
  );
};

export default Home;
