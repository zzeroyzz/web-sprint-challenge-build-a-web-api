const express = require('express');

const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/projects',(req,res) =>{
    Projects.get(req.query)
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the projects'
        })
    })
})
router.get('/projects/:id',(req,res) =>{
    Projects.get(req.params.id)
    .then(projects =>{
        if(project){
            res.status(200).json(project)
        }else{
            res.status(404).json({message: 'Project not found'})
        }
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error retrieving the projects'
        })
    })
})
router.post('/projects',(req,res) =>{
    Projects.insert(req.body)
    .then(project =>{
        res.status(201).json(project)
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error adding project'
        })
    })
})
router.put('/projects/:id',(req,res) =>{
    Projects.update(req.params.id, req.body)
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error updating the project'
        })
    })
})
router.delete('/projects/:id',(req,res) =>{
    Projects.remove(req.params.id)
    .then(() =>{
        res.status(201).json({message:"Project has been eliminated"})
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error eliminating project'
        })
    })
})
router.get('/projects/:id/actions',(req,res) =>{
    Projects.getProjectActions(req.params.id)
    .then(pactions =>{
        res.status(200).json(pactions)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message:`Error getting for the project ${error.message}`
        })
    })
})

router.use((err,req,res)=>{
    res.status(500).json({
      message:"Something died",
      error:err.message
    })
  })

  module.exports = router;
