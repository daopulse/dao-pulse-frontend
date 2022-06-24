import { defineComponent } from 'vue';
import BaseBadge from '@/components/baseComponents/BaseBadge/BaseBadge.vue';

export default defineComponent({
  name: 'HeaderTitle',
  components: { BaseBadge },
  props: {
    name: {
      type: String,
      default: null,
    },
    symbol: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
});
