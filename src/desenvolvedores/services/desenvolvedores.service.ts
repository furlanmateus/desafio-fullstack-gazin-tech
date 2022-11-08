import { Injectable } from '@nestjs/common';
import { CreateDesenvolvedorService } from './create-desenvolvedor/create-desenvolvedor.service';
import { CreateDesenvolvedorDto } from './create-desenvolvedor/dto/create-desenvolvedor.dto';
import { FindAllDesenvolvedoresDto } from './find-all-desenvolvedores/dto/find-all-desenvolvedores.dto';
import { FindAllDesenvolvedoresService } from './find-all-desenvolvedores/find-all-desenvolvedores.service';
import { FindOneDesenvolvedorService } from './find-one-desenvolvedor/find-one-desenvolvedor.service';
import { RemoveDesenvolvedorService } from './remove-desenvolvedor/remove-desenvolvedor.service';
import { UpdateDesenvolvedorDto } from './update-desenvolvedor/dto/update-desenvolvedor.dto';
import { UpdateDesenvolvedorService } from './update-desenvolvedor/update-desenvolvedor.service';

@Injectable()
export class DesenvolvedoresService {
  constructor(
    private readonly createDesenvolvedorService: CreateDesenvolvedorService,
    private readonly updateDesenvolvedorService: UpdateDesenvolvedorService,
    private readonly removeDesenvolvedorService: RemoveDesenvolvedorService,
    private readonly findAllDesenvolvedoresService: FindAllDesenvolvedoresService,
    private readonly findOneDesenvolvedorService: FindOneDesenvolvedorService,
  ) {}

  create(createDesenvolvedorDto: CreateDesenvolvedorDto) {
    return this.createDesenvolvedorService.run(createDesenvolvedorDto);
  }

  update(id: number, dto: UpdateDesenvolvedorDto) {
    return this.updateDesenvolvedorService.run(id, dto);
  }

  remove(id: number) {
    return this.removeDesenvolvedorService.run(id);
  }

  findAll(query: FindAllDesenvolvedoresDto) {
    return this.findAllDesenvolvedoresService.run(query);
  }

  findOne(id: number) {
    return this.findOneDesenvolvedorService.run(id);
  }
}
