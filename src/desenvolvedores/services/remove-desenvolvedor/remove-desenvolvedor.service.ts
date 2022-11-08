import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/common/messages';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemoveDesenvolvedorService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedoresRepository: Repository<Desenvolvedor>,
  ) {}

  async run(id: number) {
    const desenvolvedorToDelete = await this.desenvolvedoresRepository.findOne({
      where: {
        id,
      },
    });

    if (!desenvolvedorToDelete) {
      throw new BadRequestException(Messages.MESSAGE_BAD_REQUEST);
    }

    return this.desenvolvedoresRepository.delete(id);
  }
}
