// import express library
const express = require('express')
//create express server 
const app = express();

const apiRouter = require('./routes');





const PORT = 5001;
app.listen(PORT, console.log(`Server started on ${PORT}`));
