import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TooltipIcon',
  props: {
    tooltip: String,
    color: String,
    size: { type: String, default: '16px' },
    noSpace: { type: Boolean, default: false },
  },
  setup(props) {
    const getClass = () => {
      return props.color
        ? 'ui-tooltip-icon text-' + props.color
        : 'ui-tooltip-icon';
    };
    return {
      getClass,
    };
  },
});
