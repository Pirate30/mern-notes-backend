const express = require("express");
const dotenv = require("dotenv");
const noteRoute = require("./routes/notes");

const app = express();
// env config
dotenv.config();

// mogoose config
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log("db connected"))
.catch((err)=>console.log(err));

// using json
app.use(express.json());

// note route
app.use("/api/note", noteRoute);

app.listen(8800, (req,res)=>{
    console.log("server is up");
});