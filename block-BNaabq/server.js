var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.use(logger('dev'));

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
});

app.get('/about', (req, res) => {
   res.cookie("username", "somanshu");
   res.send();
}); 


app.listen(5000, ()=> {
    console.log('server started at port 5k')
});
