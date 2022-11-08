import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesenvolvedoresModule } from './desenvolvedores/desenvolvedores.module';
import { Desenvolvedor } from './desenvolvedores/entities/desenvolvedor.entity';
import { Nivel } from './niveis/entities/nivel.entity';
import { NiveisModule } from './niveis/niveis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'gazin-test',
      entities: [Nivel, Desenvolvedor],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Nivel]),
    NiveisModule,
    DesenvolvedoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
