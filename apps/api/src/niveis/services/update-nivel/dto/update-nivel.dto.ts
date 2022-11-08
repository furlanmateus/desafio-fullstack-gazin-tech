import { Exclude, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateNivelDto {
  @Exclude()
  id?: number;

  @IsString({ message: "O campo 'nível' deve ser uma string" })
  @IsNotEmpty({ message: "O campo 'nível' não pode ser vazio" })
  @Transform(({ value }) => value.trim())
  nivel: string;
}
