const express = require('express');//mvc framework reference
const app =express();
const fs = require('fs');
const port =process.env.PORT || 8080;

app.listen(port,()=>{

    console.log('console listening on port %s',port);
});
//http://localhost:8080
app.get('/',(rwq,res)=>{

    res.sendFile(__dirname+'/login.html');
    });
//define routes(end points)
//http://localhost:8080/login
app.post('/login',(req,res)=>{
 res.end('login successful');

});

app.get('/getMovies',(req,res)=>{
var data =fs.readFileSync('./movies.json');
   // console.log(JSON.parse(data.toString()));
//res.json(['aveners','bodd','booss']);
var movies = JSON.parse(data).movies;
console.log(movies);
res.json(movies);
});