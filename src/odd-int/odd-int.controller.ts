import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OddIntService } from './odd-int.service';
import { CreateOddIntDto } from './dto/create-odd-int.dto';
import { UpdateOddIntDto } from './dto/update-odd-int.dto';

@Controller('odd-int')
export class OddIntController {
  constructor(private readonly oddIntService: OddIntService) {}

  @Post()
  create(@Body() createOddIntDto: CreateOddIntDto) {
    return this.oddIntService.create(createOddIntDto);
  }

  @Get()
  findOddInt(@Query('intList') intList: string): number {
    const numArray = intList.split(',').map(Number)
    return this.oddIntService.findOddInt(numArray);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oddIntService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOddIntDto: UpdateOddIntDto) {
    return this.oddIntService.update(+id, updateOddIntDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oddIntService.remove(+id);
  }
}
