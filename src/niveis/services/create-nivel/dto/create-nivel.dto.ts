import { IsNotEmpty, IsString } from 'class-validator';
export class CreateNivelDto {
  @IsNotEmpty({
    message: 'nível é obrigatório',
  })
  @IsString({
    message: 'nível inválido',
  })
  nivel: string;
}
