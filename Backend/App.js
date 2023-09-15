const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error');

app.use(express.json())
// Route Import
const products = require("./Routs/ProdectRout"); 
app.use("/api/v1",products);

// middleware error
app.use(errorMiddleware)
module.exports = app;