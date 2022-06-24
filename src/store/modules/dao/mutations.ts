import type { MutationTree } from 'vuex';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import type { DaoState } from '@/store/modules/dao/state';
import { getDefaultDaoState } from '@/store/modules/dao/state';
import { DaoMutationsType } from '@/store/modules/dao/names/mutations.names';
import type { FilterData } from '@/components/forms/DaoTableFiltersForm/types';
import { createNewFilterState } from '@/store/modules/dao/utils/createNewFilterState';
import type { DaoInfo, DaoItem, ProposalsState } from '@/store/modules/dao/types';
import type { ColumnState } from '@/store/modules/dao/types';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { activeColumn, watchedDao } from '@/store/modules/dao/constants';
import type { Paginator } from '@/components/baseComponents/BaseTable/types';
import { filterDaoListService } from '@/services/filterDaoListService';
import { getUnwatchedDao, getWatchedDao } from '@/services/getWatchedDaoService';

const { save } = localStorageSaveService();

export type DaoListMutations<S = DaoState> = {
  [DaoMutationsType.SET_DAO](state: S, payload: DaoInfo): void,
  [DaoMutationsType.SET_IS_LOADING_DAO](state: S, payload: boolean): void,
  [DaoMutationsType.SET_DAO_LIST](state: S, payload: DaoItem[]): void,
  [DaoMutationsType.SET_IS_LOADING_LIST](state: S, payload: boolean): void,
  [DaoMutationsType.SET_DAO_FILTERS](state: S, payload?: FilterData): void,
  [DaoMutationsType.SET_COLUMNS_IS_VISIBLE](state: S, payload: { changedColumn: ColumnState, isVisible: boolean }): void,
  [DaoMutationsType.SET_SELECTED_DAO](state: S, payload: DaoItem[]): void,
  [DaoMutationsType.SET_PAGINATOR](state: S, payload: Paginator): void,
  [DaoMutationsType.SET_PROPOSALS](state: S, payload: ProposalsState): void,
  [DaoMutationsType.SET_IS_LOADING_PROPOSALS](state: S, payload: boolean): void,
  [CommonMutationsType.RESET_MODULE](state: S): void,
}

export const mutations: MutationTree<DaoState> & DaoListMutations = {
  [DaoMutationsType.SET_DAO](state, payload) {
    state.daoInfo = payload;
  },
  [DaoMutationsType.SET_IS_LOADING_DAO](state, payload) {
    state.isLoadingDao = payload;
  },
  [DaoMutationsType.SET_DAO_LIST](state, payload) {
    state.daoList = payload;
    state.watchedDaoList = getWatchedDao(payload);
    state.unwatchedDaoList = getUnwatchedDao(payload);
    state.paginator = {
      ...state.paginator,
      rowsNumber: filterDaoListService(state.unwatchedDaoList, state.filters).length,
    };
  },

  [DaoMutationsType.SET_IS_LOADING_LIST](state, payload) {
    state.isLoadingList = payload;
  },

  [DaoMutationsType.SET_DAO_FILTERS](state, payload) {
    state.filters = payload ? createNewFilterState(payload) : payload;
    state.paginator = {
      ...state.paginator,
      page: 1,
      rowsNumber: filterDaoListService(state.unwatchedDaoList, state.filters).length,
    };
  },

  [DaoMutationsType.SET_COLUMNS_IS_VISIBLE](state, { changedColumn, isVisible}) {
    state.columnsState = state.columnsState.map((item) => {
      return (changedColumn.name === item.name) ? { ...item, isVisible: isVisible } : item;
    });
    save(state.columnsState, activeColumn);
  },

  [DaoMutationsType.SET_SELECTED_DAO](state, payload) {
    state.watchedDaoList = payload;
    save(payload, watchedDao);
    state.unwatchedDaoList = getUnwatchedDao(state.daoList);
    state.paginator = {
      ...state.paginator,
      rowsNumber: filterDaoListService(state.unwatchedDaoList, state.filters).length,
    };
  },

  [DaoMutationsType.SET_PAGINATOR](state, payload) {
    state.paginator = {
      ...payload,
      rowsNumber: filterDaoListService(state.unwatchedDaoList, state.filters).length,
    };
  },

  [DaoMutationsType.SET_PROPOSALS](state, payload) {
    state.proposals = {
      ...payload,
      content: [...state.proposals.content, ...payload.content]
    };
  },

  [DaoMutationsType.SET_IS_LOADING_PROPOSALS](state, payload) {
    state.isLoadingProposals = payload;
  },

  [CommonMutationsType.RESET_MODULE](state) {
    Object.assign(state, getDefaultDaoState());
  }
};
