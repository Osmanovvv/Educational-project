var express = require('express');
var router = express.Router();
var Server = require('../models/server').Server;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Новый маршрутизатор, для маршрутов, начинающихся с servers');
  res.render('index', { title: 'Express' });
});

/* Страница Серверов */
router.get("/:nick", checkAuth, async function(req, res, next) {
  var servers = await Server.find({nick: req.params.nick});
  console.log(servers)
  if(!servers.length) return next(new Error("Нет Сервера"))
    var server = servers[0];
    res.render('server', {
      title: server.title, 
      picture: server.avatar, 
      desc: server.desc
   }) 
});

module.exports = router;
