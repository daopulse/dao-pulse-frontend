import { defineComponent } from 'vue';
import TooltipIcon from '@/components/customComponents/TooltipIcon/TooltipIcon.vue';

export default defineComponent({
  name: 'InfoItem',
  components: { TooltipIcon },

  props: {
    caption: {
      type: String,
      default: null
    },
    data: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    }
  }
});
