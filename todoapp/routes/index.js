const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config  = require('../config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: config.password,
  database: 'todo_app'
});

let todos = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  // 第一引数の「index」でejsファイルを紐付け、第二引数で渡したい値をオブジェクトで渡している
  res.render('index', {
    title: 'ToDo App',
    todos: todos,
  });
});

router.post('/', function (req, res, next) {
  const todo = req.body.add;
  todos.push(todo);
  res.redirect('/');
});

module.exports = router;
