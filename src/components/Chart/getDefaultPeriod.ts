import { TimePeriods } from '@/app.options/chartLabelOptions';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { StatisticType } from '@/app.options/statisticsOption';
import { ChartUniqNames } from '@/app.options/chartsOptions';
import { storageStatisticPeriodKey } from '@/app.options/constant';

const { load } = localStorageSaveService();

export const getDefaultPeriod = (chartType: StatisticType, uniqName: ChartUniqNames): TimePeriods => {
  const savedPeriod = <TimePeriods>load(`${storageStatisticPeriodKey}${uniqName}`);
  return savedPeriod || TimePeriods.MONTHS_1;
};
