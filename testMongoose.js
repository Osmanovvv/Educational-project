const mongoose = require('mongoose');

// Подключение к базе данных
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Server = require('./models/server.js').Server

var server = new Server({
   title: "Сервер работает",
   nick: "WorkingServer",
  })


server.save();
