import { computed, defineComponent, PropType } from 'vue';
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import { getDate } from '@/utils/getDate';
import { useField } from 'vee-validate';

interface Period {
  from?: string;
  to?: string;
}
export default defineComponent({
  name: 'BaseDropDownDate',

  components: {
    BaseDropDownButton,
  },

  props: {
    className: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
    },
    model: {
      type: Object as PropType<Period>,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },

  setup(props) {
    const { value } = useField(props.name, {}, {});

    const getLabel = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return `${getDate(value.value.from, 'DD MMM')} - ${getDate(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        value.value.to,
        'DD MMM'
      )}`;
    });

    return {
      value,
      getLabel,
    };
  },
});
