import { defineComponent, ref } from 'vue';
import BaseDropDownMenu from '@/components/baseComponents/BaseDropDownMenu/BaseDropDownMenu.vue';
import BaseCheckbox from '@/components/baseComponents/BaseCheckbox/BaseCheckbox.vue';
import BaseInputDate from '@/components/baseComponents/BaseInputDate/BaseInputDate.vue';

export default defineComponent({
  name: 'DaoProposalFiltersForm',
  components: { BaseDropDownMenu, BaseCheckbox, BaseInputDate },
  props: {},

  setup() {
    const date = ref({
      from: null,
      to: null,
      isVisible: false
    });
    return {
      date,
    };
  }

});
