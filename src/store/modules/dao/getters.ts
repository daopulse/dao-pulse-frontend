import type { RootState } from '@/store/state';
import type { GetterTree } from 'vuex';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import { DaoState } from '@/store/modules/dao/state';
import { filterDaoListService } from '@/services/filterDaoListService';
import { ColumnState, DaoInfo, DaoItem, Proposal } from '@/store/modules/dao/types';
import { Paginator } from '@/components/baseComponents/BaseTable/types';
import { getPage, getSort } from '@/services/paginatorDaoListService';

export type DaoListGetters = {
  [DaoGettersType.GET_LIST](state: DaoState): DaoItem[],
  [DaoGettersType.GET_LAST_UPDATED_LIST](state: DaoState): string,
  [DaoGettersType.GET_WATCHED_LIST](state: DaoState): DaoItem[],
  [DaoGettersType.GET_VISIBLE_COLUMNS_NAMES](state: DaoState): string[],
  [DaoGettersType.GET_COLUMN_STATE](state: DaoState): ColumnState[],
  [DaoGettersType.GET_PAGINATOR](state: DaoState): Paginator,
  [DaoGettersType.GET_DAO](state: DaoState): DaoInfo | undefined,
  [DaoGettersType.IS_LOADING_DAO](state: DaoState): boolean,
  [DaoGettersType.IS_LOADING_DAO_LIST](state: DaoState): boolean,
  [DaoGettersType.GET_PROPOSALS](state: DaoState): Proposal[],
  [DaoGettersType.GET_PROPOSALS_LAST_UPDATE](state: DaoState): string,
  [DaoGettersType.IS_LOADING_PROPOSALS](state: DaoState): boolean,
  [DaoGettersType.IS_LAST_PROP_PAGE](state: DaoState): boolean,
  [DaoGettersType.IS_EMPTY_PROP_LIST](state: DaoState): boolean,
  [DaoGettersType.GET_WATCHED_FILTERED_DAO_COUNT](state: DaoState): number,
  [DaoGettersType.GET_MAX_SCORE](state: DaoState): number | undefined,
}

export const getters: GetterTree<DaoState, RootState> & DaoListGetters = {
  [DaoGettersType.GET_LIST](state) {
    const watched = state.watchedDaoList;
    const filteredWatched = filterDaoListService(watched, state.filters);
    const sortedFilteredWatched = getSort(filteredWatched, state.paginator);

    const unwatched = state.unwatchedDaoList;
    const filtered = filterDaoListService(unwatched, state.filters);
    const sortedFiltered = getSort(filtered, state.paginator);
    const paged = getPage(sortedFiltered, state.paginator);
    return [...sortedFilteredWatched, ...paged];
  },

  [DaoGettersType.GET_WATCHED_FILTERED_DAO_COUNT](state) {
    const watched = state.watchedDaoList;
    return filterDaoListService(watched, state.filters).length;
  },

  [DaoGettersType.GET_LAST_UPDATED_LIST](state) {
    return state.daoList.reduce((acc, curr) => acc.updatedAt < curr.updatedAt ? acc : curr).updatedAt;
  },

  [DaoGettersType.GET_WATCHED_LIST](state) {
    return state.watchedDaoList;
  },

  [DaoGettersType.GET_VISIBLE_COLUMNS_NAMES](state) {
    return state.columnsState
      .filter(item => item.isVisible).map(item => item.name);
  },

  [DaoGettersType.GET_COLUMN_STATE](state) {
    return state.columnsState;
  },

  [DaoGettersType.GET_PAGINATOR](state) {
    return state.paginator;
  },

  [DaoGettersType.GET_DAO](state) {
    return state.daoInfo;
  },

  [DaoGettersType.IS_LOADING_DAO](state) {
    return state.isLoadingDao;
  },

  [DaoGettersType.IS_LOADING_DAO_LIST](state) {
    return state.isLoadingList;
  },

  [DaoGettersType.GET_PROPOSALS](state) {
    return state.proposals.content;
  },

  [DaoGettersType.GET_PROPOSALS_LAST_UPDATE](state) {
    return (state.proposals.content[0]?.importedAt || state.proposals.content[0]?.createdAt);
  },

  [DaoGettersType.IS_LOADING_PROPOSALS](state) {
    return state.isLoadingProposals;
  },

  [DaoGettersType.IS_LAST_PROP_PAGE](state) {
    return state.proposals.last || false;
  },

  [DaoGettersType.IS_EMPTY_PROP_LIST](state) {
    return !!state.proposals.empty;
  },
  [DaoGettersType.GET_MAX_SCORE](state) {
    if(state.daoList.length) {
      return state.daoList.reduce(
        (acc, curr) => ((acc.daoPulseRate?.amount || 0) < (curr.daoPulseRate?.amount || 0 ))? curr : acc
      ).daoPulseRate?.amount;
    } else {
      return undefined;
    }

  },
};
