import { createChart, SingleValueData } from 'lightweight-charts';
import { areaOptions, chartOptions } from '@/components/baseComponents/BaseChart/options';
import { ChartController } from '@/components/baseComponents/BaseChart/types';
import { cloneDeep } from 'lodash';
import { useChartTooltip } from '@/components/baseComponents/BaseChart/useChartTooltip';

export const useCreateChart = (wrapper: HTMLElement, data: SingleValueData[]): ChartController => {
  const chart = createChart(wrapper, chartOptions);
  const areaSeries = chart.addAreaSeries(areaOptions);

  areaSeries.setData(cloneDeep(data));
  chart.timeScale().fitContent();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  new ResizeObserver((entries) => {
    if (entries.length === 0 || entries[0].target !== wrapper) { return; }
    const newRect = entries[0].contentRect;
    chart.applyOptions({ height: newRect.height, width: newRect.width });
  }).observe(wrapper);

  const useTooltip = useChartTooltip();

  return {
    chart,
    areaSeries,
    useTooltip
  };
};
