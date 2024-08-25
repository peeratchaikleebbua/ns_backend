import { Injectable } from '@nestjs/common';
import { CreatePermutationDto } from './dto/create-permutation.dto';
import { UpdatePermutationDto } from './dto/update-permutation.dto';

@Injectable()
export class PermutationsService {
  generatePermutationMethodTwo(str: string): string[] {
    // BASE CASE to return in case there is only one string
    if (str.length <= 1) {
      return [str];
    }

    const permutations: Set<string> = new Set();

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const remainingString = str.slice(0, i) + str.slice(i + 1);
      // for example 'abc'

      // i = 0, char = "a", remainingString = "bc"
      // .. ..
      const remainingPermutations =
        this.generatePermutationMethodTwo(remainingString);
      // receive ["bc"]

      for (const perm of remainingPermutations) {
        // combine "a" + "bc" => "abc"
        permutations.add(char + perm);
      }
    }

    const permutaionArray = Array.from(permutations);

    return permutaionArray;
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
