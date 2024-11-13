var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Сервер разрабатывает игру */
router.get('/development', function(req, res, next) { 
  res.send("<h1>Страница Сервера 1</h1>")
});

/* Сервер с программистами */
router.get('/programmers', function(req, res, next) { 
  res.send("<h1>Страница Сервера 2/h1>")
});

/* Сервер в будущем */
router.get('/future', function(req, res, next) { 
  res.send("<h1>Страница Сервера 3</h1>")
});




module.exports = router;
