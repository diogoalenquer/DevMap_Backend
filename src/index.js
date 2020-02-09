const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-82zr4.mongodb.net/devmapd?retryWrites=true&w=majority', 
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(express.json());
app.use(routes);


app.listen(3333);