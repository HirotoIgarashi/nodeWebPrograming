import fs from "fs";

console.log('readJSONThrows開始');

const readJSONThrows = (filename, callback) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if (err) {
      // ファイル読み込みエラーを通知して関数を抜ける
      return callback(err);
    }
    // エラーなし。処理結果(JSONデータ)を通知
    callback(null, JSON.parse(data));
  });
};

// readJSONThrows('nonjson.txt', (err, json) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     JSON.stringify(json);
//   }
// })

readJSONThrows('nonjson.txt', err => { console.log(err); });

process.on('uncaughtException', (err) => {
  console.error('これでエラーをキャッチできる: ' + err.message);
  // エラーコード1で終了。これがないと実行を継続する
  process.exit(1);
});

console.log('readJSONThrows終了');
