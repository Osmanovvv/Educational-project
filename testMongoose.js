const mongoose = require('mongoose');

// Подключение к базе данных
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

// Создание схемы
var schema = mongoose.Schema({ name: String });

// Добавление метода в схему
schema.methods.sayServer = function () {
  console.log(this.name + " говорит, что он работает!");
};

// Создание модели на основе схемы
const Server = mongoose.model('Server', schema);

// Создание нового документа и сохранение его в базе данных
const server = new Server({ name: 'Сервер' });
server.save().then(() => server.sayServer());
