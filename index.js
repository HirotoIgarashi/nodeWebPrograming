'use strict';

// 待ち受けるポートを8000にする
const port = 8000;
// expressのモジュールをロードする
const express = require("express");
// expressアプリケーションを定数appに代入する
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Universe!");
})
.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number:`
    + ` ${port}`);
});