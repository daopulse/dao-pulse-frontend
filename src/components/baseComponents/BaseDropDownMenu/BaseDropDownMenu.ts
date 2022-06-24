import { defineComponent, ref } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
export default defineComponent({
  name: 'BaseDropDownMenu',
  components: {
    BaseButton,
  },

  props: {
    label: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    to: {
      type: String,
    },
    header: {
      type: String,
    },
    position: {
      type: String,
      default: 'left',
    },
    listStyle: {
      type: String,
      default: null,
    },
    iconToggle: {
      type: Boolean,
      default: false
    },
    appendTo: {
      type: String,
      default: '.ui-dd-menu-area'
    },
  },

  emits: ['click'],

  setup(_, { emit }) {

    const isVisible = ref(false);

    const click = () => {
      emit('click');
      isVisible.value ? (isVisible.value = false) : (isVisible.value = true);
    };

    const close = () => {
      isVisible.value = false;
    };

    const getIconRight = () => {
      return isVisible.value ? 'rotate-180' : '';
    };
    return {
      click,
      close,
      isVisible,
      getIconRight,
    };
  },
});
