const express = require('express');
const dbProjects = require("./dbProjects");
const dbActions = require("./dbActions");

const server = express();


server.use(express.json());

server.get("/", (req, res) => {
  res.send("Cohort API is up");
})

server.get('/api/cohort', async (req,res) => {
  try{
    const response = await dbFuncs.get()
      console.log("response",response);
      res.status(200).json(response);
  } catch(err){
      console.log(err);
      res.status(500).send("error",err);
  }
})


server.get('/api/cohort/:id', async (req,res) => {
  const id = req.params.id;
  try{
    const response = await dbFuncs.getID(id)
      console.log(response);
      if(response){
        res.status(200).json(response);
      } else {
        res.status(404).send(`ID:${id} was not found`);
      }
  } catch(err){
      console.log(err);
      res.status(500).send("error",err);
  }
})

server.get('/api/cohort/:id/students', async (req,res) => {
    const id = req.params.id;
    try{
      const response = await dbFuncs.getStudents(id)
        console.log(response);
        if(response){
          res.status(200).json(response);
        } else {
          res.status(404).send(`ID:${id} was not found`);
        }
    } catch(err){
        console.log(err);
        res.status(500).send("error",err);
    }
  })

server.post('/api/cohort', async (req,res) => {
  try{
    const response = await dbFuncs.insert(req.body)
      console.log(response);
      res.status(201).json(response)
  } catch(err){
      console.log(err);
      res.status(500).send(err);
  }
})

server.put('/api/cohort/:id', async (req,res) => {
const id = req.params.id;
const {name} = req.body;
  try{
      const response = await dbFuncs.update(id,name);
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

server.delete('/api/cohort/:id', async (req,res) => {
    const id = req.params.id;
  try{
    const response = await dbFuncs.delete({"id":id});
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
