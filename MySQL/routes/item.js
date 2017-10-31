var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'liuyan'
});

/* GET home page. */


router.post('/list', function(req, res, next) {
	var name=req.body.name;
	var con=req.body.con;
  res.header("Access-Control-Allow-Origin","*")
  connection.query('INSERT INTO liu (name,content) VALUES ("'+name+'","'+con+'")',
	  function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.get('/xian', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT id,content,name FROM liu',
	  function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.post('/delete', function(req, res, next) {
	var cc=req.body.id;
  res.header("Access-Control-Allow-Origin","*")
  connection.query('DELETE FROM liu WHERE id='+cc,function(err, rows, fields){
  	res.send(rows)
  })
});




module.exports = router;
