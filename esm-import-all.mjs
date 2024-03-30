import Math, { add, subtract, multiply } from './esm-math.mjs';
import * as math from './esm-math.mjs';

console.log('Math === math.default', Math === math.default);
console.log('add === math.add', add === math.add);
console.log('subtract === math.subtract', subtract === math.subtract);
console.log('multiply === math.multiply', multiply === math.multiply);
