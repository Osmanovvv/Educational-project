var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', counter:req.session.counter });
});
    
/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход'});
});

/* POST login/registration page. */ 
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    console.log(username); 
    console.log(password);
});



module.exports = router;    