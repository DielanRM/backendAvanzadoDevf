import express from 'express';
import { createCar, getAllcars, getCarById, updateCar, deleteCar } from '../controllers/carController.js';


const carRoutes = express.Router();

carRoutes.post('/cars', createCar);
carRoutes.get('/cars', getAllcars);
carRoutes.get('/cars/:carId', getCarById);
carRoutes.put('/cars/:carId', updateCar);
carRoutes.delete('/cars/:carId', deleteCar);

export default carRoutes;