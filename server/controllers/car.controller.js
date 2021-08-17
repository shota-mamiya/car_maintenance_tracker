const {Car} = require("../models/car.model");

module.exports.createCar = (request, response) => {
    const { carYear } = request.body;
    const { carMake } = request.body;
    const { carModel } = request.body;
    const { carMileage } = request.body;

    Car.create(request.body)
        .then(car => response.json(car))
        .catch(err => response.status(400).json(err));
} 

module.exports.getAllCars = (request,response) => {
    Car.find()
        .then(cars => response.json(cars))
        .catch(err => response.json(err))
}

module.exports.getSingleCar = (request,response) => {
    Car.findOne({_id:request.params.id})
        .then(car => response.json(car))
        .catch(err => response.json(err))
}

module.exports.deleteCar = (request,response) => {
    console.log(request.params.id)
    Car.deleteOne({_id: request.params.id })
        .then(deleteConfirmaiton => response.json(deleteConfirmaiton))
        .catch(err => response.json(err))
}

