const {Service, Car} = require("../models/car.model");


module.exports.getAllServices = (response) => {
    Service.find()
        .then(services => response.json(services))
        .catch(err =>  response.json(err))
}

module.exports.getOneService = (request,response) => {
    Service.findOne({_id:request.params.id})    
        .then(service => response.json(service))
        .catch(err => response.json(err))
}

module.exports.addServiceToCar = (request, res) => {
    Car.findByIdAndUpdate(request.params.id, { $push: { services: request.body }} )
        .then(response => res.json({ message: "success", data: response}))
        .catch(err => res.json({ message: "error", error: err}))
}