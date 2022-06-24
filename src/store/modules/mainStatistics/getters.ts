import type { RootState } from '@/store/state';
import type { GetterTree } from 'vuex';
import type { MainStatisticsState } from '@/store/modules/mainStatistics/state';
import { MainStatisticsGettersType } from '@/store/modules/mainStatistics/names/getters.names';
import { SingleValueData, Time } from 'lightweight-charts';
import { getDate, makeDateFromISOToTimestamp } from '@/utils/getDate';
import { SumStatisticGrouped, WinLoose } from '@/store/modules/mainStatistics/types';
import { StatisticType } from '@/app.options/statisticsOption';
import { ChartUniqNames } from '@/app.options/chartsOptions';

export type MainStatisticsGetters = {
  [MainStatisticsGettersType.GET_STATISTIC_BY_UNIQ_NAME]: (state: MainStatisticsState) => (uniqName: ChartUniqNames) => SingleValueData[] | undefined,
  [MainStatisticsGettersType.GET_SUM_STATISTIC_BY_UNIQ_NAME]: (state: MainStatisticsState) => (uniqName: ChartUniqNames) => SumStatisticGrouped | undefined,
  [MainStatisticsGettersType.GET_WIN_LOOSE_BY_TYPE]: (state: MainStatisticsState) => (type: StatisticType) => WinLoose | undefined,

  [MainStatisticsGettersType.GET_LAST_UPDATED_STAT] (state: MainStatisticsState): string,

  [MainStatisticsGettersType.IS_LOADING_CHART_BY_UNIQ_NAME]: (state: MainStatisticsState) => (uniqName: ChartUniqNames) => boolean,
  [MainStatisticsGettersType.IS_LOADING_WIN_LOOSE_BY_TYPE]: (state: MainStatisticsState) => (type: StatisticType) => boolean,
}

export const getters: GetterTree<MainStatisticsState, RootState> & MainStatisticsGetters = {
  [MainStatisticsGettersType.GET_STATISTIC_BY_UNIQ_NAME]: (state) => (uniqName: ChartUniqNames) => {
    try {
      return state.statistics[uniqName]?.map(item => {
        return { value: item.amount, time: makeDateFromISOToTimestamp(item.importedAt) as Time };
      });
    } catch (err) {
      return [];
    }
  },

  [MainStatisticsGettersType.GET_LAST_UPDATED_STAT](state) {
    const tvl = state.statistics[ChartUniqNames.MAIN_PAGE_TVL] || [];
    const tokenHolder = state.statistics[ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS] || [];
    const tvlImported = tvl[tvl?.length - 1]?.importedAt;
    const tokenHolderImported = tokenHolder[tokenHolder?.length - 1]?.importedAt;
    // console.log('HERE', tokenHolderImported, tvlImported);
    return (getDate(tvlImported) > getDate(tokenHolderImported)) ? (tvlImported) : (tokenHolderImported);
  },

  [MainStatisticsGettersType.GET_SUM_STATISTIC_BY_UNIQ_NAME]: (state) => (uniqName: ChartUniqNames) => {
    return state.sumStatistic[uniqName];
  },

  [MainStatisticsGettersType.GET_WIN_LOOSE_BY_TYPE]: (state) => (type: StatisticType) => {
    return state.winLooseStatistic[type];
  },

  [MainStatisticsGettersType.IS_LOADING_CHART_BY_UNIQ_NAME]: (state) => (uniqName: ChartUniqNames) => {
    return !!state.isLoadingChart[uniqName];
  },

  [MainStatisticsGettersType.IS_LOADING_WIN_LOOSE_BY_TYPE]: (state) => (type: StatisticType) => {
    return !!state.isLoadingWinLoose[type];
  },
};
