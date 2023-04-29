import { Books } from '@prisma/client';
import ICreateBookDTO from '../dtos/ICreateBookDTO';
import IUpdateBookDTO from '../dtos/IUpdateBookDTO';

interface IBooksRepository {
  findById(id: string): Promise<Books | null>;
  findByName(name: string): Promise<Books | null>;
  create(data: ICreateBookDTO): Promise<Books>;
  update(id: string, data: IUpdateBookDTO): Promise<Books>;
  delete(id: string): Promise<Books>;
  readAll(): Promise<Books[]>;
}

export default IBooksRepository;
