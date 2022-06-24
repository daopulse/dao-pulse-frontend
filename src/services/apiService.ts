import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { AbortError } from '@/services/errors/abortError';
import { ErrorStatus } from '@/services/errors/errorType';
import { getJwtToken, removeJwtToken } from '@/services/usageTokenService';
import { API } from '@/boot/axios';

export const SERVER_URL = <string> process.env.API;
export const BASE_URL = '/api';
export const API_VERSION = '';
export const FULL_PATH = SERVER_URL + BASE_URL + API_VERSION;

API.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    const errorStatus = error.response?.status;

    switch (errorStatus) {
      case ErrorStatus.NOT_AUTH: {
        removeJwtToken();
      }
    }

    if (axios.isCancel(error)) {
      return Promise.reject(new AbortError());
    }

    return Promise.reject(error);
  }
);

interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  headers?: {
    [key: string]: string
  };
}

API.interceptors.request.use((config: AxiosRequestConfigExtended) => {
  config.url = (config.url!);
  const token = getJwtToken();
  token && (config.headers!.Authorization = `Bearer ${token}`);
  return config;
});
