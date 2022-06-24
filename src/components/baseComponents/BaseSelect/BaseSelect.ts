import { defineComponent, PropType } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
  name: 'BaseSelect',

  components: {},

  props: {
    className: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    propValue: {
      type: [Number, String, Object]
    },
    options: {
      type: Array as PropType<object[]>,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: [String, Number],
      default: 0
    },
    hint: {
      type: String,
    },
    multiple: {
      type: Boolean,
      default: false
    },
    useChips: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    behavior: {
      type: String,
      default: 'menu'
    },
    emitValue: {
      type: Boolean,
      default: false
    },
    forId: {
      type: String
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { errorMessage, value } = useField(props.name, {}, {
      initialValue: props.propValue
    });

    return {
      value,
      errorMessage,
    };
  }
});
