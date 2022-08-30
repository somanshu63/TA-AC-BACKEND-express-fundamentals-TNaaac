//require
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookieParser());


//routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname+ '/blog.html');
});

//error middleware
app.use((req, res, next) => {
    res.send('page not found');
});

app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(4000, () => {
    console.log('server running at port 4k')
});