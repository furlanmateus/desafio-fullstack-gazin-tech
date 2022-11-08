import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isValid, parse } from 'date-fns';
import { getPaginationQueryData } from 'src/common/dto/pagination-query.dto';
import { Messages } from 'src/common/messages';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';
import { EdgesPage } from 'src/entities/edges-page.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { FindAllDesenvolvedoresDto } from './dto/find-all-desenvolvedores.dto';

@Injectable()
export class FindAllDesenvolvedoresService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedoresRepository: Repository<Desenvolvedor>,
  ) {}

  async run({ nome, hobby, sexo, idade, ...rest }: FindAllDesenvolvedoresDto) {
    const dataNascimento = rest.dataNascimento
      ? parse(rest.dataNascimento, 'yyyy-MM-dd', new Date())
      : undefined;

    if (dataNascimento && !isValid(dataNascimento)) {
      throw new BadRequestException(Messages.MESSAGE_DATA_NASCIMENTO_INVALID);
    }

    const where: FindOptionsWhere<Desenvolvedor> = {
      ...(nome && { nome: Like(`%${nome}%`) }),
      ...(hobby && { hobby: Like(`%${hobby}%`) }),
      ...(sexo && { sexo }),
      ...(idade && { idade }),
      ...(dataNascimento && { dataNascimento }),
    };

    const [edges, count] = await this.desenvolvedoresRepository.findAndCount({
      ...getPaginationQueryData(rest),
      relations: ['nivel'],
      where,
    });

    return new EdgesPage(count, edges);
  }
}
