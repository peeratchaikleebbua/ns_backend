import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PermutationsService } from './permutations.service';
import { CreatePermutationDto } from './dto/create-permutation.dto';
import { UpdatePermutationDto } from './dto/update-permutation.dto';

@Controller('permutations')
export class PermutationsController {
  constructor(private readonly permutationsService: PermutationsService) {}

  @Post()
  create(@Body() createPermutationDto: CreatePermutationDto) {
    return this.permutationsService.create(createPermutationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permutationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePermutationDto: UpdatePermutationDto,
  ) {
    return this.permutationsService.update(+id, updatePermutationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permutationsService.remove(+id);
  }
}
