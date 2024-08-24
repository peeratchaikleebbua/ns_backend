import { Injectable } from '@nestjs/common';
import { CreatePermutationDto } from './dto/create-permutation.dto';
import { UpdatePermutationDto } from './dto/update-permutation.dto';

@Injectable()
export class PermutationsService {

  generatePermutations(input: string): string[] {
    const permute = (str: string, l: number, r: number, result: Set<string>) => {
      if (l === r) {
        result.add(str);
      } else {
        for (let i = l; i <= r; i++) {
          str = this.swap(str, l, i);
          permute(str, l + 1, r, result);
          str = this.swap(str, l, i);
        }
      }
    };

    const result = new Set<string>();
    permute(input, 0, input.length - 1, result);
    return Array.from(result).sort();
  }

  private swap(str: string, i: number, j: number): string {
    const charArray = str.split('');
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
  }

  create(createPermutationDto: CreatePermutationDto) {
    return 'This action adds a new permutation';
  }

  findAll() {
    return `This action returns all permutations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permutation`;
  }

  update(id: number, updatePermutationDto: UpdatePermutationDto) {
    return `This action updates a #${id} permutation`;
  }

  remove(id: number) {
    return `This action removes a #${id} permutation`;
  }
}
