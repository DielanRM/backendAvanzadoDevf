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
const updateCar = async (req, res)=>{
    //const carId = req.params.carId (la linea de abajo es lo mismo que esta, pero deconstruida)
    const {carId} = req.params;

    //1.- filtro de busqueda   2.- nuevos campos
    const updateCar = await Car.updateOne({ _id: carId }, req.body);
    res.json(updateCar);

    //const newCar = await Car.findByIdAndUpdate(req.params.carId, rreq.body) es lo mismo que la funcion anterior pero en una sola linea
};


//Delete
const deleteCar = async (req, res)=>{
    const deletedCar = await Car.findByIdAndDelete(req.params.carId);
    res.json(deletedCar);
}

export { createCar, getAllcars, getCarById,
updateCar, deleteCar };