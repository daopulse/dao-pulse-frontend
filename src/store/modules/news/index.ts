import { Module } from 'vuex';
import type { RootState } from '@/store/state';
import { actions } from '@/store/modules/news/actions';
import { NewsState, state } from '@/store/modules/news/state';
import { mutations } from '@/store/modules/news/mutations';
import { getters } from '@/store/modules/news/getters';

export const news: Module<NewsState, RootState> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
