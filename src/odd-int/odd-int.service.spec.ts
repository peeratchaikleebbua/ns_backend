import { Test, TestingModule } from '@nestjs/testing';
import { OddIntService } from './odd-int.service';

describe('OddIntService', () => {
  let service: OddIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OddIntService],
    }).compile();

    service = module.get<OddIntService>(OddIntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('method two should count the odd integer', () => {
    expect(service.findOddIntMethodTwo([7])).toEqual(7);
    expect(service.findOddIntMethodTwo([0])).toEqual(0);
    expect(service.findOddIntMethodTwo([1, 1, 2])).toEqual(2);
    expect(
      service.findOddIntMethodTwo([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
    ).toEqual(4);
  });
});
