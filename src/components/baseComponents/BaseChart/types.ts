import { IChartApi, ISeriesApi } from 'lightweight-charts';
import { UseChartTooltip } from '@/components/baseComponents/BaseChart/useChartTooltip';

export type ChartController = {
  chart: IChartApi,
  areaSeries: ISeriesApi<'Area'>
  useTooltip: UseChartTooltip
}
