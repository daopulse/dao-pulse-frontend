import type { Dictionaries, RootState } from '@/store/state';
import { RootMutationsType } from '@/store/names/mutations.names';
import { getDefaultRootState } from '@/store/state';
import { MutationTree } from 'vuex';

export type RootMutation<S = RootState> = {
  [RootMutationsType.SET_IS_LOADED_APP](state: S, payload: boolean): void,
  [RootMutationsType.SET_DICTIONARIES](state: S, payload: Dictionaries): void,
  [RootMutationsType.RESET_STORE](state: S): void
}

export const mutations: MutationTree<RootState> & RootMutation = {
  [RootMutationsType.SET_IS_LOADED_APP](state, payload) {
    state.isLoadingDictionaries = payload;
  },

  [RootMutationsType.SET_DICTIONARIES](state, payload) {
    state.allDictionaries = payload;
  },

  [RootMutationsType.RESET_STORE](state) {
    Object.assign(state, getDefaultRootState());
  }
};
