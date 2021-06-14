const express = require('express');
const server = express();
const morgan = require("morgan")
const helmet = require("helmet")

const actionsRouter = require('./actions/actions-router.js')
const projectsRouter = require('./projects/projects-router.js')
// Configure your server here
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())

server.use('/api/actions',actionsRouter);
server.use('api/projects', projectsRouter)

server.get('/',(req,res) =>{
    res.send(`
        <h2>Welcome to Projects API<h2>
    `)
})

module.exports = server;
