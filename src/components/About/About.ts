import { defineComponent } from 'vue';
import { about } from '@/app.options/constant';
import { Screen } from 'quasar';

export default defineComponent({
  name: 'About',

  setup() {
    return {
      about,
      Screen,
    };
  },
});
