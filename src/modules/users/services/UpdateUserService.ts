import { inject, injectable } from 'tsyringe';

import { Users } from '@prisma/client';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({
    id, email, name,
  }: IRequest): Promise<Users> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError('User with this id does not exist');
    }

    const updatedUser = this.usersRepository.update(id, { name, email: email.toLowerCase() });

    return updatedUser;
  }
}
