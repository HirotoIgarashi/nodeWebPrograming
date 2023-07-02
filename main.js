// main.js

import { program } from "commander";
import * as fs from "node:fs/promise";

// md2htmlモジュールからmd2html関数をインポートする
import { md2html } from "./md2html.js";

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};
fs.readFile(filePath, { encoding: "utf8" }).then(file => {
  // md2htmlモジュールを使ってHTMLに変換する
  const html = md2html(file, cliOptions);
  console.log(html);
}).catch(err => {
    console.err(err.message);
    process.exit(1);
});
