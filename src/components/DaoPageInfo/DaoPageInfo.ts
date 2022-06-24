import { defineComponent, onMounted, onUnmounted, PropType } from 'vue';
import { getDataForCell } from '@/utils/getDataForCell';
import { useLayout } from '@/composables/useLayout';
import { getDate } from '@/utils/getDate';
import { Screen } from 'quasar';
import InfoItem from '@/components/customComponents/InfoItem/InfoItem.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import ClipboardCopy from '@/components/customComponents/ClipboardCopy/ClipboardCopy.vue';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';
import { DaoItem, SocialProfilesList } from '@/store/modules/dao/types';
import DaoRank from '@/components/DaoRank/DaoRank.vue';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import { ColumnNames, getColumnOptions } from '@/app.options/columns';

export default defineComponent({
  name: 'DaoPageInfo',

  components: { InfoItem, ExternalLink, ClipboardCopy, TokenGroup, DaoRank },

  props: {
    item: {
      type: Object as PropType<DaoItem>,
    },
  },
  setup() {
    const { getLabelLink, getSocialLinksByName, getLinkByName, setDraggableX } = useLayout();
    const getApprovedTokens = () => {
      return null;
    };
    onMounted(() => {
      const el = document.getElementById('info-list');
      if (el && el.draggable) setDraggableX(el, false);
    });

    onUnmounted(() => {
      const el = document.getElementById('info-list');
      if (el && el.draggable) setDraggableX(el, true);
    });

    return {
      getConvertedNumber,
      getSocialLinksByName,
      getLabelLink,
      getLinkByName,
      SocialProfilesList,
      getDataForCell,
      getDate,
      getApprovedTokens,
      Screen,
      getColumnOptions,
      ColumnNames,
    };
  },
});
