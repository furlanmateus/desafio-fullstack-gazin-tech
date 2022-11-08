import { Test, TestingModule } from '@nestjs/testing';
import { RemoveNivelService } from '../remove-nivel.service';

describe('RemoveNivelService', () => {
  let service: RemoveNivelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveNivelService],
    }).compile();

    service = module.get<RemoveNivelService>(RemoveNivelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
