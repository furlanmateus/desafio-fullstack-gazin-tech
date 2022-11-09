import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesenvolvedoresModule } from './desenvolvedores/desenvolvedores.module';
import { Desenvolvedor } from './desenvolvedores/entities/desenvolvedor.entity';
import { Nivel } from './niveis/entities/nivel.entity';
import { NiveisModule } from './niveis/niveis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL,
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
