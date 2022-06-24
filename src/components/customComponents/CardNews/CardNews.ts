import { defineComponent, PropType } from 'vue';
import { getDate } from '@/utils/getDate';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import BaseTag from '@/components/baseComponents/BaseTag/BaseTag.vue';
import { Screen } from 'quasar';
import TextClamp from '@/components/customComponents/TextClamp/TextClamp.vue';
import { NewsItem } from '@/store/modules/news/types';
import { useLayout } from '@/composables/useLayout';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';
import { RouterNames } from '@/router/router.names';

export default defineComponent({
  name: 'CardNews',

  components: {
    ExternalLink,
    BaseTag,
    TextClamp,
    TokenGroup,
  },

  props: {
    data: {
      type: Object as PropType<NewsItem>,
    },
    asIs: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { getLabelLink } = useLayout();
    const getDaoIcons = () => {
      return props.data?.relatedDAOLogoUrlListRaw?.length
        ? props.data?.relatedDAOLogoUrlListRaw?.map((item, index) => ({
          icon: item,
          symbol: index,
        }))
        : 'null';
    };
    return {
      RouterNames,
      getLabelLink,
      getDate,
      getDaoIcons,
      Screen,
    };
  },
});
