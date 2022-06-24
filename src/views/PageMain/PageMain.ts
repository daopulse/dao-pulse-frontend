import { computed, defineComponent, onMounted, ref, watch, onBeforeMount } from 'vue';
import DaoTable from '@/components/DaoTable/DaoTable.vue';
import { useStore } from '@/store';
import DaoTableFiltersForm from '@/components/forms/DaoTableFiltersForm/DaoTableFiltersForm.vue';
import SectionTitle from '@/components/customComponents/SectionTitle/SectionTitle.vue';
import Chart from '@/components/Chart/Chart.vue';
import BaseToggle from '@/components/baseComponents/BaseToggle/BaseToggle.vue';
import { useQuasar } from 'quasar';
import { useLayout } from '@/composables/useLayout';
import WeeklyListPair from '@/components/customComponents/WeeklyListPair/WeeklyListPair.vue';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { isVisibleMainStatistic } from '@/views/PageMain/constants';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import { StatisticType } from '@/app.options/statisticsOption';
import { DaoItem } from '@/store/modules/dao/types';
import { DaoActionsType } from '@/store/modules/dao/names/actions.names';
import { ModulesNames } from '@/store/names/modules.names';
import About from '@/components/About/About.vue';
import { ChartUniqNames } from '@/app.options/chartsOptions';
import { NewsActionsType } from '@/store/modules/news/names/actions.names';
import { NewsItem } from '@/store/modules/news/types';
import { NewsGettersType } from '@/store/modules/news/names/getters.names';
import NewsList from '@/components/NewsList/NewsList.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { getDate } from '@/utils/getDate';
import { Screen } from 'quasar';
import { RouterNames } from '@/router/router.names';
import { MainStatisticsGettersType } from '@/store/modules/mainStatistics/names/getters.names';

export default defineComponent({
  name: 'PageMain',

  components: {
    DaoTable,
    DaoTableFiltersForm,
    SectionTitle,
    Chart,
    BaseToggle,
    WeeklyListPair,
    About,
    NewsList,
    BaseButton
  },

  setup() {
    const { dispatch, getters } = useStore();
    const $q = useQuasar();
    const { chartViewDif } = useLayout();
    const { save, load } = localStorageSaveService();

    const daoList = computed(() => <DaoItem[]>getters[`${ModulesNames.DAO}/${DaoGettersType.GET_LIST}`]);
    const news = computed(() => <NewsItem[]>getters[`${ModulesNames.NEWS}/${NewsGettersType.GET_MAIN_NEWS}`]);
    const lastUpdatedNews = computed(() => <string>getters[`${ModulesNames.NEWS}/${NewsGettersType.GET_LAST_UPDATED_MAIN_NEWS}`]);
    const lastUpdatedStat = computed(() => <string>getters[`${ModulesNames.MAIN_STATISTICS}/${MainStatisticsGettersType.GET_LAST_UPDATED_STAT}`]);
    const lastUpdatedDaoList = computed(() => <string>getters[`${ModulesNames.MAIN_STATISTICS}/${DaoGettersType.GET_LAST_UPDATED_LIST}`]);

    const isVisibleStatistic = ref($q.screen.gt.xs);
    watch(() => isVisibleStatistic.value, () => {
      save(isVisibleStatistic.value, isVisibleMainStatistic);
    });

    onBeforeMount(() => {
      const isVisible = <boolean>load(isVisibleMainStatistic);
      if(isVisible !== undefined) {
        isVisibleStatistic.value = isVisible;
      }
    });

    onMounted(() => {
      try {
        if(!daoList.value.length) void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_DAO_LIST}`);
        void dispatch(`${ModulesNames.NEWS}/${NewsActionsType.FETCH_MAIN_NEWS}`);
      } catch (e) {
        console.error(e);
      }
    });

    return {
      lastUpdatedDaoList,
      lastUpdatedStat,
      news,
      lastUpdatedNews,
      isVisibleStatistic,
      RouterNames,
      daoList,
      chartViewDif,
      ChartUniqNames,
      StatisticType,
      Screen,
      getDate,
    };
  }
});
