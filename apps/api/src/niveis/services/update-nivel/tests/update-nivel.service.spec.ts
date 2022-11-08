import { Test, TestingModule } from '@nestjs/testing';
import { UpdateNivelService } from '../update-nivel.service';

describe('UpdateNivelService', () => {
  let service: UpdateNivelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateNivelService],
    }).compile();

    service = module.get<UpdateNivelService>(UpdateNivelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
