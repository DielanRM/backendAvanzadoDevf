import Book from '../models/Book.js';
import Author from '../models/Author.js';
import mongoose from 'mongoose';

const createBook = async (req, res) => {
    try {
        /**req.body
 * authors []
 * book
 * 
 * PASOS
 * 1.- Crear autores
 * 2.-Crear libro 
*/
        let authorsData = req.body.authors;
        const bookData = req.body.book;

        if (!authorsData || !bookData) {
            res.status(400).json({
                msg: 'authorsData or bookData missing', error
            });
        }

        if (!Array.isArray(authorsData)) {
            res.status(400).json({
                msg: 'authorsData must be an array', error
            });
        }

        //CREAR Autores
        // convertir un arreglo de objetos a uno de esquemas? [objetos] -> [schemas]
        authorsData = authorsData.map((author) => {
            return new Author(author);
        });


        //Crear llibro con autores de arriba

        const newBook = await Book.create({
            genre: bookData.genre,
            isbn: bookData.isbn,
            title: bookData.title,
            year: bookData.year,
            authors: authorsData,
        });
        res.json(newBook);

    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear book',
            error,
        });
    }
};

export { createBook };