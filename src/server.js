let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();
var publicDir = path.resolve(__dirname, '../public');
app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', function(req, res){
    res.sendFile(publicDir + "/index.html");
});

app.get('/test', function(req, res){
    res.send("Successful Api Test");
});

app.listen(9000, function(){
    console.log("listening to this joint on port 9000");
});