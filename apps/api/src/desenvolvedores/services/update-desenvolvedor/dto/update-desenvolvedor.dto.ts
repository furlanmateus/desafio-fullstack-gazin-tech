import { Exclude, Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Sexo } from 'src/common/enums/sexo.enum';

export class UpdateDesenvolvedorDto {
  @Exclude()
  id?: number;

  @IsOptional()
  @IsNumber(
    {},
    {
      message: 'nivelId inválido',
    },
  )
  nivelId?: number;

  @IsOptional()
  @IsString({
    message: 'nome inválido',
  })
  nome: string;

  @IsOptional()
  @IsEnum(Sexo, {
    message: 'sexo inválido',
  })
  sexo: Sexo;

  @IsOptional()
  @IsDate({
    message: 'dataNascimento inválido',
  })
  @Type(() => Date)
  dataNascimento: Date;

  @IsOptional()
  @IsNumber(
    {},
    {
      message: 'idade inválido',
    },
  )
  idade: number;

  @IsOptional()
  @IsString({
    message: 'hobby inválido',
  })
  hobby: string;
}
