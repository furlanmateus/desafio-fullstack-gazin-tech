import { Test, TestingModule } from '@nestjs/testing';
import { FindAllNiveisService } from '../find-all-niveis.service';

describe('FindAllNiveisService', () => {
  let service: FindAllNiveisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllNiveisService],
    }).compile();

    service = module.get<FindAllNiveisService>(FindAllNiveisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
