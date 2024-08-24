import { PartialType } from '@nestjs/mapped-types';
import { CreateSmileFaceDto } from './create-smile-face.dto';

export class UpdateSmileFaceDto extends PartialType(CreateSmileFaceDto) {}
