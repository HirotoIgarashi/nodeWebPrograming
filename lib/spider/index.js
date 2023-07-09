'use strict';

const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

// function spider(url, callback) {
const spider = (url, callback) => {
  const filename = utilities.urlToFilename(url);
  // ファイルがダウンロード済みかチェック
  fs.exists(filename, exists => {
    if (!exists) {
      console.log(`Downloading ${url}`);
      // ファイルが見つからなかった場合、URLをダウンロード
      request(url, (err, response, body) => {
        if (err) { callback(err); }
        else {
          // ファイルを保存するためのディレクトリを作成 
          mkdirp(path.dirname(filename), err => {
            if (err) { callback(err); }
            else {
              // HTTPレスポンスのボディをファイルに保存
              fs.writeFile(filename, body, err => {
                if (err) { callback(err); }
                else { callback(null, filename, true)};
              });
            }
          });
        }
      });
    }
    else {
      callback(null, filename, false);
    }
  });
}

spider(process.argv[2], (err, filename, downloaded) => {
  if (err) { console.log(err); }
  else if (downloaded) {
      console.log(`Completed the download of "${filename}"`);
  }
  else {
    console.log(`"${filename}" was alreadly downloaded`);
  }
})
