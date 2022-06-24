import { computed, defineComponent, PropType } from 'vue';
import TokenIcon from '@/components/customComponents/TokenIcon/TokenIcon.vue';
import BaseBadge from '@/components/baseComponents/BaseBadge/BaseBadge.vue';
import SocialLink from '@/components/customComponents/SocialLink/SocialLink.vue';
import { useLayout } from '@/composables/useLayout';
import { Screen } from 'quasar';
import HeaderInfoLine from './HeaderInfoLine/HeaderInfoLine.vue';
import { DaoItem, SocialProfilesList } from '@/store/modules/dao/types';
import DaoRank from '@/components/DaoRank/DaoRank.vue';
import HeaderTitle from '@/components/DaoPageHeader/HeaderTitle/HeaderTitle.vue';
import TextClamp from '@/components/customComponents/TextClamp/TextClamp.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { marked } from 'marked';

export default defineComponent({
  name: 'DaoPageHeader',

  components: { TokenIcon, BaseBadge, SocialLink, HeaderInfoLine, DaoRank, HeaderTitle, TextClamp },

  props: {
    item: {
      type: Object as PropType<DaoItem>,
    },
  },
  setup(props) {
    const { getSocialLinksByName } = useLayout();
    const getIconUrl = () => {
      return props.item?.logo.replace('64x64', '200x200');
    };

    const toHTML = computed(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore, eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
      return marked(props.item.description);
    });

    return {
      toHTML,
      getSocialLinksByName,
      SocialProfilesList,
      Screen,
      getIconUrl
    };
  },
});
