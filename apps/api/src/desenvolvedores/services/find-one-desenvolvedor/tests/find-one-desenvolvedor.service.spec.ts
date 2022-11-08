import { Test, TestingModule } from '@nestjs/testing';
import { FindOneDesenvolvedorService } from '../find-one-desenvolvedor.service';

describe('FindOneDesenvolvedorService', () => {
  let service: FindOneDesenvolvedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneDesenvolvedorService],
    }).compile();

    service = module.get<FindOneDesenvolvedorService>(
      FindOneDesenvolvedorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
