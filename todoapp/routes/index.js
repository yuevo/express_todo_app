const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 第一引数の「index」でejsファイルを紐付け、第二引数で渡したい値をオブジェクトで渡している
  res.render('index', { title: 'ToDo App' });
});

module.exports = router;
