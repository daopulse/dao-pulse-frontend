import { IChartApi, ISeriesApi, MouseEventParams } from 'lightweight-charts';
import { getDate } from '@/utils/getDate';
import { getPeriodItem, PeriodItem, TimePeriods } from '@/app.options/chartLabelOptions';
import { TooltipMargins } from '@/components/baseComponents/BaseChart/constants';

export type UseChartTooltip = {
  destroyChartTooltip: (chart: IChartApi) => void,
  createChartTooltip: (chart: IChartApi, areaSeries: ISeriesApi<'Area'>, wrapper: HTMLElement, period: TimePeriods) => void,
}

export type CrosshairMoveHandler = ((param: MouseEventParams) => void) | null;

export const useChartTooltip = (): UseChartTooltip => {
  let crosshairMoveHandler: CrosshairMoveHandler = null;

  const destroyChartTooltip = (chart: IChartApi) => {
    crosshairMoveHandler && chart.unsubscribeCrosshairMove(crosshairMoveHandler);
    crosshairMoveHandler = null;

    const oldTooltip = document.getElementsByClassName('ui-chart-floating-tooltip');
    if (oldTooltip.length) { return; }
    while (oldTooltip.length) {
      oldTooltip[0].parentNode!.removeChild(oldTooltip[0]);
    }
  };

  const createChartTooltip = (chart: IChartApi, areaSeries: ISeriesApi<'Area'>, wrapper: HTMLElement, period: TimePeriods) => {
    const toolTip = document.createElement('div');
    toolTip.className = 'ui-chart-floating-tooltip';
    wrapper.appendChild(toolTip);

    crosshairMoveHandler = (param: MouseEventParams) => {
      if (!param.time || param.point!.x < 0 || param.point!.y < 0) {
        toolTip.style.display = 'none';
        return;
      }

      const dateStr = <number>param.time;
      const price = param.seriesPrices.get(areaSeries);

      const activePeriod: PeriodItem = getPeriodItem(period);

      toolTip.innerHTML =
        `<div class="date">${getDate(dateStr, activePeriod.format)}</div>
         <div class="price">${price!.toLocaleString()}</div>`;

      const left = +param.point!.x + TooltipMargins.LEFT;
      const top = +param.point!.y + TooltipMargins.TOP;

      toolTip.style.left = `${left}px`;
      toolTip.style.top = `${top}px`;
      toolTip.style.display = 'block';
    };

    chart.subscribeCrosshairMove(crosshairMoveHandler);
  };

  return {
    destroyChartTooltip,
    createChartTooltip
  };
};
