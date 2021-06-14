const express = require('express');

const Actions = require('./actions-model.js');
const router = express.Router();

router.get('/',(req,res) =>{
    Actions.get(req.query)
    .then(action =>{
        res.status(200).json(action)
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error retrieving actions'
        })
    })
})
router.get('/:id',(req,res) =>{
    Actions.get(req.params.id)
    .then(action =>{
        if(action){
            res.status(200).json(action)
        }else{
            res.status(404).json({message: 'Action not found'})
        }
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error retrieving actions'
        })
    })
})
router.post('/',(req,res) =>{
    Actions.insert(req.body)
    .then(action =>{
        res.status(201).json(action)
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error adding action'
        })
    })
})
router.put('/:id',(req,res) =>{
    Actions.update(req.params.id, req.body)
    .then(action =>{
        res.status(200).json(action)
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:'Error updating actions'
        })
    })
})
router.delete('/:id',(req,res) =>{
    Actions.remove(req.params.id, req.body)
    .then(() =>{
        res.status(201).json({message:"The action has been eliminated"})
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({
            message:"Error eliminating the action"
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