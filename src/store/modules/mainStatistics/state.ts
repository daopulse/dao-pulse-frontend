import { StatisticType } from '@/app.options/statisticsOption';
import { StatisticItem, SumStatisticGrouped, WinLoose } from '@/store/modules/mainStatistics/types';
import { ChartUniqNames } from '@/app.options/chartsOptions';

export type MainStatisticsState = {
  statistics: {
    [ChartUniqNames.MAIN_PAGE_TVL]?: StatisticItem[],
    [ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS]?: StatisticItem[],
    [ChartUniqNames.DAO_PAGE_STAT]?: StatisticItem[],
  },
  sumStatistic: {
    [ChartUniqNames.MAIN_PAGE_TVL]?: SumStatisticGrouped,
    [ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS]?: SumStatisticGrouped,
    [ChartUniqNames.DAO_PAGE_STAT]?: SumStatisticGrouped,
  },
  winLooseStatistic: {
    [StatisticType.TOKEN_HOLDER_COUNT]?: WinLoose;
    [StatisticType.TVL_AMOUNT]?: WinLoose;
    [StatisticType.PROPOSALS_COUNT]?: WinLoose;
    [StatisticType.PRICE]?: WinLoose;
    [StatisticType.MARKET_CAP]?: WinLoose;
    [StatisticType.PROPOSAL_VOTES_COUNT]?: WinLoose;
    [StatisticType.TOTAL_TREASURY_AMOUNT]?: WinLoose;
    [StatisticType.DAO_PULSE_RATE]?: WinLoose;
  },
  isLoadingWinLoose: {
    [StatisticType.TOKEN_HOLDER_COUNT]: boolean;
    [StatisticType.TVL_AMOUNT]: boolean;
    [StatisticType.PROPOSALS_COUNT]: boolean;
    [StatisticType.PRICE]: boolean;
    [StatisticType.MARKET_CAP]: boolean;
    [StatisticType.PROPOSAL_VOTES_COUNT]: boolean;
    [StatisticType.TOTAL_TREASURY_AMOUNT]: boolean;
    [StatisticType.DAO_PULSE_RATE]: boolean,
  },
  isLoadingChart: {
    [ChartUniqNames.MAIN_PAGE_TVL]?: boolean,
    [ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS]?: boolean,
    [ChartUniqNames.DAO_PAGE_STAT]?: boolean,
  },
};

export const getDefaultMainStatisticsState = (): MainStatisticsState => {
  return {
    statistics: {
    },
    sumStatistic: {
    },
    winLooseStatistic: {
      [StatisticType.TOKEN_HOLDER_COUNT]: undefined,
      [StatisticType.TVL_AMOUNT]: undefined,
    },
    isLoadingWinLoose: {
      [StatisticType.TOKEN_HOLDER_COUNT]: true,
      [StatisticType.TVL_AMOUNT]: true,
      [StatisticType.PROPOSALS_COUNT]: true,
      [StatisticType.PRICE]: true,
      [StatisticType.MARKET_CAP]: true,
      [StatisticType.PROPOSAL_VOTES_COUNT]: true,
      [StatisticType.TOTAL_TREASURY_AMOUNT]: true,
      [StatisticType.DAO_PULSE_RATE]: false,
    },
    isLoadingChart: {
      [ChartUniqNames.MAIN_PAGE_TVL]: true,
      [ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS]: true,
      [ChartUniqNames.DAO_PAGE_STAT]: true,
    }
  };
};

export const state: MainStatisticsState = getDefaultMainStatisticsState();
