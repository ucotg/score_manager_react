import { Link } from "react-router-dom";
import "../App.css";

import { CsvImportField } from "../components/CsvImportField";

const CsvImport: React.FC = () => {
  return (
    <>
      <h1>スコアデータCSVインポート</h1>
      <CsvImportField />
      <div>
        <p>
          CSVダウンロードは
          <a target="_blank" rel="noreferrer" href="https://p.eagate.573.jp/game/2dx/30/djdata/score_download.html">
            こちら
          </a>
        </p>
        <Link to={`/musicData`}>楽曲一覧を表示</Link>
        <br />
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default CsvImport;
