const express = require('express');
require('dotenv').config(); // to read the .env file, as git ingores .env file
const cors = require("cors");
const app = express();
const driverController = require('./Controller/driverController');

app.use(express.json())
app.use(cors())

app.get('/drivers',driverController.allDrivers );
app.post('/driver/register',driverController.registerDriver);
app.put('/driver/update/:driverId', driverController.updateDriver)
app.delete('/driver/delete/:driverId', driverController.deleteDriver)

app.listen(5000, () => {
    console.log("App is running on port 5000")
})
