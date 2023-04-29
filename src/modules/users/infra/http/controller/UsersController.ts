import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';
import ReadAllUsersService from '@modules/users/services/ReadAllUsersService';

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
    } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: passwordd, ...userWithoutPassword } = user;

    const userWhithoutPassword2 = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return res.status(201).json(userWhithoutPassword2);
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
