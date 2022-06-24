import { News } from '@/store/modules/news/types';
import { NewsFilter } from '@/components/forms/NewsFilterForm/types';

export type NewsState = {
  news: News,
  daoNews: News,
  mainNews: News,
  isLoadingNews: boolean,
  filter?: NewsFilter
}

export const getDefaultNewsState = (): NewsState => {
  return {
    news: {
      content: []
    },
    daoNews: {
      content: []
    },
    mainNews: {
      content: []
    },
    isLoadingNews: true,
    filter: undefined,
  };
};

export const state: NewsState = getDefaultNewsState();
