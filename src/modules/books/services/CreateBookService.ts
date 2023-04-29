import { inject, injectable } from 'tsyringe';

import { Users } from '@prisma/client';

interface IRequest {
  name: string;
  author: string;
}

@injectable()
export default class CreateBookService {
  constructor(
    @inject('BooksRepository')
    private bookRepository: IBooksRepository,
  ) { }

  public async execute({ name, author }: IRequest): Promise<Users> {
    const book = this.bookRepository.create({
      name,
      author,
    });

    book.name

    return book;
  }
}
