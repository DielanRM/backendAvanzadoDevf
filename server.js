/*  TODO PARA CREAR UNA APP EN EXPRESS

    1.- importar express
    2.- crear app con express
    3.- usar app.listen para abrir puertos */

//1
import express from 'express';
import { connect } from './config.js';
import carRoutes from './routes/carRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

//2
const api = express();
api.use(express.json());

connect();
//3
api.listen(8000, ()=>{
    console.log('api corriendo en puerto 8000');
});

//string nombre de la ruta
api.get('/test',(req, res)=>{
    res.send('Hola esto es una prueba');
});

api.use('/cars', carRoutes);
api.use('/books', bookRoutes);