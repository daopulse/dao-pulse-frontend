import type { MutationTree } from 'vuex';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import { getDefaultMainStatisticsState, MainStatisticsState } from '@/store/modules/mainStatistics/state';
import { MainStatisticsMutationsType } from '@/store/modules/mainStatistics/names/mutations.names';
import type {
  StatisticItem, SumStatisticGrouped,
  WinLoose
} from '@/store/modules/mainStatistics/types';
import { StatisticType } from '@/app.options/statisticsOption';
import { ChartUniqNames } from '@/app.options/chartsOptions';

export type MainStatisticsMutations<S = MainStatisticsState> = {

  [MainStatisticsMutationsType.SET_STATISTICS_BY_UNIQ_NAME]
    (state: S, { uniqName, payload }: { uniqName: ChartUniqNames, payload: StatisticItem[]}): void,
  [MainStatisticsMutationsType.SET_SUM_STATISTICS_BY_UNIQ_NAME]
    (state: S, { uniqName, payload }: { uniqName: ChartUniqNames, payload: SumStatisticGrouped }): void,
  [MainStatisticsMutationsType.SET_WIN_LOOSE_BY_TYPE]
    (state: S, { type, payload }: { type: StatisticType, payload: WinLoose }): void,

  [MainStatisticsMutationsType.SET_IS_LOADING_CHART_BY_UNIQ_NAME]
    (state: S, { uniqName, bool }: { uniqName: ChartUniqNames, bool: boolean }): void,
  [MainStatisticsMutationsType.SET_IS_LOADING_WIN_LOOSE_BY_TYPE]
    (state: S, { type, bool }: { type: StatisticType, bool: boolean }): void,

  [CommonMutationsType.RESET_MODULE](state: S): void,
}

export const mutations: MutationTree<MainStatisticsState> & MainStatisticsMutations = {
  [MainStatisticsMutationsType.SET_STATISTICS_BY_UNIQ_NAME](state, { uniqName, payload }) {
    state.statistics[uniqName] = payload;
  },

  [MainStatisticsMutationsType.SET_SUM_STATISTICS_BY_UNIQ_NAME](state, { uniqName, payload }) {
    state.sumStatistic[uniqName] = payload;
  },

  [MainStatisticsMutationsType.SET_IS_LOADING_CHART_BY_UNIQ_NAME](state, { uniqName, bool }) {
    state.isLoadingChart[uniqName] = bool;
  },

  [MainStatisticsMutationsType.SET_WIN_LOOSE_BY_TYPE](state, { type, payload }) {
    state.winLooseStatistic[type] = payload;
  },

  [MainStatisticsMutationsType.SET_IS_LOADING_WIN_LOOSE_BY_TYPE](state, { type, bool }) {
    state.isLoadingWinLoose[type] = bool;
  },

  [CommonMutationsType.RESET_MODULE](state) {
    Object.assign(state, getDefaultMainStatisticsState());
  }
};
