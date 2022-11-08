import { Injectable } from '@nestjs/common';
import { CreateNivelService } from './create-nivel/create-nivel.service';
import { CreateNivelDto } from './create-nivel/dto/create-nivel.dto';
import { FindAllNiveisDto } from './find-all-niveis/dto/find-all-niveis.dto';
import { FindAllNiveisService } from './find-all-niveis/find-all-niveis.service';
import { FindOneNivelService } from './find-one-nivel/find-one-nivel.service';
import { RemoveNivelService } from './remove-nivel/remove-nivel.service';
import { UpdateNivelDto } from './update-nivel/dto/update-nivel.dto';
import { UpdateNivelService } from './update-nivel/update-nivel.service';

@Injectable()
export class NiveisService {
  constructor(
    private readonly createNivelService: CreateNivelService,
    private readonly updateNivelService: UpdateNivelService,
    private readonly removeNivelService: RemoveNivelService,
    private readonly findAllNiveisService: FindAllNiveisService,
    private readonly findOneNivelService: FindOneNivelService,
  ) {}

  create(createNivelDto: CreateNivelDto) {
    return this.createNivelService.run(createNivelDto);
  }

  update(id: number, dto: UpdateNivelDto) {
    return this.updateNivelService.run(id, dto);
  }

  remove(id: number) {
    return this.removeNivelService.run(id);
  }

  findAll(query: FindAllNiveisDto) {
    return this.findAllNiveisService.run(query);
  }

  findOne(id: number) {
    return this.findOneNivelService.run(id);
  }
}
