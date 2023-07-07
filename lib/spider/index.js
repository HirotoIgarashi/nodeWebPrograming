'use strict';

// import request from 'request';
const request = require('request');
import fs from 'fs';
import { mkdirp } from 'mkdirp';
// import * as path from 'path';
// import 'path';
const path = require('path');

import url from 'node:url';
import slug from 'slug';

const urlToFilename = (urlname) => {
  console.log(urlname);
  const parsedUrl = url.parse(urlname);
  const urlPath = parsedUrl.path.split('/')
    .filter(function(component) {
      return component !== '';
    })
    .map(function(component) {
      return slug(component, { remove: null });
    })
    .join('/');
  let filename = path.join(parsedUrl.hostname, urlPath);
  if(!path.extname(filename).match(/htm/)) {
    filename += '.html';
  }
  return filename;
};

const spider = (url, callback) => {
  const filename = urlToFilename(url);
  fs.exists(filename, exists => {
    if (!exists) {
      console.log(`Downloadint ${url}`);
      request(url, (err, response, body) => {
        if (err) { callback(err); }
        else {
          mkdirp(path.dirname(filename), err => {
            if (err) { callback(err); }
            else {
              fs.writeFile(filename, body, err => {
                if (err) { callback(err); }
                else { callback(null, filename, true); }
              });
            }
          });
        }
      });
    }
    else {
      callback(null, filename, true);
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
