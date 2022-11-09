import { ParsedQs } from 'qs';
import { makeRepository } from '../../../utils/makeRepository';
import { paginationParams } from '../../../utils/paginationQueryParams';
import { Nivel } from '../types';

const mapQueryParams = (params: ParsedQs): ParsedQs => {
  const { take, ...rest } = params;

  return {
    ...paginationParams(rest),
    take: take || '10',
  };
};

export const niveisRepository = makeRepository<EdgesPage<Nivel>, Nivel, Nivel, number>({
  resource: 'niveis',
  mapQueryParams,
});
