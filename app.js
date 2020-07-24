

var express = require('express');
var app = express();
var port=process.env.port || 3000;
            
app.get('/', function (req, res) {
    res.send("Hello World!!")
});

app.listen(port, () => console.log("Server is running..on port " + port));
