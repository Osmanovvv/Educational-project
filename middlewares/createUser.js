var User = require("../models/user").User;

module.exports = async function(req, res, next) {
  res.locals.user = null;

  // Находим пользователя по ID сессии
  var user = await User.findById(req.session.user_id);

  // Проверяем, если пользователь найден (не null)
  if (user) {
    res.locals.user = user;
  }

  // Передаем управление следующему middleware
  next();
}