import { computed, defineComponent, onMounted, PropType, ref, watch } from 'vue';
import BaseChart from '@/components/baseComponents/BaseChart/BaseChart.vue';
import IntervalController from '@/components/IntervalController/IntervalController.vue';
import { SingleValueData } from 'lightweight-charts';
import { useStore } from '@/store';
import { TimePeriods } from '@/app.options/chartLabelOptions';
import { getDefaultPeriod } from '@/components/Chart/getDefaultPeriod';
import CardChart from '@/components/customComponents/CardChart/CardChart.vue';
import CardChartStats from '@/components/customComponents/CardChartStats/CardChartStats.vue';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { getStatisticOptions, StatisticType } from '@/app.options/statisticsOption';
import { SumStatisticGrouped } from '@/store/modules/mainStatistics/types';
import { ModulesNames } from '@/store/names/modules.names';
import { MainStatisticsGettersType } from '@/store/modules/mainStatistics/names/getters.names';
import { MainStatisticsActionsType } from '@/store/modules/mainStatistics/names/actions.names';
import StatisticTypeController from '@/components/StatisticTypeController/StatisticTypeController.vue';
import { ChartUniqNames, getChartOptions } from '@/app.options/chartsOptions';
import { getDefaultType } from '@/components/Chart/getDefaultType';
import { storageStatisticPeriodKey, storageStatisticTypeKey } from '@/app.options/constant';

export default defineComponent({
  name: 'Chart',

  components: {
    BaseChart,
    IntervalController,
    CardChart,
    CardChartStats,
    StatisticTypeController
  },

  props: {
    uniqName: {
      type: String as PropType<ChartUniqNames>,
      required: true
    },
    id: String,
    notScalable: {
      type: Boolean,
      default: false,
    },
    existedStatisticTypes: {
      type: Array as PropType<StatisticType[]>
    }
  },

  setup(props) {
    const { getters, dispatch } = useStore();
    const { save } = localStorageSaveService();

    const chartOptions = computed(() => getChartOptions(props.uniqName));
    const statisticOptions = ref(getStatisticOptions(chartOptions.value.defaultType));

    const statistic = computed(() =>
      <SingleValueData[]>getters[`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsGettersType.GET_STATISTIC_BY_UNIQ_NAME}`](props.uniqName));
    const statisticSum = computed(() =>
      <SumStatisticGrouped>getters[`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsGettersType.GET_SUM_STATISTIC_BY_UNIQ_NAME}`](props.uniqName));
    const isLoading = computed(() =>
      <SumStatisticGrouped>getters[`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsGettersType.IS_LOADING_CHART_BY_UNIQ_NAME}`](props.uniqName));

    const typeRef = ref();
    const defaultType = getDefaultType(props.uniqName, chartOptions.value.defaultType);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const type = computed(() => typeRef.value?.activeType || defaultType);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    watch(() => type.value, () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      statisticOptions.value = getStatisticOptions(type.value);
    });

    const controllerRef = ref();
    const defaultPeriod = getDefaultPeriod(chartOptions.value.defaultType, props.uniqName);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const period = computed(() => controllerRef.value?.activePeriod || defaultPeriod);

    onMounted(async() => {
      try {
        await dispatch(`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsActionsType.FETCH_STATISTIC_BY_UNIQ_NAME}`, {
          type: type.value,
          uniqName: props.uniqName,
          payload: defaultPeriod,
          id: props.id,
          requestNewSum: true
        });
      } catch (e) {
        console.error(e);
      }
    });

    const changePeriod = async(period: TimePeriods) => {
      save(period, `${storageStatisticPeriodKey}${props.uniqName}`);
      await dispatch(`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsActionsType.FETCH_STATISTIC_BY_UNIQ_NAME}`, {
        type: type.value,
        uniqName: props.uniqName,
        //TODO
        payload: period,
        id: props.id,
        requestNewSum: false
      });
    };

    const changeType = async(type: StatisticType) => {
      save(type, `${storageStatisticTypeKey}${props.uniqName}`);
      await dispatch(`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsActionsType.FETCH_STATISTIC_BY_UNIQ_NAME}`, {
        type: type,
        uniqName: props.uniqName,
        payload: period.value,
        id: props.id,
        requestNewSum: true
      });
    };

    return {
      changeType,
      period,
      statisticSum,
      controllerRef,
      changePeriod,
      type,
      StatisticType,
      chartOptions,
      typeRef,
      statistic,
      statisticOptions,
      defaultPeriod,
      isLoading
    };
  }
});
