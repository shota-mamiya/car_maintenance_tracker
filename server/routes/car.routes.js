const CarController = require('../controllers/car.controller');
const ServiceController = require('../controllers/Service.controller');
module.exports = function (app) {

    app.post('/api/car', CarController.createCar);
    app.get('/api/car', CarController.getAllCars);
    app.get('/api/car/service', ServiceController.getAllServices);
    app.get('/api/car/:id', CarController.getSingleCar);
    app.delete('/api/car/:id', CarController.deleteCar);
    
    app.put('/api/car/service/:id', ServiceController.addServiceToCar);
    app.get('/api/car/service/:id', ServiceController.getOneService);
}