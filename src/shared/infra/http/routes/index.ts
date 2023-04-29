import { Router } from 'express';

// Users
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import booksRoutes from '@modules/books/infra/http/routes/books.routes';

const routes = Router();

// Users
routes.use('/users', usersRoutes);
routes.use('/book', booksRoutes);

export default routes;
