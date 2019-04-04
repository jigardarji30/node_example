// var http = require('http');
// var route = require('./Routes/routes.js');


// http.createServer(function(req,res){
// 	res.writeHead(200,{'content-type':'text/html'});
//     res.write('data add');
// 	res.end();
// }).listen(8000);
// console.log('server started');

const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const path = require('path');
var hbs = require('express-handlebars');

var route = require('./Routes/routes.js');
var app = express();

// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(express.static('views'));

// app.engine('.hbs', hbs({
// 	defaultLayout: 'main',
//     layoutsDir: path.join( __dirname + 'Views/Layouts')
// }));

// app.set('view engine', '.hbs');
// app.set('views', path.join( __dirname + '/Views'));


app.engine('.hbs', hbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),

}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './Views'));



// app.use('/', route);

app.get('/', function(req, res){
	res.render('index1.hbs');
});


// app.use('/', route);


app.listen(8000, function(){
	console.log('server started');
});