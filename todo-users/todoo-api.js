const express = require ('express');
const fs = require('fs');

const app=express();
app.use(express.json())
let users=JSON.parse(fs.readFileSync("users.json",'utf-8'));

app.get('/users',function(req,res){
    res.json(users);
});

app.post('/users',function(req,res){
    let id =Math.floor(Math.random()*1000);
    let name=req.body.name;
    let age=req.body.age;
    users.push({name:name,age:age,id:id});
    fs.writeFileSync('users.json',JSON.stringify(users));
    res.json({message: "user added!",user:{name,age}});

});

app.delete('/delete/user/:id',function(req,res){
    let number=Number(req.params.id);
    users=users.filter(function(user){
        return user.id !==number;
    });
    fs.writeFileSync('users.json',JSON.stringify(users));
    res.json({message:"user with "+number+" is deleted"})

});

app.listen(3000);
console.log("running fine");



//1. get name from body 
//2.get age from body
//3. push to users array 
//4. sends response 