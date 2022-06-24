import type { RootState } from '@/store/state';
import type { ActionContext, ActionTree } from 'vuex';
import type { Modify } from '@/typesUtils/modify';
import type { DaoState } from '@/store/modules/dao/state';
import type { DaoListMutations } from '@/store/modules/dao/mutations';
import { DaoActionsType } from '@/store/modules/dao/names/actions.names';
import { daoHttpService } from '@/services/daoHttpService';
import { DaoMutationsType } from '@/store/modules/dao/names/mutations.names';
import { Id } from '@/typesUtils/idType';
import { DICTIONARY } from '@/dictionaries/validation/dictionary';
import { useNotify } from '@/utils/useNotify';

const { getDaoList, getDao, getDaoProposal } = daoHttpService();
const { showErrorNotify } = useNotify();


export type AugmentedActionContext = Modify<
  ActionContext<DaoState, RootState>,
  { commit<K extends keyof DaoListMutations>(key: K, payload?: Parameters<DaoListMutations[K]>[1]): ReturnType<DaoListMutations[K]> }
>;

export type DaoListActions = {
  [DaoActionsType.FETCH_DAO_LIST]({ commit }: AugmentedActionContext): Promise<void>,
  [DaoActionsType.FETCH_DAO_BY_ID]({ commit }: AugmentedActionContext, payload: Id): Promise<void>,
  [DaoActionsType.FETCH_PROPOSALS]({ commit }: AugmentedActionContext, payload: Id): Promise<void>,
}

export const actions: ActionTree<DaoState, RootState> & DaoListActions = {
  async [DaoActionsType.FETCH_DAO_LIST]({ commit }) {
    commit(DaoMutationsType.SET_IS_LOADING_LIST, true);
    try {
      const data = await getDaoList();
      commit(DaoMutationsType.SET_DAO_LIST, data);
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(DaoMutationsType.SET_IS_LOADING_LIST, false);
    }
  },

  async [DaoActionsType.FETCH_DAO_BY_ID]({ commit }, payload) {
    commit(DaoMutationsType.SET_IS_LOADING_DAO, true);
    try {
      const data = await getDao(payload);
      commit(DaoMutationsType.SET_DAO, data);
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(DaoMutationsType.SET_IS_LOADING_DAO, false);
    }
  },

  async [DaoActionsType.FETCH_PROPOSALS]({ commit, state }, payload) {
    commit(DaoMutationsType.SET_IS_LOADING_PROPOSALS, true);
    try {
      const currentPage = state.proposals?.number === undefined ? -1 : state.proposals?.number;
      const data = await getDaoProposal(payload, currentPage + 1);
      commit(DaoMutationsType.SET_PROPOSALS, data);
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(DaoMutationsType.SET_IS_LOADING_PROPOSALS, false);
    }
  }
};
