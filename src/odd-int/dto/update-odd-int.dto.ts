import { PartialType } from '@nestjs/mapped-types';
import { CreateOddIntDto } from './create-odd-int.dto';

export class UpdateOddIntDto extends PartialType(CreateOddIntDto) {}
