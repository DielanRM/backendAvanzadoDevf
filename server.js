/*  TODO PARA CREAR UNA APP EN EXPRESS

    1.- importar express
    2.- crear app con express
    3.- usar app.listen para abrir puertos */

//1
import express from 'express';
import { connect } from './config.js';

//2
const api = express();

connect();
//3
api.listen(8000, ()=>{
    console.log('api corriendo en puerto 8000');
});

