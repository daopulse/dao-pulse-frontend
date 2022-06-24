import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseChip',

  props: {
    label: {
      type: String,
    },
    className: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['remove', 'click'],

  setup(props, { emit }) {
    const remove = () => emit('remove');
    const click = () => emit('click');

    return { remove, click };
  },
});
