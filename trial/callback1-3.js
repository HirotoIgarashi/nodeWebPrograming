'use strict';

// 関数の定義
const consoleLog = (text1, text2) => {
  console.log(`${text1} ${text2}`);
};

// 関数の実行
consoleLog('process A', 'start');
consoleLog('process A', 'end');
consoleLog('process B', 'start');
consoleLog('process B', 'end');
consoleLog('process C', 'start');
consoleLog('process C', 'end');
