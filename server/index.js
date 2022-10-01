import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json({limit:"30mb" , extended : true}));
app.use(bodyParser.json({limit:"30mb" , extended : true}));
app.use(cors());

app.get("/" , (req,res) =>{
    res.send("FullstackBlog.");
});

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://alimert:<password>@cluster0.w1jazfn.mongodb.net/?retryWrites=true&w=majority"

mongoose
.connect(CONNECTION_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    app.listen(PORT , () =>{
        console.log("Server is running on porttt:")
    })
})