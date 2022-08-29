var express = require('express');
var app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('welcome to index page of express');
});

app.listen(4000, () => {
    console.log("server is listed at port 4k")
});