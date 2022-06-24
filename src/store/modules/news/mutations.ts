import type { MutationTree } from 'vuex';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import { getDefaultDaoState } from '@/store/modules/dao/state';
import { NewsState } from '@/store/modules/news/state';
import { NewsMutationsType } from '@/store/modules/news/names/mutations.names';
import type { News } from '@/store/modules/news/types';
import { NewsFilter } from '@/components/forms/NewsFilterForm/types';


export type NewsMutations<S = NewsState> = {
  [NewsMutationsType.SET_NEWS](state: S, payload: News): void,
  [NewsMutationsType.ADD_NEWS](state: S, payload: News): void,
  [NewsMutationsType.SET_MAIN_NEWS](state: S, payload: News): void,
  [NewsMutationsType.SET_DAO_NEWS](state: S, payload: News): void,
  [NewsMutationsType.SET_IS_LOADING_NEWS](state: S, payload: boolean): void,
  [NewsMutationsType.SET_FILTERS](state: S, payload: NewsFilter): void,
  [CommonMutationsType.RESET_MODULE](state: S): void,
}

export const mutations: MutationTree<NewsState> & NewsMutations = {
  [NewsMutationsType.SET_NEWS](state, payload) {
    state.news = payload;
  },

  [NewsMutationsType.ADD_NEWS](state, payload) {
    state.news = {
      ...payload,
      content: [...state.news.content, ...payload.content]
    };
  },

  [NewsMutationsType.SET_MAIN_NEWS](state, payload) {
    state.mainNews = payload;
  },

  [NewsMutationsType.SET_FILTERS](state, payload) {
    state.filter = payload;
  },

  [NewsMutationsType.SET_DAO_NEWS](state, payload) {
    state.daoNews = payload;
  },

  [NewsMutationsType.SET_IS_LOADING_NEWS](state, payload) {
    state.isLoadingNews = payload;
  },

  [CommonMutationsType.RESET_MODULE](state) {
    Object.assign(state, getDefaultDaoState());
  }
};
