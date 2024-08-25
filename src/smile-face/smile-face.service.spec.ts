import { Test, TestingModule } from '@nestjs/testing';
import { SmileFaceService } from './smile-face.service';

describe('SmileFaceService', () => {
  let service: SmileFaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmileFaceService],
    }).compile();

    service = module.get<SmileFaceService>(SmileFaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Method Two should count the smile face correctly in the list and return number', () => {
    expect(service.countSmileFacesMethodTwo([':)', ';(', ';}', ':-D'])).toEqual(2);
    expect(service.countSmileFacesMethodTwo([';D', ':-(', ':-)', ';~)'])).toEqual(3);
    expect(service.countSmileFacesMethodTwo([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
    expect(service.countSmileFacesMethodTwo([])).toEqual(0);
  })
});
