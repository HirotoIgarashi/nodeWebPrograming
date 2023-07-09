'use strict';

const request   = require('request');
const fs        = require('fs');
const mkdirp    = require('mkdirp');
const path      = require('path');
const utilities = require('./utilities');

// 指定された文字列をファイルに書き込む
const saveFile = (filename, contents, callback) => {
  mkdirp(path.dirname(filename), err => {
    if (err) {
      return callback(err);
    }
    // HTTPレスポンスのボディをファイルに保存
    fs.writeFile(filename, contents, callback); 
  });
}

// URLをダウンロードする
const download = (url, filename, callback) => {
  console.log(`Downloading ${url}`);
  // ファイルが見つからなかった場合、URLをダウンロード
  request(url, (err, response, body) => {
    if (err) {
      return callback(err);
    }
    else {
      // ファイルを保存するためのディレクトリを作成 
      saveFile(filename, body, err => {
        if (err) {
          return callback(err);
        }
      })
      console.log(`Downloaded and saved: ${url}`);
      callback(null, body);
    }
  });
}

const spider = (url, callback) => {
  const filename = utilities.urlToFilename(url);
  // ファイルがダウンロード済みかチェック
  fs.exists(filename, exists => {
    if (exists) {
      return callback(null, filename, false);
    }
    download(url, filename, err => {
      if (err) { return callback(err); }
      callback(null, filename, true);
    })
  });
}

spider(process.argv[2], (err, filename, downloaded) => {
  if (err) {
    console.log(err);
  }
  else if (downloaded) {
    console.log(`Completed the download of "${filename}"`);
  }
  else {
    console.log(`"${filename}" was alreadly downloaded`);
  }
})
