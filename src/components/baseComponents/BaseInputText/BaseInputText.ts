import { defineComponent, PropType } from 'vue';
import { useField } from 'vee-validate';
import { InputTypes } from '@/components/baseComponents/BaseInputText/types';

export default defineComponent({
  name: 'BaseInputText',

  components: {},

  props: {
    className: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    type: {
      type: String as PropType<InputTypes>,
      default: InputTypes.TEXT
    },
    propValue: {
      type: [Number, String]
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
    searchInput: {
      type: Boolean,
      default: false,
    },
    dateInput: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: true
    },
  },

  setup(props) {
    const { errorMessage, value } = useField(props.name, {}, {
      initialValue: props.propValue
    });

    return {
      value,
      errorMessage,
      InputTypes
    };
  }
});
