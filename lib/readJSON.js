import fs from 'fs';

console.log('テスト2開始');

const readJSON = (filename, callback) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if (err) {
      // ファイル読み込みエラーを通知して関数を抜ける
      return callback(err);
    }

    try {
      // ファイルの中身を解析(parse)する
      parsed = JSON.parse(data);
      console.log(parsed);
    } catch(err) {
      // 解析エラーを通知して関数を抜ける
      return callback(err);
    }
    // エラーなし。処理結果(JSONデータ)を通知
    callback(null, parsed);
  });
};

console.log(readJSON('dataJSON.txt', () => {}));
// readJSON('dataJSON.txt', () => {});
console.log('テスト2終了');
