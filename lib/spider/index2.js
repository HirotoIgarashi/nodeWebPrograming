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
};

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
};

const spiderLinks = (currentUrl, body, nesting, callback) => {
  if (nesting === 0) {
    return process.nextTic(callback);
  }

  console.log('currenUrl: ' + currentUrl);
  let links = utilities.getPageLinks(currentUrl, body);

  const iterate = (index) => {
    if (index === links.length) {
      return callback();
    }

    spider(links[index], nesting - 1, (err) => {
      if (err) {
        return callback(err);
      }
      iterate(index + 1);
    });
  iterate(0);
  };
};

const spider = (url, nesting, callback) => {
  const filename = utilities.urlToFilename(url);
  // ファイルがダウンロード済みかチェック
  fs.readFile(filename, 'utf8', (err, body) => {
    if (err) {
      if (err.code !== 'ENOENT') {
        return callback(err);
      }
    }
    return download(url, filename, (err, body) => {
      if (err) {
        return callback(err);
      }
      spiderLinks(url, body, nesting, true);
    })
    spiderLinks(url, body, nesting, callback);
  });
};

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
});
