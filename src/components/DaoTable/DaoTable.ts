import BaseTable from '@/components/baseComponents/BaseTable/BaseTable.vue';
import { ColumnNames, getColumns, getColumnOptions, getTemplateFullName } from '@/app.options/columns';
import { useStore } from '@/store';
import TokenFullName from '@/components/customComponents/TokenFullName/TokenFullName.vue';
import BaseBadge from '@/components/baseComponents/BaseBadge/BaseBadge.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import ClipboardCopy from '@/components/customComponents/ClipboardCopy/ClipboardCopy.vue';
import SocialLink from '@/components/customComponents/SocialLink/SocialLink.vue';
import { useLayout } from '@/composables/useLayout';
import { Paginator } from '@/components/baseComponents/BaseTable/types';
import { computed, defineComponent, PropType } from 'vue';
import { DaoItem, SocialProfilesList } from '@/store/modules/dao/types';
import { ModulesNames } from '@/store/names/modules.names';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import { DaoMutationsType } from '@/store/modules/dao/names/mutations.names';
import TooltipIcon from '@/components/customComponents/TooltipIcon/TooltipIcon.vue';
import DaoScoreTooltip from '@/components/DaoScoreTooltip/DaoScoreTooltip.vue';

export default defineComponent({
  name: 'DaoTable',

  components: {
    BaseTable,
    TokenFullName,
    BaseBadge,
    ExternalLink,
    ClipboardCopy,
    SocialLink,
    TooltipIcon,
    DaoScoreTooltip
  },

  props: {
    list: {
      type: Array as PropType<DaoItem[]>,
      required: true,
    },
  },

  setup() {
    const { getters, state, commit } = useStore();
    const { getLabelLink, getSocialLinksByName, getLinkByName  } = useLayout();

    const watched = computed(() =>
      <DaoItem[]>(getters[`${ModulesNames.DAO}/${DaoGettersType.GET_WATCHED_LIST}`]));

    const watchedCount = computed(() =>
      <number>(getters[`${ModulesNames.DAO}/${DaoGettersType.GET_WATCHED_FILTERED_DAO_COUNT}`]));

    const paginator = computed(() =>
      <Paginator>(getters[`${ModulesNames.DAO}/${DaoGettersType.GET_PAGINATOR}`]));

    const visibleColumns = computed(() =>
      <string[]>(getters[`${ModulesNames.DAO}/${DaoGettersType.GET_VISIBLE_COLUMNS_NAMES}`]));

    const updateWatched = (items: DaoItem[]) => {
      commit(`${ModulesNames.DAO}/${DaoMutationsType.SET_SELECTED_DAO}`, items);
    };

    const getPaginationLabel = (first: number, last: number, total: number) =>
      `${first}-${(last > total) ? total : last} of ${total}${watchedCount.value ? `, +${watchedCount.value} DAO watched` : ''}`;

    const changePaginator = (paginator: Paginator) => {
      commit(`${ModulesNames.DAO}/${DaoMutationsType.SET_PAGINATOR}`, paginator);
    };

    return {
      watched,
      watchedCount,
      changePaginator,
      getPaginationLabel,
      updateWatched,
      getColumns,
      getLinkByName,
      getColumnOptions,
      getSocialLinksByName,
      getTemplateFullName,
      ColumnNames,
      SocialProfilesList,
      state,
      visibleColumns,
      getLabelLink,
      paginator,
    };
  },
});
