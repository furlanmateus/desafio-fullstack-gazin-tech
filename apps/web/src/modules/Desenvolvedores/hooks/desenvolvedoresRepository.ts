import { ParsedQs } from 'qs';
import { makeRepository } from '../../../utils/makeRepository';
import { paginationParams } from '../../../utils/paginationQueryParams';
import { Desenvolvedor, DesenvolvedorPost } from '../types';

const mapQueryParams = (params: ParsedQs): ParsedQs => {
  const { take, ...rest } = params;

  return {
    ...paginationParams(rest),
    take: take || '10',
  };
};

export const desenvolvedoresRepository = makeRepository<
  EdgesPage<Desenvolvedor>,
  DesenvolvedorPost,
  Desenvolvedor,
  number
>({
  resource: 'desenvolvedores',
  mapQueryParams,
});
