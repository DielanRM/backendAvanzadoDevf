import mongoose from "mongoose";
/**
 * 1.- crear un schema (esqueleto)
 * 2.- crear un modelo, asaignando un nombre
 */

const carSchema = new mongoose.Schema({
    //Campo -> tipo de dato
    plate: {
        type: String,
        required: true
    },
    model: String,
    brand: String,
    version: String,
    color: String,
    carType: String,
    vin: String,
});

//Nota: el nombre tiene que tener la primera letra debe ser mayuscula y tiene que estar en singular
// const Car = mongoose.model('Car', carSchema);

export default mongoose.model('Car', carSchema);