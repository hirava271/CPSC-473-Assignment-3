var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.post('/average', function(req, res) {

    var array = req.body["array[]"];
    var sum = 0;
    array.forEach(function(entry) {
        sum += parseInt(entry);
    });
    var average = sum / array.length;
    res.json({
        "answer": average
    });
});
app.post('/largestNoInArray', function(req, res) {
    var array = req.body['array[]'];
    var max = 0;
    array.forEach(function(entry) {
        parseInt(entry) > max ? max = parseInt(entry) : "";
    });
    res.json({
        "answer": max
    });
});
app.post('/isOneEven', function(req, res) {
    var array = req.body['array[]'];
    var isEven = false;
    array.forEach(function(entry) {
        parseInt(entry) % 2 == 0 ? isEven = true : "";
    });
    res.json({
        "answer": isEven
    });
});
app.post('/isAllEven', function(req, res) {
    var array = req.body['array[]'];
    var isAllEven = true;
    array.forEach(function(entry) {
        parseInt(entry) % 2 != 0 ? isAllEven = false : "";
    });
    console.log(isAllEven);
    res.json({
        "answer": isAllEven
    });
});
app.post('/contains', function(req, res) {
    var array = req.body['array[]'];
    var contains = false;
    array.forEach(function(entry) {
        entry == 'search' ? contains = true : "";
    });
    res.json({
        "answer": contains
    });
});
app.post('/containsTwice', function(req, res) {
    var array = req.body['array[]'];
    var count = 0;
    array.forEach(function(entry) {
        entry == 'search' ? count++ : "";
    });
    count == 2 ? answer = true : answer = false;
    res.json({
        "answer": answer
    });
});
require('./routes/index')(app);
app.listen(3000);
console.log("Server listening on port 3000");