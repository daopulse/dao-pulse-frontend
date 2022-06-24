import { AreaSeriesPartialOptions, ChartOptions, DeepPartial, LineStyle } from 'lightweight-charts';
import { ChartColors, ChartSizes } from '@/components/baseComponents/BaseChart/constants';
import { getDate } from '@/utils/getDate';

export const chartOptions: DeepPartial<ChartOptions> = {
  layout: {
    backgroundColor: ChartColors.TRANSPARENT,
    textColor: ChartColors.WHITE_TEXT
  },
  crosshair: {
    horzLine: {
      visible: false,
      labelVisible: false,
    },
    vertLine: {
      labelVisible: false,
      width: ChartSizes.LINE_WIDTH,
      color: ChartColors.BLUE_MAIN,
      style: LineStyle.Solid,
    },
  },
  grid: {
    vertLines: {
      visible: false,
    },
    horzLines: {
      color: ChartColors.BLACK_GRID_LINES,
      style: LineStyle.LargeDashed
    }
  },
  leftPriceScale: {
    visible: true,
    borderVisible: false,
  },
  rightPriceScale: {
    visible: false
  },
  timeScale: {
    // rightBarStaysOnScroll: true,
    borderVisible: false,
    fixLeftEdge: true,
    fixRightEdge: true,
    lockVisibleTimeRangeOnResize: true,
    // rightBarStaysOnScroll: true,
    minBarSpacing: 20,
    timeVisible: true,
    tickMarkFormatter: (time: number) => getDate(time, 'DD/MM/YY'),
  },
};

export const areaOptions: AreaSeriesPartialOptions = {
  priceFormat: {
    type: 'volume'
  },
  lineColor: ChartColors.BLUE_MAIN,
  topColor: ChartColors.BLUE_TOP_AREA,
  bottomColor: ChartColors.TRANSPARENT,
  lineWidth: ChartSizes.LINE_WIDTH,
  priceLineVisible: false,
  lastValueVisible: false,
  crosshairMarkerRadius: ChartSizes.MARKER_RADIUS,
  crosshairMarkerBorderColor: ChartColors.BLUE_MAIN,
  crosshairMarkerBackgroundColor: ChartColors.BLACK_MARKER
};
