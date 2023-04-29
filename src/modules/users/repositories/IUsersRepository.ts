import { Users } from '@prisma/client';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO copy';

interface IUsersRepository {
  findAll(): Promise<Users[]>;
  findByEmail(email: string): Promise<Users | null>;
  findById(id: string): Promise<Users | null>;
  create(data: ICreateUserDTO): Promise<Users>;
  update(id: string, data: IUpdateUserDTO): Promise<Users>;
  delete(id: string): Promise<Users>;
}

export default IUsersRepository;
