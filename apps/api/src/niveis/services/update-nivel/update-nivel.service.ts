import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { Repository } from 'typeorm';
import { UpdateNivelDto } from './dto/update-nivel.dto';

@Injectable()
export class UpdateNivelService {
  constructor(
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
  ) {}

  async run(id: number, dto: UpdateNivelDto) {
    const nivelToUpdate = await this.niveisRepository.findOne({
      where: {
        id,
      },
    });

    if (!nivelToUpdate) {
      throw new BadRequestException(Messages.MESSAGE_BAD_REQUEST);
    }

    return this.niveisRepository.update(id, dto);
  }
}
