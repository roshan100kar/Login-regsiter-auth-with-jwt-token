require("dotenv").config()
const express = require('express')

const app = express();

app.get("/", (req, res)=> {
    res.send("<h1>Hello Form auth system - LCO</h1>")
})

module.exports = app;

