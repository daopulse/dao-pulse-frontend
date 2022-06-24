// import { ChartInterval } from '@/services/mainStatisticsHttpService';
//
// export enum TimePeriods {
//   DAYS_1 = '1D',
//   DAYS_7 = '7D',
//   MONTHS_1 = '1M',
//   MONTHS_3 = '3M',
//   MONTHS_6 = '6M',
//   YEARS_1 = '1Y',
//   ALL = 'ALL'
// }
//
// export type PeriodItem = {
//   interval: ChartInterval,
//   key: TimePeriods,
//   timeAgo: number,
//   format: string
// }
//
// export const getMappedPeriodsTime = (): PeriodItem[] => [
//   {
//     interval: ChartInterval.SECONDS_10,
//     key: TimePeriods.DAYS_1,
//     timeAgo: 24 * 60 * 60 * 1000,
//     format: 'DD MMM (hh:mm)'
//   },
//   {
//     interval: ChartInterval.MINUTES_1,
//     key: TimePeriods.DAYS_7,
//     timeAgo: 7 * 24 * 60 * 60 * 1000,
//     format: 'DD MMM (hh:mm)'
//   },
//   {
//     interval: ChartInterval.HOURS_1,
//     key: TimePeriods.MONTHS_1,
//     timeAgo: 28 * 24 * 60 * 60 * 1000,
//     format: 'DD MMM (hh:mm)'
//   },
//   {
//     interval: ChartInterval.HOURS_1,
//     key: TimePeriods.MONTHS_3,
//     timeAgo: 3 * 28 * 24 * 60 * 60 * 1000,
//     format: 'DD MMM (hh:mm)'
//   },
//   {
//     interval: ChartInterval.HOURS_24,
//     key: TimePeriods.MONTHS_6,
//     timeAgo: 6 * 28 * 24 * 60 * 60 * 1000,
//     format: 'DD MMM (hh:mm)'
//   },
//   {
//     interval: ChartInterval.HOURS_24,
//     key: TimePeriods.YEARS_1,
//     timeAgo: 365 * 24 * 60 * 60 * 1000,
//     format: 'DD MMM (hh:mm)'
//   },
//   {
//     interval: ChartInterval.HOURS_24,
//     key: TimePeriods.ALL,
//     timeAgo: 0,
//     format: 'DD MMM (hh:mm)'
//   },
// ];
//
// export const getPeriodItem = (period: TimePeriods): PeriodItem => {
//   const item = getMappedPeriodsTime().find(item => item.key === period);
//   if(!item) { throw new Error(`not found mapped period for period: "${period}"`); }
//   return item;
// };
