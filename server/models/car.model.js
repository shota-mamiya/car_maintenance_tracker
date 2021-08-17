// const { Service } = require("../models/service.model");

const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({

    serviceDate: {
        type: Date,
        default: new Date()
    },
    
    serviceDetails: {
        type: String
    },

    cost: {
        type: Number
    },

    mileage: {
        type: Number
    },

});

const CarSchema = new mongoose.Schema({
    carYear: {
        type: Number
    },

    carMake: {
        type: String
    },

    carModel: {
        type: String
    },

    carMileage: {
        type: Number
    },

    services: [ServiceSchema]

}, { timestamps: true});



module.exports.Service = mongoose.model('Service', ServiceSchema);
module.exports.Car = mongoose.model('Car', CarSchema);