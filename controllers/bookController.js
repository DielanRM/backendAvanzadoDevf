import Book from '../models/Book.js';
import Author from '../models/Author.js';

const createBook = async (req, res)=> {
    //1.- Registrar Authors en DB 
    //2.- Registrar Book con esos Authors
    
    try {
        const {authors, book} = req.body;

        if(!Array.isArray(authors) ||  !book){
            return res.status(400).json({
                msg: 'Body incorrecto'});
        }

        //[objetos] -> [promesas] convertir arreglo de objetos a uno de promesas
        const authorPromises = authors.map((element)=>{
            return Author.create(element);
        });
        
        const authorModels = await Promise.all(authorPromises);

        //[models] -> [ids]
        const authorIds = authorModels.map((model)=>{
            return model.id
        })

        book.authors = authorIds
        const newBook = await Book.create(book);

        return res.json(newBook);

    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear book', error,
        });
    }
}

// const createBook = async (req, res) => {
//     try {
//         /**req.body
//  * authors []
//  * book
//  * 
//  * PASOS
//  * 1.- Crear autores
//  * 2.-Crear libro 
// */
//         let authorsData = req.body.authors;
//         const bookData = req.body.book;

//         if (!authorsData || !bookData) {
//             res.status(400).json({
//                 msg: 'authorsData or bookData missing', error
//             });
//         }

//         if (!Array.isArray(authorsData)) {
//             res.status(400).json({
//                 msg: 'authorsData must be an array', error
//             });
//         }

//         //CREAR Autores
//         // convertir un arreglo de objetos a uno de esquemas? [objetos] -> [schemas]
//         authorsData = authorsData.map((author) => {
//             return new Author(author);
//         });


//         //Crear llibro con autores de arriba

//         const newBook = await Book.create({
//             genre: bookData.genre,
//             isbn: bookData.isbn,
//             title: bookData.title,
//             year: bookData.year,
//             authors: authorsData,
//         });
//         res.json(newBook);

//     } catch (error) {
//         res.status(500).json({
//             msg: 'Error al crear book',
//             error,
//         });
//     }
// };


const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId).populate('authors');

        if (!book) {
            return res.status(404).json({
                msg: 'libro no encontrado',
            });
        }

        //Responder el al libro
        return res.json(book);

    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar libro por Id', error })
    }
    //Buscar un libro por el Id
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        if (!books) {
            return res.status(404).json({
                msg: 'Libros no encontrados',
            });
        }
        return res.json(books);

    } catch (error) {
        res.status(500).json({
            msg: 'Error al buscar todos los libros', error
        })
    }
}

export { createBook, getBookById, getAllBooks };