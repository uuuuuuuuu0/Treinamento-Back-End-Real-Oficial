import { Router } from 'express';
import BookController from '../controller/BooksController';

const booksRoutes = Router();

const bookController = new BookController();

booksRoutes.post('/register', bookController.create);
booksRoutes.patch('/update/:id', bookController.update);
booksRoutes.delete('/delete/:id', bookController.delete);
booksRoutes.get('/read', bookController.read);

export default booksRoutes;
