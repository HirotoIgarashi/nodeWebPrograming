'use strict';

// expressのモジュールをロードする
const express = require('express');
// expressアプリケーションを定数appに代入する
const app = express();

// /apt/todos以下のパスに対するリクエストのハンドリングを
// ./routes/todosモジュールに委譲する。
// app.use('/api/todos', require('./routes/todos'));

const todos = [
  { id: 1, title: 'ネーム', completed: false },
  { id: 2, title: '下書き', completed: true }
];

// 待ち受けるポートを3000にする
const port = 3000;

// /api/todosに対するGETリクエストを処理するハンドラ
// ToDo一覧の取得
// app.get('/api/todos', (req, res) => res.json(todos));
app.get('/api/todos', (req, res) => {

  console.log(req.query);

  if (!req.query.completed) {
    return res.json(todos);
  }
  // completedクエリパラメータを指定された場合はToDoをフィルタリング
  const completed = req.query.completed === 'true';
  res.json(todos.filter(todo => todo.completed === completed));
});
app.get('/', (req, res) => res.send("Hello, Universe!"))
.listen(
  port, () => { console.log(
`The Express.js server has started and is listening on port number:` +
` ${port}`); 
    }
  );
