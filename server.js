var express = require('express');

var app = express();
//for security
app.disable('x-powered-by');

app.set("port", process.env.Port || 3000);

//set up handler bars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set("view engine", 'handlebars');

app.use(express.static(__dirname + "/public"));

//default rout, home
app.get('/',function(req,res){
    res.render('home');
});

app.get('/about',function(req,res){
    res.render('about');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.listen(app.get('port'), function(){
    console.log("node express started and listening at port " + app.get('port'));
});
