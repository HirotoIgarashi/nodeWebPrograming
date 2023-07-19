'use strict';

// 思い通りに動作しないパターン
// consoleLogStart関数が非同期なためconsoleLogEndが先に実行されてしまう。
// consoleLogEndをconsoleLogStart関数にcallbackとして渡して思い通りの
// 順番に実行させたい。

// 関数の定義
const consoleLogStart = (text, callback) => {
  setTimeout(() => {
    console.log(`${text} start`);
    callback;
  }, 1000);
};

const consoleLogEnd = (text) => {
  setTimeout(() => {
    console.log(`${text} end`);
  }, 1000);
};

// 関数の実行
consoleLogStart('process A', consoleLogEnd('process A'));
// consoleLogStart('process A', () => {
//   console.log('process A end');
// });
consoleLogStart('process B', consoleLogEnd('process B'));
consoleLogStart('process C', consoleLogEnd('process C'));
