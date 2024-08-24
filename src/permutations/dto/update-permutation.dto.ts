import { PartialType } from '@nestjs/mapped-types';
import { CreatePermutationDto } from './create-permutation.dto';

export class UpdatePermutationDto extends PartialType(CreatePermutationDto) {}
