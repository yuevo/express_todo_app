const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const mysql = require('mysql');
const config  = require('../config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: config.password,
  database: 'todo_app'
});

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);

  knex("tasks")
    .select("*")
    .then(function (results) {
      res.render('index', {
        title: 'ToDo App',
        todos: results,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.render('index', {
        title: 'ToDo App',
      });
    });
});


router.post('/', function (req, res, next) {
  const todo = req.body.add;
  knex("tasks")
    .insert({user_id: 1, content: todo})
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      console.error(err);
      res.render('index', {
        title: 'ToDo App',
      });
    });
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;
