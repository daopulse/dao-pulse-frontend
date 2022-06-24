import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BaseInputDate',

  components: {},

  props: {
    className: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
    },
  },

  setup() {
    const value = ref();

    return {
      value,
    };
  }
});
