import { defineComponent } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';


export default defineComponent({
  name: 'IconControl',

  components: { BaseButton },
  props: {
    icon: {
      type: String
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
