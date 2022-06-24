import type { Dictionaries, RootState } from '@/store/state';
import { RootGettersType } from '@/store/names/getters.names';
import { GetterTree } from 'vuex';

export type RootGetters = {
  [RootGettersType.IS_LOADING_DICTIONARIES](state: RootState): boolean,
  [RootGettersType.GET_DICTIONARIES](state: RootState): Dictionaries
}

export const getters: GetterTree<RootState, RootState> & RootGetters = {
  [RootGettersType.IS_LOADING_DICTIONARIES](state) {
    return !!state.isLoadingDictionaries;
  },

  [RootGettersType.GET_DICTIONARIES](state) {
    return state.allDictionaries;
  },
};
