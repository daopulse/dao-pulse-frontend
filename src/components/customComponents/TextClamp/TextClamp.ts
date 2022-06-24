import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TextClamp',
  props: {
    text: {
      type: String,
      default: 'No data',
    },
    line: {
      type: [String, Number],
      default: 3,
    },
    symbol: {
      type: [String, Number],
      default: 320,
    },
    clampType: {
      type: String,
      default: 'line',
    },
    textFormat: {
      type: String,
      default: 'text'
    },
    expandable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const isClamp = ref(true);
    const toggleText = () => {
      isClamp.value = !isClamp.value;
    };
    const textClamp = () => {
      return props.clampType === 'symbol' && isClamp
        ? `${props.text?.substring(0, +props.symbol)}...`
        : props.text;
    };
    const getStyle = () => {
      return props.clampType === 'line' && isClamp || props.textFormat === 'html' && isClamp
        ? `-webkit-line-clamp: ${props.line}`
        : '';
    };
    return {
      isClamp,
      toggleText,
      textClamp,
      getStyle,
    };
  },
});
