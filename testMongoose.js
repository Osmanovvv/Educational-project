const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024'); 

const Server = mongoose.model('Server', { name: String });

const server = new Server({ name: 'Сервер' }); 
server.save().then(() => console.log('Османов Сервер!'));
