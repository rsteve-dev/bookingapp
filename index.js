import express from "express"
import dotenv from "dotenv"
const app=express();
//dotenv configuration
dotenv.config();

//run the app
let listening_port=8800;
app.listen(listening_port,()=>{
    console.log(`connected to the backend : port: ,${listening_port}`)
})