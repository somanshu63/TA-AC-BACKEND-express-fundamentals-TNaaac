var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.post('/json', (req, res) => {
    console.log(req.body);
});

app.post('/contact', (req, res) => {
    console.log(req.body);
});




app.listen(5000, () => {
    console.log('server started at port 5k')
});