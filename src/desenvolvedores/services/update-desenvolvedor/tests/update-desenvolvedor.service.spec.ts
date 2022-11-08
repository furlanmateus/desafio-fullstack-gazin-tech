import { Test, TestingModule } from '@nestjs/testing';
import { UpdateDesenvolvedorService } from '../update-desenvolvedor.service';

describe('UpdateDesenvolvedorService', () => {
  let service: UpdateDesenvolvedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateDesenvolvedorService],
    }).compile();

    service = module.get<UpdateDesenvolvedorService>(
      UpdateDesenvolvedorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
