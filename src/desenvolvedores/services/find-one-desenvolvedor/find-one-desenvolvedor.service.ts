import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneDesenvolvedorService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedoresRepository: Repository<Desenvolvedor>,
  ) {}

  async run(id: number) {
    const desenvolvedor = await this.desenvolvedoresRepository.findOne({
      where: {
        id,
      },
    });

    if (!desenvolvedor) {
      throw new NotFoundException(Messages.MESSAGE_NOT_FOUND);
    }

    return desenvolvedor;
  }
}
