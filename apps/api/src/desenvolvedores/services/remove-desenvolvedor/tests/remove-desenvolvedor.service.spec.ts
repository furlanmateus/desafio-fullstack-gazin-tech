import { Test, TestingModule } from '@nestjs/testing';
import { RemoveDesenvolvedorService } from '../remove-desenvolvedor.service';

describe('RemoveDesenvolvedorService', () => {
  let service: RemoveDesenvolvedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveDesenvolvedorService],
    }).compile();

    service = module.get<RemoveDesenvolvedorService>(
      RemoveDesenvolvedorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
