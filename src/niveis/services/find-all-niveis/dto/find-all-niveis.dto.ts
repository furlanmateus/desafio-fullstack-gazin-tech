import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

export class FindAllNiveisDto extends PaginationQueryDto {
  @IsOptional()
  @IsString({
    message: 'nível inválido',
  })
  nivel?: string;
}
