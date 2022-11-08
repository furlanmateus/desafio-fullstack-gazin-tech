import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { Repository } from 'typeorm';
import { CreateDesenvolvedorDto } from './dto/create-desenvolvedor.dto';

@Injectable()
export class CreateDesenvolvedorService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedoresRepository: Repository<Desenvolvedor>,
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
  ) {}

  async run({ nivelId, ...rest }: CreateDesenvolvedorDto) {
    const nivel = await this.niveisRepository.findOne({
      where: {
        id: nivelId,
      },
    });

    if (!nivel) {
      throw new BadRequestException(Messages.MESSAGE_NIVEL_INVALID);
    }

    return this.desenvolvedoresRepository.save(
      this.desenvolvedoresRepository.create({ ...rest, nivel }),
    );
  }
}
