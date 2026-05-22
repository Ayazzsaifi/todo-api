// Todo API - CRUD operations

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let todos=[];

app.get('/todos',function(req,res){
    res.json(todos);
});

app.post('/todos',function(req,res){
    let todo = req.body;
    todos.push(todo);
    res.json({
        message:"Todo added!",
        todo:todo
    });
});

app.delete('/todos/:id',function(req,res){
    let id = req.params.id;
    todos.splice(id,1);
    res.json({
        message:"Todo delected!"
    });
});

app.put('/todos/:id',function(req,res){
    let id= req.params.id;
    let updatedTodo =req.body;
    todos[id]=updatedTodo;
    res.json({
        message:"Todo updated!",
        todo: updatedTodo
    });
});

app.listen(3000);
console.log("Todo API running on port 3000");