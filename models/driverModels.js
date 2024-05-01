const mongoose = require("mongoose")

const DriverSchema = new mongoose.Schema({
email:{type:String,required:true,unique: true },
name:{type:String,required:true,unique: true },
car_number:{type:Number,required:true,unique: true },
lience_number:{type:Number,required:true,unique: true },
phone_number:{type:Number,required:true,unique: true }
})

const Driver = mongoose.model("Driver",DriverSchema)

module.exports = {Driver}