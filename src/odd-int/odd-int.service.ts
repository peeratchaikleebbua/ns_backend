import { Injectable } from '@nestjs/common';
import { CreateOddIntDto } from './dto/create-odd-int.dto';
import { UpdateOddIntDto } from './dto/update-odd-int.dto';

@Injectable()
export class OddIntService {
  findOddInt(intList: number[]): number {
    return intList.reduce((acc, curr) => acc ^ curr, 0);
  }

  create(createOddIntDto: CreateOddIntDto) {
    return 'This action adds a new oddInt';
  }

  findAll() {
    return `This action returns all oddInt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oddInt`;
  }

  update(id: number, updateOddIntDto: UpdateOddIntDto) {
    return `This action updates a #${id} oddInt`;
  }

  remove(id: number) {
    return `This action removes a #${id} oddInt`;
  }
}
