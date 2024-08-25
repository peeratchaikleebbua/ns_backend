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
import { SmileFaceService } from './smile-face.service';
import { CreateSmileFaceDto } from './dto/create-smile-face.dto';
import { UpdateSmileFaceDto } from './dto/update-smile-face.dto';

@Controller('smile-face')
export class SmileFaceController {
  constructor(private readonly smileFaceService: SmileFaceService) {}

  @Post()
  create(@Body() createSmileFaceDto: CreateSmileFaceDto) {
    return this.smileFaceService.create(createSmileFaceDto);
  }

  @Get("methodTwo")
  countSmileFacesMethodTwo(@Query('faces') faces: string): number {
    const faceList = faces.split(',');
    return this.smileFaceService.countSmileFacesMethodTwo(faceList);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smileFaceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSmileFaceDto: UpdateSmileFaceDto,
  ) {
    return this.smileFaceService.update(+id, updateSmileFaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smileFaceService.remove(+id);
  }
}
