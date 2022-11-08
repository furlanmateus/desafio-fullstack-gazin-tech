import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneNivelService {
  constructor(
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
  ) {}

  async run(id: number) {
    const nivel = await this.niveisRepository.findOne({
      where: {
        id,
      },
    });

    if (!nivel) {
      throw new NotFoundException(Messages.MESSAGE_NOT_FOUND);
    }

    return nivel;
  }
}
