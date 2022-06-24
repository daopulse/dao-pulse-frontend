import { defineComponent } from 'vue';
import TokenIcon from '@/components/customComponents/TokenIcon/TokenIcon.vue';
import { RouterNames } from '@/router/router.names';

export default defineComponent({
  name: 'TokenFullName',
  components: {
    TokenIcon
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    symbol: {
      type: String
    },
    logo: {
      type: String,
      default: ''
    },
    logoSize: {
      type: String
    },
    id: {
      type: Number,
      required: true
    }
  },

  setup() {

    return{
      RouterNames
    };
  }
});
