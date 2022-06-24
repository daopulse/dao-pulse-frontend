import { defineComponent } from 'vue';
import { RouterNames } from '@/router/router.names';

export default defineComponent({
  name: 'PageNotFound',

  setup(){
    return{
      RouterNames
    };
  }
});
