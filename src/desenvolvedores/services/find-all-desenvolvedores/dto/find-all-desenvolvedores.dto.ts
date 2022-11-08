import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Sexo } from 'src/common/enums/sexo.enum';

export class FindAllDesenvolvedoresDto extends PaginationQueryDto {
  @IsOptional()
  @IsString({
    message: 'nome inválido',
  })
  nome?: string;

  @IsOptional()
  @IsEnum(Sexo, {
    message: 'sexo inválido',
  })
  sexo?: Sexo;

  @IsOptional()
  @IsString({
    message: 'dataNascimento inválido',
  })
  dataNascimento?: string;

  @IsOptional()
  @IsString({
    message: 'idade inválido',
  })
  idade?: number;

  @IsOptional()
  @IsString({
    message: 'hobby inválido',
  })
  hobby?: string;
}
