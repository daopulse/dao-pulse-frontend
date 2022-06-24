import { localStorageSaveService } from '@/services/localStorageSaveService';
import { StatisticType } from '@/app.options/statisticsOption';
import { ChartUniqNames } from '@/app.options/chartsOptions';
import { storageStatisticTypeKey } from '@/app.options/constant';

const { load } = localStorageSaveService();

export const getDefaultType = (uniqName: ChartUniqNames, type: StatisticType): StatisticType => {
  const savedType = <StatisticType>load(`${storageStatisticTypeKey}${uniqName}`);
  return savedType || type;
};
