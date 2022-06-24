import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTag',

  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      default: ''
    },
    isTooltip: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },
});
