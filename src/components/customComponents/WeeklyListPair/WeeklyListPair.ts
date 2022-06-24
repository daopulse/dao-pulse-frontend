import { computed, defineComponent, onMounted, PropType } from 'vue';
import WeeklyList from '@/components/customComponents/WeeklyList/WeeklyList.vue';
import { WinLoose } from '@/store/modules/mainStatistics/types';
import { useStore } from '@/store';
import { MainStatisticsGettersType } from '@/store/modules/mainStatistics/names/getters.names';
import { ModulesNames } from '@/store/names/modules.names';
import { MainStatisticsActionsType } from '@/store/modules/mainStatistics/names/actions.names';
import { WinLooseListType } from '@/components/customComponents/WeeklyList/types';
import { getStatisticOptions, StatisticType } from '@/app.options/statisticsOption';

export default defineComponent({
  name: 'WeeklyListPair',

  components: { WeeklyList },

  props: {
    type: {
      type: String as PropType<StatisticType>,
      required: true
    },
  },

  setup(props) {
    const { getters, dispatch } = useStore();

    const winLooseStat = computed(() =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      <WinLoose>getters[`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsGettersType.GET_WIN_LOOSE_BY_TYPE}`](props.type));

    const isLoading = computed(() =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      <WinLoose>getters[`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsGettersType.IS_LOADING_WIN_LOOSE_BY_TYPE}`](props.type));

    const options = computed(() => getStatisticOptions(props.type));

    onMounted(async() => {
      await dispatch(`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsActionsType.FETCH_WIN_LOOSE_BY_TYPE}`, props.type);
    });

    return {
      winLooseStat,
      options,
      WinLooseListType,
      isLoading
    };
  }
});
