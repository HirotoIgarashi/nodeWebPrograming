'use strict';

// callbackの使用例
// consoleLogStart関数が非同期なためconsoleLogEndが先に実行されてしまう。
// consoleLogEndをconsoleLogStart関数にcallbackとして渡して思い通りの
// 順番に実行させる。

// 関数の定義
const consoleLogStart = (text, callback) => {
  setTimeout(() => {
    console.log(`${text} start`);
    callback();
  }, 1000);
};

const consoleLogEnd = (text) => {
  return console.log(`${text} end`);
};

// const consoleLogEnd = (text) => {
//   console.log(`${text} end`);
// };

// 関数の実行

consoleLogStart('process A', () => {
  consoleLogEnd('process A');
});

consoleLogStart('process B', () => {
  consoleLogEnd('process B');
});

consoleLogStart('process C', () => {
  consoleLogEnd('process C');
});
