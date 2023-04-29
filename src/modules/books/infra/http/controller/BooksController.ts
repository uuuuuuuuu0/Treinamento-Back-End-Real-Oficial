import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBookService from '@modules/books/services/CreateBookService';

export default class BookController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      author,
    } = req.body;

    const createBook = container.resolve(CreateBookService);

    const book = await createBook.execute({
      name,
      author,
    });

    return res.status(201).json(book);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const {
      name,
      email,
    } = req.body;

    const updateUser = container.resolve(UpdateUserService);

    const updatedUser = await updateUser.execute({
      id,
      name,
      email,
    });

    const { password: _password, ...userWithoutPassword } = updatedUser;

    return res.status(201).json(userWithoutPassword);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUser = container.resolve(DeleteUserService);

    const deletedUser = await deleteUser.execute({
      id,
    });

    return res.status(201).json(deletedUser);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const readUsers = container.resolve(ReadAllUsersService);

    const users = await readUsers.execute();

    return res.status(201).json(users);
  }
}