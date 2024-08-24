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

  it('should count the odd integer', () => {
    expect(service.findOddInt([7])).toBe(7);
    expect(service.findOddInt([0])).toBe(0);
    expect(service.findOddInt([1, 1, 2])).toBe(2);
    expect(service.findOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
  })
});
