//require
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var fs = require('fs');
var url = require('url');

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());


//custom middleware
//middleware to log req.method, req.url and date
app.use((req, res, next) => {
    console.log(req.method, req.url, Date());
    next();
});
//middleware to store data into req.body
app.use((req, res, next) => {
    req.on('data', (data) => {
        req.body = JSON.parse(data);
    });
    next();
});
//middleware similar to static
app.use((req, res, next) => {
    var urlArray = req.url.split('.');
    var imageName = urlArray[0].split('/').pop();
    var contentType = req.url.split('.').pop();
    if(contentType == "jpg" ||
        contentType == `png` ||
        contentType == `jpeg`){
            req.setHeader("content-Type", `iamge/${contentType}}`);
            res.sendFile(__dirname + `/public/images/${imageName}.${contentType}`);
        }else if(contentType == `css`){
            req.setHeader("content-Type", `text/css}`);
            res.sendFile(__dirname + `/public/stylesheet/${imageName}.css`);
        }
    next();
});


//routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//error middleware
app.use((req, res, next) => {
    res.send('page not found');
});

app.use((err, req, res, next) => {
    res.send(err);
});

//listener
app.listen(4000, () => {
    console.log('server running at port 4k')
});