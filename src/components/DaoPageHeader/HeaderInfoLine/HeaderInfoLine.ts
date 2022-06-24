import { defineComponent, PropType } from 'vue';
import InfoItem from '@/components/customComponents/InfoItem/InfoItem.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import { useLayout } from '@/composables/useLayout';
import { getDate } from '@/utils/getDate';
import { DaoItem, SocialProfilesList } from '@/store/modules/dao/types';
import { Screen } from 'quasar';
import { ColumnNames, getColumnOptions } from '@/app.options/columns';

export default defineComponent({
  name: 'HeaderInfoLine',
  components: { InfoItem, ExternalLink },
  props: {
    data: {
      type: Object as PropType<DaoItem>,
      default: null,
    },
  },
  setup() {
    const { getLabelLink, getSocialLinksByName, getLinkByName } = useLayout();
    return {
      getLabelLink,
      getSocialLinksByName,
      getLinkByName,
      SocialProfilesList,
      getDate,
      Screen,
      getColumnOptions,
      ColumnNames
    };
  },
});
