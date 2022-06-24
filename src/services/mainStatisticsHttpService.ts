import { httpService } from '@/services/httpService';
import type { StatisticItem, SumStatisticGrouped } from '@/store/modules/mainStatistics/types';
import type { WinLoose } from '@/store/modules/mainStatistics/types';
import { StatisticType } from '@/app.options/statisticsOption';
import { winLooseCount } from '@/app.options/constant';
import { Id } from '@/typesUtils/idType';

const { getMethod } = httpService();

export type StatisticsFilter = {
  fromDate?: string,
  toDate: string,
  interval: ChartInterval
}

export enum ChartInterval {
  HOURS_1 = 'HOURS_1',
  HOURS_24 = 'HOURS_24',
  WEEK_1 = 'WEEK_1',
  MONTHS_1 = 'MONTHS_1',
  MONTHS_3 = 'MONTHS_3',
  MONTHS_6 = 'MONTHS_6',
  MONTHS_12 = 'MONTHS_12',
}

export type MainStatisticsServiceInterface = {
  getSummarizedStatistic: (type: StatisticType, id?: Id) => Promise<SumStatisticGrouped>
  getStatistic: (type: StatisticType, statisticsFilter: StatisticsFilter, id?: Id) => Promise<StatisticItem[]>
  getWinLooseStatistic: (type: StatisticType) => Promise<WinLoose>
}

export const mainStatisticsHttpService = (): MainStatisticsServiceInterface => {
  const getSummarizedStatistic = async(type: StatisticType, id?: Id) => {
    const data = {
      url: !id ?
        `/statistics/summarized/summary?types=${type}`:
        `/statistics/summary?type=${type}&daoId=${id}`
    };
    if (id) {
      return <SumStatisticGrouped>await getMethod(data);
    }
    const resp = <[SumStatisticGrouped]>await getMethod(data);
    return resp[0];
  };

  const getStatistic = async(type: StatisticType, filter: StatisticsFilter, id?: Id) => {
    const data = {
      url: id ?
        `/statistics?type=${type}&daoId=${id}&fromDate=${filter?.fromDate || ''}&toDate=${filter.toDate}&interval=${filter.interval}` :
        `/statistics/summarized?type=${type}&fromDate=${filter?.fromDate || ''}&toDate=${filter.toDate}&interval=${filter.interval}`
    };
    return <StatisticItem[]>await getMethod(data);
  };

  const getWinLooseStatistic = async(type: StatisticType) => {
    const data = {
      url: `/statistics/win-loose?summarySizeLimit=${winLooseCount}&types=${type}`
    };
    const resp = <[WinLoose]>await getMethod(data);
    return resp[0];
  };

  return {
    getStatistic,
    getSummarizedStatistic,
    getWinLooseStatistic
  };
};
