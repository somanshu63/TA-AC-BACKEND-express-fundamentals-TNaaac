var express = require('express');
var app = express();

app.use(express.urlencoded({extended: false}));

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