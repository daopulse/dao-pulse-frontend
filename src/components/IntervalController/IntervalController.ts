import { computed, defineComponent, PropType, ref, watch } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { getMappedPeriodsTime, PeriodItem, TimePeriods } from '@/app.options/chartLabelOptions';

export default defineComponent({
  name: 'IntervalController',

  components: {
    BaseButton
  },

  props: {
    defaultPeriod: {
      type: String as PropType<TimePeriods>
    },
    isLoading: {
      type: Boolean
    },
    isOnlyLongRange: {
      type: Boolean
    },
  },

  emits: ['changedPeriod'],

  setup(props, { emit }) {
    const mappedPeriods = computed(() => getMappedPeriodsTime().filter((item: PeriodItem) => {
      return props.isOnlyLongRange ? !item.isShort : true;
    }));

    watch(() => props.isOnlyLongRange, () => {
      props.isOnlyLongRange && (activePeriod.value = TimePeriods.MONTHS_3);
    });

    const activePeriod = ref(props.defaultPeriod);

    const changePeriod = (period: TimePeriods) => {
      activePeriod.value = period;
      emit('changedPeriod', period);
    };

    return {
      changePeriod,
      activePeriod,
      TimePeriods,
      mappedPeriods
    };
  }
});
