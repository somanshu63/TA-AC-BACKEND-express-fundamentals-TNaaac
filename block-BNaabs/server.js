var express = require('express');
var cookieParser = require('cookies-parser');
var logger = require('morgan');

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger("dev"));

//routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
    res.send(req.body);
});

app.get('/users/:name', (req, res) => {
    console.log(req.params.name);
    res.send(req.params.name);
});

app.listen(5000, () => {
    console.log('server started at port 5k');
});