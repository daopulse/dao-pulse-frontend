import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',

  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'submit'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    to: {
      type: Object
    }
  },

  emits: ['click'],

  setup(_, { emit }) {
    const click = () => emit('click');

    return {
      click
    };
  }
});
