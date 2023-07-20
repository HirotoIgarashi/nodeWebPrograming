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

// 関数の実行
consoleLogStart('process A', () => {
  console.log('process A end');
});

consoleLogStart('process B', () => {
  console.log('process B end');
});

consoleLogStart('process C', () => {
  console.log('process C end');
});
