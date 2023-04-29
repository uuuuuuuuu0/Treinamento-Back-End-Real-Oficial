import prisma from '@shared/infra/prisma/client';
import { Prisma, Books } from '@prisma/client';

import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import ICreateBookDTO from '@modules/books/dtos/ICreateBookDTO';
import IUpdateBookDTO from '@modules/books/dtos/IUpdateBookDTO';

export default class BooksRepository implements IBooksRepository {
  private ormRepository: Prisma.BooksDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>

  constructor() {
    this.ormRepository = prisma.books;
  }

  public async findById(id: string): Promise<Books | null> {

  }

  public async findByName(name: string): Promise<Books | null> {
    throw new Error('Method not implemented.');
  }

  public async create(data: ICreateBookDTO): Promise<Books> {
    const book = await this.ormRepository.create({ data });

    return book;
  }

  public async update(id: string, data: IUpdateBookDTO): Promise<Books> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: string): Promise<Books> {
    throw new Error('Method not implemented.');
  }

  public async readAll(): Promise<Books[]> {
    const books = await this.ormRepository.findMany();

    return books;
  }
}
