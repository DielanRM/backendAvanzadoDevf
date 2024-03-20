import express from 'express';
import { createCar, getAllcars, getCarById, updateCar, deleteCar } from '../controllers/carController.js';
import { authValidator } from '../middlewares/authValidator.js';


const carRoutes = express.Router();


carRoutes.post('/', createCar);
carRoutes.get('/',authValidator, getAllcars);
carRoutes.get('/:carId', getCarById);
carRoutes.put('/:carId', updateCar);
carRoutes.delete('/:carId', deleteCar);

export default carRoutes;