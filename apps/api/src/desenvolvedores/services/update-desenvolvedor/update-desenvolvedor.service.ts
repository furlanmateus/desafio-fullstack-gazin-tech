import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { Repository } from 'typeorm';
import { UpdateDesenvolvedorDto } from './dto/update-desenvolvedor.dto';

@Injectable()
export class UpdateDesenvolvedorService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedoresRepository: Repository<Desenvolvedor>,
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
  ) {}

  async run(id: number, { nivelId, ...rest }: UpdateDesenvolvedorDto) {
    const nivel = await this.niveisRepository.findOne({
      where: {
        id: nivelId,
      },
    });

    if (!nivel) {
      throw new BadRequestException(Messages.MESSAGE_NIVEL_INVALID);
    }

    return this.desenvolvedoresRepository.update(id, { ...rest, nivel });
  }
}
