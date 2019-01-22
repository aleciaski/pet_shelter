const express = require('express');
const routes = require('./server/routes');
const path = require('path');

const app = routes(express());
app.use(express.static(__dirname + "/client/dist/client"))
app.all("*", (req,res,next)=>{
    res.sendFile(path.resolve("./client/dist/client/index.html"))
})
app.listen(8000, errs=> errs?console.log(errs):console.log('listening on 8000'))