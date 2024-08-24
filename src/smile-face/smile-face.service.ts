import { Injectable } from '@nestjs/common';
import { CreateSmileFaceDto } from './dto/create-smile-face.dto';
import { UpdateSmileFaceDto } from './dto/update-smile-face.dto';

@Injectable()
export class SmileFaceService {
  private smileFaceRegexPattern = /^[:;][-~]?[)D]$/;

  countSmileFaces(faceList: string[]): number {
    return faceList.filter((face) => this.smileFaceRegexPattern.test(face))
      .length;
  }

  private isValidSmileFace(face: string): boolean {
    const validEyes = [':', ';'];
    const validNoses = ['-', '~'];
    const validMouths = [')', 'D'];

    if (face.length === 2) {
      // In case Eyes + Mouth
      return validEyes.includes(face[0]) && validMouths.includes(face[1]);
    } else if (face.length === 3) {
      // In case Eyes + Nose + Mouth
      return (
        validEyes.includes(face[0]) &&
        validNoses.includes(face[1]) &&
        validMouths.includes(face[2])
      );
    }
    return false;
  }

  countSmileFacesMethodTwo(faceList: string[]): number {
    let countValidSmileFace = 0;

    for (const face of faceList) {
      if (this.isValidSmileFace(face)) {
        countValidSmileFace++;
      }
    }

    return countValidSmileFace
  }

  create(createSmileFaceDto: CreateSmileFaceDto) {
    return 'This action adds a new smileFace';
  }

  findAll() {
    return `This action returns all smileFace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smileFace`;
  }

  update(id: number, updateSmileFaceDto: UpdateSmileFaceDto) {
    return `This action updates a #${id} smileFace`;
  }

  remove(id: number) {
    return `This action removes a #${id} smileFace`;
  }
}
