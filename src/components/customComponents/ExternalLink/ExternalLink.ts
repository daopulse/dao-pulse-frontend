import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExternalLink',

  props: {
    url: {
      type: String,
    },
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
