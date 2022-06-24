import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLoader',

  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '50px'
    }
  },
  setup() {
    return {};
  }
});
