const express = require('express');
const app = express();

// 서버시작
const server = app.listen(3000, function(){
    console.log('서버가 실행됩니다 .');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// url 매핑 
// loc
app.get('/', function(req, res){
    res.render('index.html');
});
