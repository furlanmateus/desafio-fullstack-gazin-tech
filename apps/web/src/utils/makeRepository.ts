import { apiSauceInstance } from '../api/api';
import { ApiErrorResponse, ApiResponse } from 'apisauce';
import qs from 'qs';

interface Props<SAVE> {
  resource: string;
  mapQueryParams?: (params: qs.ParsedQs) => qs.ParsedQs;
}

export const makeUrlWithSearch = (
  resource: string,
  params: qs.ParsedQs,
  mapQueryParams?: (params: qs.ParsedQs) => qs.ParsedQs,
) => {
  return `/${resource}?${qs.stringify(mapQueryParams ? mapQueryParams(params) : params)}`;
};

export const makeRepository = <LIST, SAVE extends { id?: ID }, MODEL, ID>({
  resource,
  mapQueryParams: specificMapQueryParams,
}: Props<SAVE>) => {
  const fetchOne = (id: ID): Promise<ApiResponse<MODEL, ApiErrorResponse<any>>> =>
    apiSauceInstance.get(`/${resource}/${id}`);

  const fetch = (params: qs.ParsedQs): Promise<ApiResponse<LIST, ApiErrorResponse<any>>> =>
    apiSauceInstance.get(makeUrlWithSearch(resource, params, specificMapQueryParams));

  const save = (data: SAVE): Promise<ApiResponse<SAVE, ApiErrorResponse<any>>> => {
    if (data.id) {
      return apiSauceInstance.put(`/${resource}/${data.id}`, data);
    }
    return apiSauceInstance.post(`/${resource}`, data);
  };

  const remove = (id: ID) => apiSauceInstance.delete(`/${resource}/${id}`);

  return { fetchOne, fetch, save, remove };
};
