const express = require('express');
require('dotenv').config(); // to read the .env file, as git ingores .env file
const cors = require("cors");
const app = express();
const httpStatus = require("http-status")

const {saveDriver} =  require("./services/driverServices")

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {res.json() });
app.post('/driver/register',async (req,res)=>{
    const driverData = req.body
    try{
        await saveDriver(driverData)
        res.status(httpStatus.CREATED).json({ message: "Data Created" });
    } 
    catch(error){
        res.status(httpStatus.BAD_REQUEST).json({ message: "Bad request" });
        console.log(error)
    }
})

app.listen(5000, () => {
    console.log("App is running on port 5000")
})
