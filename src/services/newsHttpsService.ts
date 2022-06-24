import { httpService } from '@/services/httpService';
import { News, NewsQueries } from '@/store/modules/news/types';
import { pickBy } from 'lodash';

const { getMethod } = httpService();
let controller: AbortController | undefined;

const convertToQueryUrl = (obj: unknown): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const params = new URLSearchParams(obj);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      params.delete(key);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      value.forEach((v) => params.append(key, v));
    }
  }
  return params.toString();
};

export type NewsServiceInterface = {
  getNews: (filter: NewsQueries) => Promise<News>
}

export const newsHttpService = (): NewsServiceInterface => {
  const getNews = async(filter: NewsQueries) => {
    if (controller) controller.abort();
    const cleanedSearch = pickBy(filter, v => v !== undefined);
    const data = {
      url: `/news/list?${convertToQueryUrl(cleanedSearch)}`,
      options: { signal: controller?.signal }
    };
    controller = new AbortController();
    const news = <News>await getMethod(data);
    controller = undefined;
    return news;
  };

  return { getNews };
};
