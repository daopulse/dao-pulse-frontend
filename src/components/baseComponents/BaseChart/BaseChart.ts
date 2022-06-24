import { defineComponent, ref, PropType, watch, onUnmounted, toRaw } from 'vue';
import { useCreateChart } from '@/components/baseComponents/BaseChart/useCreateChart';
import { SingleValueData } from 'lightweight-charts';
import { ChartController } from '@/components/baseComponents/BaseChart/types';
import { cloneDeep } from 'lodash';
import { TimePeriods } from '@/app.options/chartLabelOptions';

export default defineComponent({
  name: 'BaseChart',

  props: {
    data: {
      type: Array as PropType<SingleValueData[]>,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    period: {
      type: String as PropType<TimePeriods>,
      required: true
    }
  },

  setup(props) {
    const chartRef = ref<HTMLElement>();
    const control = ref<ChartController | undefined>();

    watch(() => props.data, () => {
      if(control.value) {
        control.value.areaSeries.setData(cloneDeep(props.data));
        control.value.chart.timeScale().fitContent();
        control.value.useTooltip.destroyChartTooltip(control.value?.chart);
        control.value.useTooltip.createChartTooltip(
          control.value?.chart,
          toRaw(control.value?.areaSeries),
          chartRef.value!,
          props.period
        );
      } else {
        control.value = useCreateChart(chartRef.value!, props.data);
        control.value.useTooltip.createChartTooltip(
          control.value?.chart,
          toRaw(control.value.areaSeries),
          chartRef.value!,
          props.period
        );
      }
    });

    onUnmounted(() => {
      control.value?.useTooltip.destroyChartTooltip(control.value.chart);
    });

    return { chartRef, control };
  }
});
