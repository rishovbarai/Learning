const httpStatus = require("http-status")
const driverServices = require("../services/driverServices")

const registerDriver = async (req, res) => {
    const driverData = req.body
    try {
        await driverServices.saveDriver(driverData)
        res.status(httpStatus.CREATED).json({ message: "Data Created" });
    }
    catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({ message: `${error}` });
        console.log(error)

    }
}
const allDrivers = async (req, res) => {
    try {
        const allDrivers = driverServices.getAllDrivers();
        res.json(allDrivers)
    }
    catch (error) {
        res.status(httpStatus[500]).json({ message: `${error}` })
    }
}
const updateDriver = async (req, res) => {
    const driverId = req.params.driverId
    const updateData = req.body
    try {
        const updateDriverDetails = await driverServices.updateDriverData(driverId, updateData)
        res.status(httpStatus.OK).json({ message: 'Driver updated successfully', data: updateDriverDetails })
    }
    catch (error) {
        if (error.message == 'Driver not found') {
            res.status(httpStatus.NOT_FOUND).json({ message: `${error.message}` })
        }
        res.status(httpStatus.BAD_REQUEST).json({ message: `${error.message}` })
    }
}
const deleteDriver = async (req, res) => {
    const driverId = req.params.driverId;
    try {
        await driverServices.deleteDriverById(driverId)
        res.status(httpStatus.OK).json({ message: 'driver data deleted' })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({ message: `${error.message}` })
    }

}

module.exports = { registerDriver, allDrivers, updateDriver,deleteDriver }