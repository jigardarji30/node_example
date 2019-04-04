var express = require('express');
var app = express();
var db = require('mysql');
// var filed = require('./views/index.html'); 

var database = db.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mydb'
});

// var name = name;

exports.add = function(req,res){
database.connect(function(err, result){
	if(err) throw err;
	console.log('connected');
	sql = 'data';
	database.query('INSERT INTO abc (name) VALUE("mitul")', function(err, result,fields){
		if(err) throw err;
		console.log('data store');
	});
});
}