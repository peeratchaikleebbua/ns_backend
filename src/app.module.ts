import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationsModule } from './permutations/permutations.module';
import { OddIntModule } from './odd-int/odd-int.module';
import { SmileFaceModule } from './smile-face/smile-face.module';

@Module({
  imports: [PermutationsModule, OddIntModule, SmileFaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
