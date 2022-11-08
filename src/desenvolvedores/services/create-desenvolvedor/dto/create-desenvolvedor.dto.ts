import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Sexo } from 'src/common/enums/sexo.enum';

export class CreateDesenvolvedorDto {
  @IsNotEmpty({
    message: 'nivelId é obrigatório',
  })
  @IsNumber(
    {},
    {
      message: 'nivelId inválido',
    },
  )
  nivelId: number;

  @IsNotEmpty({
    message: 'nome é obrigatório',
  })
  @IsString({
    message: 'nome inválido',
  })
  nome: string;

  @IsNotEmpty({
    message: 'sexo é obrigatório',
  })
  @IsEnum(Sexo, {
    message: 'sexo inválido',
  })
  sexo: Sexo;

  @IsNotEmpty({
    message: 'dataNascimento é obrigatório',
  })
  @IsDate({
    message: 'dataNascimento inválido',
  })
  @Type(() => Date)
  dataNascimento: Date;

  @IsNotEmpty({
    message: 'idade é obrigatório',
  })
  @IsNumber(
    {},
    {
      message: 'idade inválido',
    },
  )
  idade: number;

  @IsNotEmpty({
    message: 'hobby é obrigatório',
  })
  @IsString({
    message: 'hobby inválido',
  })
  hobby: string;
}
