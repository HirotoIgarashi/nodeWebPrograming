// 名前付きエクスポートのインポート
import { add } from './esm-math.mjs';

console.log('add', add);

// 名前付きエクスポートを別名でインポート
import { subtract as sub } from './esm-math.mjs';
console.log('sub', sub);

// デフォルトエクスポートのインポート
import Math from './esm-math.mjs';
console.log('Math', Math);

// デフォルトエクスポートはインポート時に任意の命令が可能(as不要)
import Mathematics from './esm-math.mjs';
console.log('Mathematics', Mathematics);

// 名前付きエクスポートとデフォルトエクスポートをまとめてインポート
import Math2, { subtract, multiply } from './esm-math.mjs';

// インポート対象を指定せずに丸ごとインポート(名前空間インポート)
import * as math from './esm-math.mjs';
console.log('import *', math);

// エクスポートされた値をインポートせず、モジュールのコードを実行するだけ
import './esm-math.mjs';
