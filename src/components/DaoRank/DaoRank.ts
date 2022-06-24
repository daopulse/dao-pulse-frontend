import { computed, defineComponent } from 'vue';
import BaseBadge from '@/components/baseComponents/BaseBadge/BaseBadge.vue';
import DaoScoreTooltip from '@/components/DaoScoreTooltip/DaoScoreTooltip.vue';
import { ModulesNames } from '@/store/names/modules.names';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import { useStore } from '@/store';
import { Dictionaries } from '@/store/state';
import { RootGettersType } from '@/store/names/getters.names';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import { ColumnNames, getColumnOptions } from '@/app.options/columns';

export default defineComponent({
  name: 'DaoRank',
  components: { BaseBadge, DaoScoreTooltip },

  props: {
    rank: {
      type: [String, Number],
    },
    score: {
      type: Number,
      default: 0,
    },
    percent: {
      type: [String, Number],
      default: 0,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    const { getters } = useStore();
    const maxScore = computed(() => <number | undefined>(getters[`${ModulesNames.DAO}/${DaoGettersType.GET_MAX_SCORE}`]));
    const dictionary = computed(() => <Dictionaries>getters[`${RootGettersType.GET_DICTIONARIES}`]);
    const maxRank = computed(() => dictionary.value.daoNamesList.length);

    const pointPosition = computed(() => Math.round((props.score * 97) / (maxScore.value || 0)));

    const markerColor = computed(() => {
      const num = pointPosition.value.toString().length;

      if (num === 2)  return `marker-color${pointPosition.value.toString().charAt(0)}`;
      return num === 3 ? 'marker-color9' : 'marker-color0';
    });

    const badgeType = computed(() => {
      if (props.percent === 0) return 'base-light';
      return +props.percent < 0 ? 'positive' : 'negative';
    });

    return {
      pointPosition,
      getColumnOptions,
      ColumnNames,
      getConvertedNumber,
      markerColor,
      maxRank,
      maxScore,
      badgeType,
    };
  },
});
