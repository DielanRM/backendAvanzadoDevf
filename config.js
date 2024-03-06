import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {

    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;

    //
    connection.once('open', ()=>{
        console.log('Conexion exitosa a base de datos');
    })

    connection.once('error', ()=>{
        console.error('error al conectarse a la DB')
    })
};

export { connect };

