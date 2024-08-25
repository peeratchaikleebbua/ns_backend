import { Injectable } from '@nestjs/common';
import { CreateOddIntDto } from './dto/create-odd-int.dto';
import { UpdateOddIntDto } from './dto/update-odd-int.dto';

@Injectable()
export class OddIntService {
  findOddIntMethodTwo(intList: number[]): number {
    // create a list to contain number
    const uniqueNumbers: number[] = [];

    for (const num of intList) {
      // find the number in the list
      const index = uniqueNumbers.indexOf(num);
      if (index === -1) {
        // if not found, add this number
        // this will be responsible for checking odd times
        uniqueNumbers.push(num);
      } else {
        // if found, remove this number from the list
        // this will ensure, that there is no even times
        uniqueNumbers.splice(index, 1);
      }
    }

    return uniqueNumbers[0];
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
