import { NewsGettersType } from '@/store/modules/news/names/getters.names';
import { RootState } from '@/store/state';
import { GetterTree } from 'vuex';
import { NewsState } from '@/store/modules/news/state';
import { NewsItem } from '@/store/modules/news/types';

export type NewsGetters = {
  [NewsGettersType.GET_NEWS](state: NewsState): NewsItem[],
  [NewsGettersType.GET_DAO_NEWS](state: NewsState): NewsItem[],
  [NewsGettersType.GET_MAIN_NEWS](state: NewsState): NewsItem[],
  [NewsGettersType.GET_LAST_UPDATED_MAIN_NEWS](state: NewsState): string,
  [NewsGettersType.GET_LAST_UPDATED_NEWS](state: NewsState): string,
  [NewsGettersType.GET_LAST_UPDATED_DAO_NEWS](state: NewsState): string,
  [NewsGettersType.IS_LOADING_NEWS](state: NewsState): boolean,
  [NewsGettersType.IS_LAST_PAGE](state: NewsState): boolean,
  [NewsGettersType.IS_EMPTY_LIST](state: NewsState): boolean,
}

export const getters: GetterTree<NewsState, RootState> & NewsGetters = {
  [NewsGettersType.GET_NEWS](state) {
    return state.news.content;
  },

  [NewsGettersType.GET_DAO_NEWS](state) {
    return state.daoNews.content;
  },

  [NewsGettersType.GET_MAIN_NEWS](state) {
    return state.mainNews.content;
  },

  [NewsGettersType.GET_LAST_UPDATED_MAIN_NEWS](state) {
    const news = state.mainNews.content;
    return news[0]?.importedAt;
  },

  [NewsGettersType.GET_LAST_UPDATED_NEWS](state) {
    const news = state.news.content;
    return news[0]?.importedAt;
  },

  [NewsGettersType.GET_LAST_UPDATED_DAO_NEWS](state) {
    const news = state.daoNews.content;
    return news[0]?.importedAt;
  },

  [NewsGettersType.GET_MAIN_NEWS](state) {
    return state.mainNews.content;
  },

  [NewsGettersType.IS_LOADING_NEWS](state) {
    return state.isLoadingNews;
  },

  [NewsGettersType.IS_LAST_PAGE](state) {
    return !!state.news.last;
  },

  [NewsGettersType.IS_EMPTY_LIST](state) {
    return !!state.news.empty;
  },
};
