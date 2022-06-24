import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TokenIcon',
  props: {
    size: {
      type: [String, Number],
      default: '',
    },
    source: {
      type: String,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const imgSize = props.size ? `${props.size}px` : '24px';

    return {
      imgSize,
    };
  },
});
