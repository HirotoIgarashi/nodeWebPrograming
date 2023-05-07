'use strict';

// expressのモジュールをロードする
const express = require('express');

const todos = [
  { id: 1, title: 'ネーム', completed: false },
  { id: 2, title: '下書き', completed: true }
];

// expressアプリケーションを定数appに代入する
const app = express();

// 待ち受けるポートを8000にする
const port = 8000;

// /api/todosに対するGETリクエストを処理するハンドラ
app.get('/api/todos', (req, res) =>
  // ToDoの配列をJSON形式で返す
  res.json(todos)
)
app.get("/", (req, res) => {
  res.send("Hello, Universe!");
})
.listen(port, () => {
  console.log(`The Express.js server has started and is listening on port number:`
  + ` ${port}`);
});
