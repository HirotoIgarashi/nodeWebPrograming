'use strict';

// 思い通りに動作しないパターン
// consoleLogStart関数が非同期なためconsoleLogEndが先に実行されてしまう。

// 関数の定義
const consoleLogStart = (text) => {
  setTimeout(() => {
    console.log(`${text} start`);
  }, 100)
};

const consoleLogEnd = (text) => {
  console.log(`${text} end`);
};

// 関数の実行
consoleLogStart('process A');
consoleLogEnd('process A');
consoleLogStart('process B');
consoleLogEnd('process B');
consoleLogStart('process C');
consoleLogEnd('process C');
