import { computed, defineComponent, PropType } from 'vue';
import LinearShares from '@/components/customComponents/LinearShares/LinearShares.vue';
import BaseBadge from '@/components/baseComponents/BaseBadge/BaseBadge.vue';
import ClipboardCopy from '@/components/customComponents/ClipboardCopy/ClipboardCopy.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import TextClamp from '@/components/customComponents/TextClamp/TextClamp.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { marked } from 'marked';
import { getDate } from '@/utils/getDate';
import { Proposal, ProposalState } from '@/store/modules/dao/types';
import { useLayout } from '@/composables/useLayout';

export default defineComponent({
  name: 'Proposal',
  components: { LinearShares, BaseBadge, ClipboardCopy, ExternalLink, TextClamp },
  props: {
    data: {
      type: Object as PropType<Proposal>,
      required: true
    }
  },
  setup(props) {
    const { getLabelLink } = useLayout();

    const votes = computed(() => {
      return {
        name: 'Votes results',
        quorum: props.data.quorumCount,
        total: props.data.scores.reduce((acc, curr) => acc + curr.score, 0),
        variant: props.data.scores.map(item => {
          return {
            title: item.choiceName,
            data: item.score
          };
        }),
      };
    });

    const shares = computed(() => {
      return {
        name: 'Shares',
        total: 1000,
        variant: [
          {
            title: 'Variant 1',
            data: 800
          },
          {
            title: 'Variant 2',
            data: 50
          },
          {
            title: 'Variant description',
            data: 150
          }
        ]
      };
    });

    const toHTML = computed(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore, eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
      return marked(props.data.description);
    });

    return {
      votes,
      getDate,
      getLabelLink,
      ProposalState,
      toHTML,
      shares
    };
  }
});
