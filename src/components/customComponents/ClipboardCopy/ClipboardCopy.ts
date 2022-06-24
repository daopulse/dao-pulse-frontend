import { defineComponent, ref } from 'vue';
import { useLayout } from '@/composables/useLayout';

export default defineComponent({
  name: 'ClipboardCopy',

  props: {
    data: {
      type: String,
      required: true
    },
    color: {
      type: String,
    },
    textEllipsis: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const visibleTooltip = ref(false);
    const { ellipsisText, copyToClipboard } = useLayout();

    const copyText = () => {
      visibleTooltip.value = true;
      copyToClipboard(props.data);
      setTimeout(() => visibleTooltip.value = false, 2000);
    };

    return {
      copyText,
      visibleTooltip,
      ellipsisText,
      copyToClipboard,
    };
  },
});
