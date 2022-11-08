import { Test, TestingModule } from '@nestjs/testing';
import { CreateDesenvolvedorService } from '../create-desenvolvedor.service';

describe('CreateDesenvolvedorService', () => {
  let service: CreateDesenvolvedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDesenvolvedorService],
    }).compile();

    service = module.get<CreateDesenvolvedorService>(
      CreateDesenvolvedorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
