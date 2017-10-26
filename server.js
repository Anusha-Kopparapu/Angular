

/*var express =require ('express');
var app = express();


app.use(express.static(__dirname+"/angular-layout"));
app.listen(process.env.PORT||3000);
console.log('server is runnig on 3000');
*/

var port = process.env.PORT || 8080;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on 8080...');
});


