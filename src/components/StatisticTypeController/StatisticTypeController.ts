import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { getMappedStatisticOptions, StatisticType } from '@/app.options/statisticsOption';

export default defineComponent({
  name: 'IntervalController',

  components: {
    BaseButton
  },

  props: {
    defaultType: {
      type: String as PropType<StatisticType>
    },
    isLoading: {
      type: Boolean
    },
    existedStatisticTypes: {
      type: Array as PropType<StatisticType[]>
    }
  },

  emits: ['changedType'],

  setup(props, { emit }) {
    const mappedTypes = computed(() => {
      if(props.existedStatisticTypes) {
        return getMappedStatisticOptions().filter((item) => {
          return props.existedStatisticTypes!.includes(item.name);
        });
      }
      return getMappedStatisticOptions();
    });

    const activeType= ref(props.defaultType);

    onMounted(() => {
      const hasType = mappedTypes.value.filter((item) => {
        return item.name === activeType.value;
      });
      if(!hasType.length) {
        activeType.value = mappedTypes.value[0]?.name;
      }
    });

    const changeType = (type: StatisticType) => {
      activeType.value = type;
      emit('changedType', type);
    };

    return {
      changeType,
      activeType,
      mappedTypes
    };
  }
});
