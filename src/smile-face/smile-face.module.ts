import { Module } from '@nestjs/common';
import { SmileFaceService } from './smile-face.service';
import { SmileFaceController } from './smile-face.controller';

@Module({
  controllers: [SmileFaceController],
  providers: [SmileFaceService],
})
export class SmileFaceModule {}
