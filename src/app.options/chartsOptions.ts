import { StatisticType } from '@/app.options/statisticsOption';

export enum ChartUniqNames {
  MAIN_PAGE_TVL = 'mainPageTvl',
  MAIN_PAGE_TOKEN_HOLDERS = 'mainPageTokenHolders',
  DAO_PAGE_STAT = 'daoPageStat',
}

export const getChartsOptions = () => [
  {
    name: ChartUniqNames.MAIN_PAGE_TVL,
    isSum: true,
    defaultType: StatisticType.TVL_AMOUNT
  },
  {
    name: ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS,
    isSum: true,
    defaultType: StatisticType.TOKEN_HOLDER_COUNT
  },
  {
    name: ChartUniqNames.DAO_PAGE_STAT,
    isSum: false,
    defaultType: StatisticType.TVL_AMOUNT
  }
];

export const getChartOptions = (name: ChartUniqNames) => {
  const item = getChartsOptions().find(item => item.name === name);
  if (!item) {
    throw new Error(`not found mapped chart with name: "${name}"`);
  }
  return item;
};
