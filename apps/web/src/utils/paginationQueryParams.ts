import qs from 'qs';

export const paginationParams = (params: qs.ParsedQs): qs.ParsedQs => {
  const { page = '1', size = '10', take, ...rest } = params;
  return {
    ...rest,
    skip: String((+page - 1) * +size),
    take: take ?? size,
    page: undefined,
  };
};
