import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export function getPaginationQueryData(paginationQueryDto: PaginationQueryDto) {
  return {
    take: paginationQueryDto.take,
    skip: paginationQueryDto.skip,
  };
}

export abstract class PaginationQueryDto {
  @IsOptional()
  @IsInt({
    message: "'skip' deve ser um número",
  })
  @Type(() => Number)
  skip?: number;

  @IsOptional()
  @IsInt({
    message: "'take' deve ser um número",
  })
  @Type(() => Number)
  take?: number;
}
