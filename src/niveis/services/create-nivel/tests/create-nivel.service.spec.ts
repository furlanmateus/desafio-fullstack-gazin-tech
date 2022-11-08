import { Test, TestingModule } from '@nestjs/testing';
import { CreateNivelService } from '../create-nivel.service';

describe('CreateNivelService', () => {
  let service: CreateNivelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateNivelService],
    }).compile();

    service = module.get<CreateNivelService>(CreateNivelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
