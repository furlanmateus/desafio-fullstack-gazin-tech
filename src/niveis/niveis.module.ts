import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NiveisController } from './controllers/niveis.controller';
import { Nivel } from './entities/nivel.entity';
import { CreateNivelService } from './services/create-nivel/create-nivel.service';
import { UpdateNivelService } from './services/update-nivel/update-nivel.service';
import { FindAllNiveisService } from './services/find-all-niveis/find-all-niveis.service';
import { FindOneNivelService } from './services/find-one-nivel/find-one-nivel.service';
import { RemoveNivelService } from './services/remove-nivel/remove-nivel.service';
import { NiveisService } from './services/niveis.service';
import { Desenvolvedor } from 'src/desenvolvedores/entities/desenvolvedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nivel, Desenvolvedor])],
  controllers: [NiveisController],
  providers: [
    NiveisService,
    CreateNivelService,
    UpdateNivelService,
    FindAllNiveisService,
    FindOneNivelService,
    RemoveNivelService,
  ],
})
export class NiveisModule {}
