import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useQuery } from "@apollo/client";
import { NotesDocument } from "../graphql/generated/graphql";

import { CsvImportField } from "../components/CsvImportField";

const CsvImport = () => {
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
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default CsvImport;
