const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const connectDB = async ()=> {


try{
 await mongoose.connect("mongodb+srv://devops:devops@niteshdb.cublw.mongodb.net/?retryWrites=true&w=majority&appName=niteshdb")
console.log("mongodb connected")
}
catch(error){
    console.error("mongodb connection failed",error)
}
}
app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello from express server*"})
})

connectDB()
const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})

// app.use()