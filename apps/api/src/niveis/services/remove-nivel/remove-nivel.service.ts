import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemoveNivelService {
  constructor(
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedoresRepository: Repository<Desenvolvedor>,
  ) {}

  async run(id: number) {
    const nivelToDelete = await this.niveisRepository.findOne({
      where: {
        id,
      },
    });

    if (!nivelToDelete) {
      throw new BadRequestException(Messages.MESSAGE_BAD_REQUEST);
    }

    const nivelIsAssociated = !!(await this.desenvolvedoresRepository.countBy({
      nivel: {
        id,
      },
    }));

    if (nivelIsAssociated) {
      throw new BadRequestException(Messages.MESSAGE_NIVEL_ASSOCIATED);
    }

    return this.niveisRepository.delete(id);
  }
}
