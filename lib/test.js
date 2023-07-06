const add = (a, b, callback) => callback(a + b);

const addAsync = (a, b, callback) => setTimeout(() => callback(a + b), 100);

console.log('before');
add(1, 2, result => console.log('Result: ' + result));
console.log('after');

console.log('before');
addAsync(1, 2, result => console.log('Result: ' + result));
console.log('after');

const result = [1, 5, 7].map(element => element -1);
console.log(result);

// const fs = require('fs');
import fs from 'fs';
const cache = {};

const inconsistentReadSync = (filename, callback) => {
  if (cache[filename]) {
    process.nextTick(() => callback(cache[filename]));
    return cache[filename];
  } else {
    // 非同期の関数
    fs.readFile(filename, 'utf8', (err, data) => {
      cache[filename] = data;
      callback(data);
    });
  }
}

const consistentReadSync = (filename) => {
  if (cache[filename]) {
    return cache[filename];
  } else {
    cache[filename] = fs.readFileSync(filename, 'utf8');
    return cache[filename];
  }
}

const createFileReader = filename => {
  const listeners = [];
  inconsistentReadSync(filename, value => {
    listeners.forEach(listener => listener(value));
  });
  
  return {
    onDataReady: listener => listeners.push(listener)
  };
}

const reader1 = createFileReader('data.txt');
reader1.onDataReady(data => {
  console.log('First call data: ' + data);

  const reader2 = createFileReader('data.txt');
  reader2.onDataReady(data => {
    console.log('Second call data: ' + data);
  });
});
