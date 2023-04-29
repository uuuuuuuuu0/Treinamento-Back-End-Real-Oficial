import { inject, injectable } from 'tsyringe';

import { Users } from '@prisma/client';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
}

@injectable()
export default class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<Users> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError('User with this id does not exist');
    }

    const deletedUser = await this.usersRepository.delete(id);

    return deletedUser;
  }
}
