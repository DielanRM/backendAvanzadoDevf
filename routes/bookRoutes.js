import express from 'express';
import { createBook, getBookById, getAllBooks } from '../controllers/bookController.js';

const bookRoutes = express.Router();

//TODO: CREATE BOOK
bookRoutes.post('/', createBook);

//TODO: GET BOOK BY ID
bookRoutes.get('/:bookId', getBookById);

//TODO: GET ALL BOOKS
bookRoutes.get('/', getAllBooks);

export default bookRoutes;