const express = require ('express');
const app=express();
app.use(express.json())
let users=[]

app.get('/users',function(req,res){
    res.json(users);
});

app.post('/users',function(req,res){
    let id =Math.floor(Math.random()*1000);
    let name=req.body.name;
    let age=req.body.age;
    users.push({name:name,age:age,id:id});
    res.json({message: "user added!",user:{name,age}});

});

app.delete('/delete/user/:id',function(req,res){
    let number=Number(req.params.id);
    users=users.filter(function(user){
        return user.id !==number;
    });
    res.json({message:"user with "+number+" is deleted"})

})

app.listen(3000);
console.log("running fine");



//1. get name from body 
//2.get age from body
//3. push to users array 
//4. sends response 