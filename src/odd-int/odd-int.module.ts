import { Module } from '@nestjs/common';
import { OddIntService } from './odd-int.service';
import { OddIntController } from './odd-int.controller';

@Module({
  controllers: [OddIntController],
  providers: [OddIntService],
})
export class OddIntModule {}
