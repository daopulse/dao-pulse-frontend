import { ColumnState, DaoInfo, DaoItem, Filters, ProposalsState } from '@/store/modules/dao/types';
import { getDefaultColumnState } from '@/store/modules/dao/utils/getDefaultColumnState';
import { Paginator } from '@/components/baseComponents/BaseTable/types';
import { defaultRowCount, defaultSortColumnName } from '@/app.options/defaultPaginatorSettings';

export type DaoState = {
  daoInfo?: DaoInfo;
  daoList: DaoItem[];
  watchedDaoList: DaoItem[];
  unwatchedDaoList: DaoItem[];
  isLoadingList: boolean;
  isLoadingDao: boolean;
  filters?: Filters;
  paginator: Paginator;
  columnsState: ColumnState[];
  proposals: ProposalsState;
  isLoadingProposals: boolean
}

export const getDefaultDaoState = (): DaoState => {
  return {
    daoInfo: undefined,
    daoList: [],
    watchedDaoList: [],
    unwatchedDaoList: [],
    isLoadingList: true,
    isLoadingDao: true,
    filters: undefined,
    paginator: {
      sortBy: defaultSortColumnName,
      descending: false,
      page: 1,
      rowsPerPage: defaultRowCount,
      rowsNumber: 0
    },
    columnsState: getDefaultColumnState(),
    proposals: {
      content: []
    },
    isLoadingProposals: true
  };
};

export const state: DaoState = getDefaultDaoState();
