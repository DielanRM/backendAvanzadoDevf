import express from 'express';
import { createBook } from '../controllers/bookController.js';

const bookRoutes = express.Router();

//TODO: CREATE BOOK
bookRoutes.post('/', createBook);
//TODO: GET BOOK BY ID

//TODO: GET ALL BOOKS

export default bookRoutes;