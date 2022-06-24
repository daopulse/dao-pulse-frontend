import { computed, defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import DaoPageHeader from '@/components/DaoPageHeader/DaoPageHeader.vue';
import DaoPageInfo from '@/components/DaoPageInfo/DaoPageInfo.vue';
import DaoRate from '@/components/DaoRank/DaoRank.vue';
import NewsList from '@/components/NewsList/NewsList.vue';
import { useStore } from '@/store';
import { ModulesNames } from '@/store/names/modules.names';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import { DaoInfo, DaoItem, ProposalState } from '@/store/modules/dao/types';
import { DaoActionsType } from '@/store/modules/dao/names/actions.names';
import Chart from '@/components/Chart/Chart.vue';
import { StatisticType } from '@/app.options/statisticsOption';
import { ChartUniqNames } from '@/app.options/chartsOptions';
import Proposal from '@/components/Proposal/Proposal.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import { useLayout } from '@/composables/useLayout';
import { Screen } from 'quasar';
import DaoProposalFiltersForm from '@/components/forms/DaoProposalFiltersForm/DaoProposalFiltersForm.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { NewsActionsType } from '@/store/modules/news/names/actions.names';
import { NewsGettersType } from '@/store/modules/news/names/getters.names';
import { NewsItem } from '@/store/modules/news/types';
import { RouterNames } from '@/router/router.names';
import { getDate } from '@/utils/getDate';

export default defineComponent({
  name: 'PageDao',

  components: {
    DaoPageHeader,
    DaoPageInfo,
    DaoRate,
    NewsList,
    Chart,
    Proposal,
    ExternalLink,
    DaoProposalFiltersForm,
    BaseButton
  },

  setup() {
    const route = useRoute();
    const { getters, dispatch } = useStore();
    const { getLabelLink } = useLayout();

    const item = computed(() => <DaoInfo>getters[`${ModulesNames.DAO}/${DaoGettersType.GET_DAO}`]);
    const isLoading = computed(() => <boolean>getters[`${ModulesNames.DAO}/${DaoGettersType.IS_LOADING_DAO}`]);
    const proposals = computed(() => <ProposalState>getters[`${ModulesNames.DAO}/${DaoGettersType.GET_PROPOSALS}`]);
    const isLoadingProposals = computed(() => <boolean>getters[`${ModulesNames.DAO}/${DaoGettersType.IS_LOADING_PROPOSALS}`]);
    const isLastPropPage = computed(() => <boolean>getters[`${ModulesNames.DAO}/${DaoGettersType.IS_LAST_PROP_PAGE}`]);
    const isEmpty = computed(() => <boolean>getters[`${ModulesNames.DAO}/${DaoGettersType.IS_EMPTY_PROP_LIST}`]);
    const news = computed(() => <NewsItem[]>getters[`${ModulesNames.NEWS}/${NewsGettersType.GET_DAO_NEWS}`]);
    const proposalLastUpdate = computed(() => <string>getters[`${ModulesNames.DAO}/${DaoGettersType.GET_PROPOSALS_LAST_UPDATE}`]);
    const daoList = computed(() => <DaoItem[]>getters[`${ModulesNames.DAO}/${DaoGettersType.GET_LIST}`]);

    onMounted(() => {
      if(!daoList.value.length) void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_DAO_LIST}`);
      void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_DAO_BY_ID}`, route.params.id);
    });

    watch(() => item.value?.name, () => {
      if(!item.value?.name) return;
      void dispatch(`${ModulesNames.NEWS}/${NewsActionsType.FETCH_DAO_NEWS}`, item.value?.name);
      void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_PROPOSALS}`, item.value?.id);
    });

    watch(() => route.params.id, () => {
      if(!route.params.id) return;
      if(!daoList.value.length) void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_DAO_LIST}`);
      void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_DAO_BY_ID}`, route.params.id);
    });

    const addProposals = () => {
      void dispatch(`${ModulesNames.DAO}/${DaoActionsType.FETCH_PROPOSALS}`, item.value.id);
    };

    return {
      proposalLastUpdate,
      news,
      RouterNames,
      addProposals,
      route,
      getDate,
      proposals,
      isEmpty,
      isLoadingProposals,
      item,
      isLastPropPage,
      ChartUniqNames,
      isLoading,
      StatisticType,
      getLabelLink,
      Screen
    };
  }
});
