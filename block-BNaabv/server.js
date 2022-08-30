var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
    var count = req.cookies.count;
    if(count){
        res.cookie("count", Number(count) + 1);
    }else{
        res.cookie("count", 1)
    }
    next();
});

app.use('/admin', (req, res, next) => {
    next("Unauthorized");
  });


//routes
app.get('/', (req, res) => {
    res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
    res.send('my name is qwerty');
});

app.post('/form', (req, res) => {
    res.json(req.body);
});

app.post('/json', (req, res) => {
    res.send(req.body);
});

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`);
});



//404 error
app.use((req, res, next) => {
    res.send('page not found');
});

//custom error
app.use((err, req, res, next) => {
    res.send(err);
});



app.listen(4000, () => {
    console.log('server started at port 4k')
});

