# Todo CRUD API

A simple Todo CRUD API built with Express.js.

## Features

- Get all todos
- Add a todo
- Delete a todo
- JSON request handling
- Express server setup

## Tech Stack

- Node.js
- Express.js

## Routes

### Get all todos

GET /todos

### Add a todo

POST /todos

Body:

{
  "title": "Learn Express"
}

### Delete a todo

DELETE /delete/:id

Example:

DELETE /delete/123

## Run Locally

Install dependencies:

npm install

Start server:

node index.js

Server runs on:

http://localhost:3000