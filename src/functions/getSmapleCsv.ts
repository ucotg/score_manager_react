export const getSampleCsv = () => {
  const req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
  req.open("get", "/public/sample.csv", true); // アクセスするファイルを指定
  req.send(null); // HTTPリクエストの発行

  return req.responseText;
};
