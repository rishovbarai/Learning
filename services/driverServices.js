const { connectionDB } = require("../config/db");
const { Driver } = require("../models/driverModels");
connectionDB();

const validateDriverDataRequiredField = (driverData) => {
    const requiredFields = ["name", "email", "car_number", "lience_number", "phone_number"];
    const missingFields = requiredFields.filter((fieldName) => !Object.keys(driverData).includes(fieldName))
    if (missingFields.length) {
        throw new Error("MissingField")
    }
};
const saveDriver = async (driverData) => {
    validateDriverDataRequiredField(driverData)
    try {
        const existingDriverData = await Driver.findOne({
            $or: [
                { email: driverData.email },
                { phone_number: driverData.phone_number },
                { name: driverData.name },
                { car_number: driverData.car_number },
                { lience_number: driverData.lience_number }
            ]
        }
        );
        if (existingDriverData) {
            throw new Error("duplicate drive found")
        }
        await new Driver(driverData).save()
        return { message: "created" }

    }
    catch (error) {
        if (error.message == "duplicate drive found") throw new Error("duplicate Driver")
        else {
            return { message: "Internal server Error" }
        }
    }
}
const getAllDrivers = async () => {
    try {
        return await Driver.find({})
    }
    catch (error) {
        throw new Error("Error fetching data");
    }
}

const updateDriverData = async (driverId, driverUpdateData) => {
    validateDriverDataRequiredField(driverUpdateData)
    try {
        const driver = await Driver.updateOne({ _id: driverId }, { $set: driverUpdateData });
        if (!driver.matchedCount) {
            throw new Error("Driver not found");
        }
        console.log(driver.matchedCount)
        return driver;
    }
    catch (error) { 
        if(error.message == 'Driver not found')
            throw new Error('Driver not found')
        else{
            throw new Error("Error updating data");
        }
     }
}
const deleteDriverById = async (driverId) =>{
    try{    
        return await Driver.deleteOne({ _id: driverId })  
     }
    catch(error){ throw new Error("Error deleting data") }

}

module.exports = { saveDriver, getAllDrivers, updateDriverData,deleteDriverById }

