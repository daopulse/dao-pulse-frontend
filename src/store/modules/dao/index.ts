import { Module } from 'vuex';
import type { RootState } from '@/store/state';
import { actions } from '@/store/modules/dao/actions';
import { DaoState, state } from '@/store/modules/dao/state';
import { mutations } from '@/store/modules/dao/mutations';
import { getters } from '@/store/modules/dao/getters';

export const dao: Module<DaoState, RootState> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
