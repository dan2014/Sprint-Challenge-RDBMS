const express = require('express');
const dbProjects = require("./dbProjects");
const dbActions = require("./dbActions");

const server = express();


server.use(express.json());

server.get("/", (req, res) => {
  res.send("Project Tracker API is up");
})

server.get('/api/projects', async (req,res) => {
  try{
    const response = await dbProjects.get()
      console.log("response",response);
      res.status(200).json(response);
  } catch(err){
      console.log(err);
      res.status(500).send(err);
  }
})


server.get('/api/projects/:id', async (req,res) => {
  const id = req.params.id;
  try{
    let response = await dbProjects.getID(id)
      if(response){
        res.status(200).json(response);
        
      } else {
        res.status(404).send(`ID:${id} was not found`);
      }
  } catch(err){
      console.log(err);
      res.status(500).send(err);
  }
})

server.get('/api/actions', async (req,res) => {
    try{
      const response = await dbActions.get()
        console.log("response",response);
        res.status(200).json(response);
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
  })

server.post('/api/projects', async (req,res) => {
    //{"name":"name","description":"description","completed":"completed"}
  try{
    const response = await dbProjects.insert(req.body)
      console.log(response);
      res.status(201).json(response)
  } catch(err){
      console.log(err);
      res.status(500).send(err);
  }
})

server.post('/api/actions', async (req,res) => {
    //{"projectID","description":"description","notes":"notes","completed":"completed"}
    try{
      const response = await dbActions.insert(req.body)
        console.log(response);
        res.status(201).json(response)
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
  })



server.delete('/api/projects/:id', async (req,res) => {
    const id = req.params.id;
  try{
    const response = await dbProjects.delete({"id":id});
    console.log(response);
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

// {
// 	"name":"Data Collab",
// 	"description":"Crowd source data annotations for ML",
// 	"completed":true
// }

// {
// 	"projectID":1,
// 	"description":"Create React App",
// 	"notes":"Use yarn create react-app and remove some of the boilerplate code used in create-react-app.",
// 	"completed":true
// }