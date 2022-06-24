import { defineComponent, PropType } from 'vue';
import { WinLooseListType } from '@/components/customComponents/WeeklyList/types';
import { SumStatisticItem } from '@/store/modules/mainStatistics/types';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import { StatisticOption } from '@/app.options/statisticsOption';

export default defineComponent({
  name: 'WeeklyList',

  props: {
    list: {
      type: Array as PropType<SumStatisticItem[]>,
    },
    type: {
      type: String as PropType<WinLooseListType>,
      default: WinLooseListType.WINNERS
    },
    options: {
      type: Object as PropType<StatisticOption>,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const getTitle = () => {
      return `Weekly ${props.type}  (${props.options.shortLabel})`;
    };

    const getName = (item: SumStatisticItem): string => {
      const fieldName = props.options.filedToDisplay as keyof SumStatisticItem;
      return item[fieldName] as string;
    };

    return {
      getName,
      getConvertedNumber,
      getTitle,
    };
  },
});
