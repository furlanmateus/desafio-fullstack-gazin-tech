import { Test, TestingModule } from '@nestjs/testing';
import { FindAllDesenvolvedoresService } from '../find-all-desenvolvedores.service';

describe('FindAllDesenvolvedoresService', () => {
  let service: FindAllDesenvolvedoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllDesenvolvedoresService],
    }).compile();

    service = module.get<FindAllDesenvolvedoresService>(
      FindAllDesenvolvedoresService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
