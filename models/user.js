import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    password:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    rol:{
        type: String,
        require: true,
        enum: ['ADMIN', 'CLIENT'],
        default: 'CLIENT',
    }
})

export default mongoose.model('user', userSchema);