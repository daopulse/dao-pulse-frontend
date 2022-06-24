import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTableSkeleton',

  props: {
    rows: {
      type: [Number, String],
      default: 20,
    },
    cols: {
      type: [Number, String],
      default: 7,
    },
    columns: {
      type: Array,
      default: null,
    },
  },
});
