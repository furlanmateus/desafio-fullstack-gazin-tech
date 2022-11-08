import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesenvolvedoresController } from './controllers/desenvolvedores.controller';
import { DesenvolvedoresService } from './services/desenvolvedores.service';
import { Desenvolvedor } from './entities/desenvolvedor.entity';
import { CreateDesenvolvedorService } from './services/create-desenvolvedor/create-desenvolvedor.service';
import { FindAllDesenvolvedoresService } from './services/find-all-desenvolvedores/find-all-desenvolvedores.service';
import { FindOneDesenvolvedorService } from './services/find-one-desenvolvedor/find-one-desenvolvedor.service';
import { RemoveDesenvolvedorService } from './services/remove-desenvolvedor/remove-desenvolvedor.service';
import { UpdateDesenvolvedorService } from './services/update-desenvolvedor/update-desenvolvedor.service';
import { Nivel } from 'src/niveis/entities/nivel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nivel, Desenvolvedor])],
  controllers: [DesenvolvedoresController],
  providers: [
    DesenvolvedoresService,
    CreateDesenvolvedorService,
    UpdateDesenvolvedorService,
    RemoveDesenvolvedorService,
    FindAllDesenvolvedoresService,
    FindOneDesenvolvedorService,
  ],
})
export class DesenvolvedoresModule {}
