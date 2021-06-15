require("./db");
const express = require('express');
const bodyParser = require("body-parser");
var app = express();
var messageRoute = require('./controller/messageController');
const cors = require('cors');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))
// app.use(bodyParser.urlencoded({ extended:false }))
app.listen(4000,()=>console.log('Server Started at : 4000'))

app.use('/postMessages',messageRoute);
