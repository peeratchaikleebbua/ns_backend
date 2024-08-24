import { Test, TestingModule } from '@nestjs/testing';
import { SmileFaceController } from './smile-face.controller';
import { SmileFaceService } from './smile-face.service';

describe('SmileFaceController', () => {
  let controller: SmileFaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmileFaceController],
      providers: [SmileFaceService],
    }).compile();

    controller = module.get<SmileFaceController>(SmileFaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
