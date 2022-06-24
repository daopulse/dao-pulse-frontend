import { getPeriodItem, TimePeriods } from '@/app.options/chartLabelOptions';
import type { StatisticsFilter } from '@/services/mainStatisticsHttpService';

export const getPeriodDates = (period: TimePeriods): StatisticsFilter => {
  const activePeriod = getPeriodItem(period);

  const fromDate: Date = new Date();

  return {
    fromDate: activePeriod.timeAgo
      ? new Date(fromDate.setTime(fromDate.getTime() - activePeriod.timeAgo)).toISOString()
      : undefined,
    toDate: new Date().toISOString(),
    interval: activePeriod.interval,
  };
};
