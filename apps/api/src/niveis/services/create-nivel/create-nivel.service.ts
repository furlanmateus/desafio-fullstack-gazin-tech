import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { CreateNivelDto } from 'src/niveis/services/create-nivel/dto/create-nivel.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CreateNivelService {
  constructor(
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
  ) {}

  async run(data: CreateNivelDto) {
    return this.niveisRepository.save(this.niveisRepository.create(data));
  }
}
