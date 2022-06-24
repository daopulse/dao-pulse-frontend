import { defineComponent } from 'vue';
import { Screen } from 'quasar';
import TooltipIcon from '@/components/customComponents/TooltipIcon/TooltipIcon.vue';

export default defineComponent({
  name: 'SectionTitle',
  components: {
    TooltipIcon
  },
  props: {
    title: String,
    subtitle: String,
    tooltip: {
      type: String,
      default: null
    },
    light: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    return {
      Screen
    };
  }
});
