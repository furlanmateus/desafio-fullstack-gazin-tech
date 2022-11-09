import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getPaginationQueryData } from 'src/common/dto/pagination-query.dto';
import { EdgesPage } from 'src/entities/edges-page.entity';
import { Nivel } from 'src/niveis/entities/nivel.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { FindAllNiveisDto } from './dto/find-all-niveis.dto';

@Injectable()
export class FindAllNiveisService {
  constructor(
    @InjectRepository(Nivel)
    private readonly niveisRepository: Repository<Nivel>,
  ) {}

  async run({ nivel, ...rest }: FindAllNiveisDto) {
    const where: FindOptionsWhere<Nivel> = {
      ...(nivel && { nivel: Like(`%${nivel}%`) }),
    };

    const [edges, count] = await this.niveisRepository.findAndCount({
      ...getPaginationQueryData(rest),
      order: { nivel: 'ASC' },
      where,
    });
    return new EdgesPage(count, edges);
  }
}
