import { computed, defineComponent, PropType } from 'vue';
import TokenIcon from '@/components/customComponents/TokenIcon/TokenIcon.vue';
import BaseTag from '@/components/baseComponents/BaseTag/BaseTag.vue';

interface Token {
  symbol: {
    type: string;
  };
  icon?: {
    type: string;
  };
}

export default defineComponent({
  name: 'TokenGroup',
  components: { TokenIcon, BaseTag },
  props: {
    tokens: {
      type: Array as PropType<Array<Token>>,
      default: null,
    },
    iconSize: {
      type: String,
      default: '16',
    },
    iconCount: { type: Number, default: 5 },
    imgPlaceholder: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const count = Math.min(props.iconCount, props.tokens?.length);
    const visibleList = computed(() =>
      props.tokens ? props.tokens.slice(0, count) : null
    );
    const tooltipList = computed(() =>
      props.tokens ? props.tokens.slice(-(props.tokens.length - count)) : null
    );
    const getPlus = () => {
      return props.tokens.length > props.iconCount
        ? props.tokens.length - props.iconCount
        : null;
    };

    return {
      visibleList,
      tooltipList,
      getPlus,
    };
  },
});
