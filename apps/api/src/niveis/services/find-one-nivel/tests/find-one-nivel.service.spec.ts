import { Test, TestingModule } from '@nestjs/testing';
import { FindOneNivelService } from '../find-one-nivel.service';

describe('FindOneNivelService', () => {
  let service: FindOneNivelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneNivelService],
    }).compile();

    service = module.get<FindOneNivelService>(FindOneNivelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
