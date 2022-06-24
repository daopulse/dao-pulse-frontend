import { FULL_PATH } from '@/services/apiService';
import { AxiosRequestConfig } from 'axios';
import { API } from '@/boot/axios';

export type ApiMethod = {
  url: string;
  options?: AxiosRequestConfig
}

export type ApiMethodPost = ApiMethod & { params?: unknown }

export type HttpServiceInterface = {
  getMethod: (data: ApiMethod) => Promise<unknown>;
  postMethod: (data: ApiMethodPost) => Promise<unknown>;
  putMethod: (data: ApiMethod) => Promise<unknown>;
  deleteMethod: (data: ApiMethod) => Promise<unknown>;
}

export const httpService = (): HttpServiceInterface => {
  const getMethod = async(data: ApiMethod) => {
    const { url, options } = data;
    const response =  await API.get(`${FULL_PATH}${url}`, options);
    return <unknown> response.data;
  };

  const postMethod = async(data: ApiMethodPost) => {
    const { url, params, options } = data;
    const response = await API.post(`${FULL_PATH}${url}`, params, options);
    return <unknown> response.data;
  };

  const putMethod = async(data: ApiMethod) => {
    const { url, options } = data;
    const response = await API.put(`${FULL_PATH}${url}`, options);
    return <unknown> response.data;
  };

  const deleteMethod = async(data: ApiMethod) => {
    const { url, options } = data;
    const response =  await API.delete(`${FULL_PATH}${url}`, options);
    return <unknown> response.data;
  };

  return {
    getMethod, postMethod, putMethod, deleteMethod
  };
};
