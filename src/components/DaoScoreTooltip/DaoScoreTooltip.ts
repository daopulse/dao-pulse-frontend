import { computed, defineComponent } from 'vue';
import { scoreFormula } from '@/app.options/constant';

export default defineComponent({
  name: 'DaoScoreTooltip',
  props: {},
  setup() {
    const multiplier = computed(() => Object.keys(scoreFormula.multiplier));
    return {
      scoreFormula,
      multiplier,
    };
  },
});
