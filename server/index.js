import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb" , extended : true}));
app.use(bodyParser.json({limit:"30mb" , extended : true}));
app.use(cors());

app.get("/" , (req,res) =>{
    res.json({
        author: "Ali Mert Yılmaz's Blog.." ,
        message: "I devoloping my blog website." , 
    });
});

const PORT = process.env.PORT || 5000;



mongoose
.connect(process.env.CONNECTION_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    app.listen(PORT , () =>{
        console.log(`Server is running on port : ${PORT}`);
    });
})
.catch((error) => {
    console.error(error.message);
});
