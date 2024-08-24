import { Test, TestingModule } from '@nestjs/testing';
import { OddIntController } from './odd-int.controller';
import { OddIntService } from './odd-int.service';

describe('OddIntController', () => {
  let controller: OddIntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OddIntController],
      providers: [OddIntService],
    }).compile();

    controller = module.get<OddIntController>(OddIntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
