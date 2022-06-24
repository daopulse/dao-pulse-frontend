import { Modify } from '@/typesUtils/modify';
import type { RootState } from '@/store/state';
import type { MainStatisticsMutations } from '@/store/modules/mainStatistics/mutations';
import type { ActionContext, ActionTree } from 'vuex';
import { MainStatisticsState } from '@/store/modules/mainStatistics/state';
import { MainStatisticsActionsType } from '@/store/modules/mainStatistics/names/actions.names';
import { MainStatisticsMutationsType } from '@/store/modules/mainStatistics/names/mutations.names';
import { mainStatisticsHttpService, StatisticsFilter } from '@/services/mainStatisticsHttpService';
import type { TimePeriods } from '@/app.options/chartLabelOptions';
import { getPeriodDates } from '@/store/modules/mainStatistics/utils/getPeriodDates';
import { StatisticType } from '@/app.options/statisticsOption';
import { ChartUniqNames } from '@/app.options/chartsOptions';
import { Id } from '@/typesUtils/idType';
import { useNotify } from '@/utils/useNotify';
import { DICTIONARY } from '@/dictionaries/validation/dictionary';

const { getStatistic, getWinLooseStatistic, getSummarizedStatistic } = mainStatisticsHttpService();
const { showErrorNotify } = useNotify();

export type AugmentedActionContext = Modify<
  ActionContext<MainStatisticsState, RootState>,
  { commit<K extends keyof MainStatisticsMutations>(key: K, payload?: Parameters<MainStatisticsMutations[K]>[1]): ReturnType<MainStatisticsMutations[K]> }
>;

export interface DaoListActions {
  [MainStatisticsActionsType.FETCH_STATISTIC_BY_UNIQ_NAME]
    ({ commit }: AugmentedActionContext,{ payload, uniqName, type, id, requestNewSum } :
      { type: StatisticType, id?: Id, payload: TimePeriods, uniqName: ChartUniqNames, requestNewSum: boolean }): Promise<void>,

  [MainStatisticsActionsType.FETCH_WIN_LOOSE_BY_TYPE]
    ({ commit }: AugmentedActionContext, payload: StatisticType): Promise<void>,
}

export const actions: ActionTree<MainStatisticsState, RootState> & DaoListActions = {
  async [MainStatisticsActionsType.FETCH_STATISTIC_BY_UNIQ_NAME]({ commit }, { payload, uniqName, id, type, requestNewSum }) {
    commit(MainStatisticsMutationsType.SET_IS_LOADING_CHART_BY_UNIQ_NAME, { uniqName, bool: true });
    const filter: StatisticsFilter = getPeriodDates(payload);
    try {
      if(requestNewSum) {
        const [data, sumData] = await Promise.all([
          getStatistic(type, filter, id),
          getSummarizedStatistic(type, id)
        ]);
        commit(MainStatisticsMutationsType.SET_STATISTICS_BY_UNIQ_NAME, { uniqName, payload: data });
        commit(MainStatisticsMutationsType.SET_SUM_STATISTICS_BY_UNIQ_NAME, { uniqName, payload: sumData });
      } else {
        const [data] = await Promise.all([
          getStatistic(type, filter, id),
        ]);
        commit(MainStatisticsMutationsType.SET_STATISTICS_BY_UNIQ_NAME, { uniqName, payload: data });
      }
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(MainStatisticsMutationsType.SET_IS_LOADING_CHART_BY_UNIQ_NAME, { uniqName, bool: false });
    }
  },

  async [MainStatisticsActionsType.FETCH_WIN_LOOSE_BY_TYPE]({ commit }, payload) {
    commit(MainStatisticsMutationsType.SET_IS_LOADING_WIN_LOOSE_BY_TYPE, {
      type: payload,
      bool: true
    });
    try {
      const data = await getWinLooseStatistic(payload);
      commit(MainStatisticsMutationsType.SET_WIN_LOOSE_BY_TYPE, {
        type: payload,
        payload: data
      });
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(MainStatisticsMutationsType.SET_IS_LOADING_WIN_LOOSE_BY_TYPE, {
        type: payload,
        bool: false
      });
    }
  }
};
