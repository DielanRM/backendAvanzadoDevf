import mongoose from "mongoose";
import { authorSchema } from "./Author.js";
/**
 * 1.-Schema
 * 2.-Ponerle nombre
 */

const bookSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    isbn: String,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    }],
});

export default mongoose.model('Book', bookSchema);gi