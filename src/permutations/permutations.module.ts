import { Module } from '@nestjs/common';
import { PermutationsService } from './permutations.service';
import { PermutationsController } from './permutations.controller';

@Module({
  controllers: [PermutationsController],
  providers: [PermutationsService],
})
export class PermutationsModule {}
