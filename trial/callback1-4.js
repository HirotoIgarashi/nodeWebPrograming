'use strict';

// 思い通りに動作するパターン

// 関数の定義
const consoleLogStart = (text1) => {
  console.log(`${text1} start`);
};

const consoleLogEnd = (text1) => {
  console.log(`${text1} end`);
};

// 関数の実行
consoleLogStart('process A');
consoleLogEnd('process A');
consoleLogStart('process B');
consoleLogEnd('process B');
consoleLogStart('process C');
consoleLogEnd('process C');
