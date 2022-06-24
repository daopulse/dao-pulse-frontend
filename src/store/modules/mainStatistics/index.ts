import { Module } from 'vuex';
import type { RootState } from '@/store/state';
import { actions } from '@/store/modules/mainStatistics/actions';
import { MainStatisticsState, state } from '@/store/modules/mainStatistics/state';
import { mutations } from '@/store/modules/mainStatistics/mutations';
import { getters } from '@/store/modules/mainStatistics/getters';

export const mainStatistics: Module<MainStatisticsState, RootState> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
