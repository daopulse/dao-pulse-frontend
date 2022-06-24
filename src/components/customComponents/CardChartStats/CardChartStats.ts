import { defineComponent, PropType } from 'vue';
import { getConvertedNumber } from '@/utils/getConvertedNumber';

interface StatsData {
  value: number;
  label?: string;
}

export default defineComponent({
  name: 'CardChartStats',

  props: {
    hasWeekChange: {
      type: Boolean,
      default: true
    },
    current: {
      type: Number,
    },
    month: {
      type: Object as PropType<StatsData>,
    },
    week: {
      type: Object as PropType<StatsData>,
    },
    symbol: {
      type: String
    }
  },
  setup() {
    const getColor = (value: number) => {
      return value < 0 ? 'text-negative' : 'text-positive';
    };

    return {
      getColor,
      getConvertedNumber,
    };
  },
});
