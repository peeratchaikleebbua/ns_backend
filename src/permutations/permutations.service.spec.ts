import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsService } from './permutations.service';

describe('PermutationsService', () => {
  let service: PermutationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutationsService],
    }).compile();

    service = module.get<PermutationsService>(PermutationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Method Two should generate permutations based on input text', () => {
    // expect(service.generatePermutationMethodTwo('a')).toEqual(['a']);
    // expect(service.generatePermutationMethodTwo('ab')).toEqual(['ab', 'ba']);
    expect(service.generatePermutationMethodTwo('abc')).toEqual([
      'abc',
      'acb',
      'bac',
      'bca',
      'cab',
      'cba',
    ]);
    // expect(service.generatePermutationMethodTwo('aabb')).toEqual([
    //   'aabb',
    //   'abab',
    //   'abba',
    //   'baab',
    //   'baba',
    //   'bbaa',
    // ]);
  });
});
