var express = require('express');
var logger = require('morgan');

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger("dev"));


app.use('/admin', (req, res, next) => {
    next("Unauthorized");
  });

//routes
app.get('/', (req, res) => {
    res.send('index page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});


//error 404
app.use((req, res, next) => {
    res.send('page not found');
});

//custom error
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(5000, () => {
    console.log('server started at port 5k');
});