import Car from '../models/Car.js'

//Create
const createCar = async (req, res) => {
   
    /*     brand: 'Nissan',
    //     carType: 'Sedan',
    //     color: 'Red',
    //     model: 'Tsuru',
    //     plate: '123-ABC',
    //     vin: '981y29e8uh129uher',
    //     version: 'GSR 2000',
    */  

   const newCar = await Car.create(req.body);
   res.json(newCar);
};

//Read
//Get all cars
const getAllcars = async (req, res)=>{
   const cars = await Car.find();
   res.json(cars);
};

//get car by id
const getCarById = async (req, res)=>{
    const car = await Car.findById(req.params.carId);
    res.json(car);
};
//Update

//Delete

export { createCar, getAllcars, getCarById };