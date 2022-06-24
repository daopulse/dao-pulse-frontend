import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  props: {
    short: {
      type: Boolean,
      default: false,
    }
  }
});
