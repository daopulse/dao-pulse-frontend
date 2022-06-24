import { defineComponent, ref, watch } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
  name: 'BaseCheckbox',

  props: {
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
    className: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    star: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean],
    },
  },

  setup(props) {
    const state = ref(props.isChecked);

    const { checked, handleChange } = useField(props.name, undefined, {
      type: 'checkbox',
      checkedValue: props.value,
      uncheckedValue: undefined
    });

    watch(() => checked, () => {
      state.value = !!checked?.value;
    }, { deep: true });

    const update = () => {
      handleChange(props.value);
      state.value = !state.value;
    };

    return {
      update,
      state,
      handleChange,
      checked
    };
  }
});
