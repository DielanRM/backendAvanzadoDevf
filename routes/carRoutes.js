import express from 'express';
import { createCar, getAllcars, getCarById } from '../controllers/carController.js';


const carRoutes = express.Router();

carRoutes.post('/cars', createCar);
carRoutes.get('/cars', getAllcars);
carRoutes.get('/cars/:carId', getCarById);
export default carRoutes;