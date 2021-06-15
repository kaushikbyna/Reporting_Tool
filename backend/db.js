const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/node",{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=> console.log("connection  Successfully"))
.catch((err)=> console.log(err));
