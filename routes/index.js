var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
  	layout: 'main',
  	title: 'Selamat Datang',
  };
  res.render('index', data);
});

router.get('/login', function(req, res, next){
	let data = {
		layout: 'mainLogin',
		title: 'Sign In',
	};
	res.render('login', data);
});

module.exports = router;
