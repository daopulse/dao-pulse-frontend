import { defineComponent, computed, ref } from 'vue';
import BaseChip from '@/components/baseComponents/BaseChip/BaseChip.vue';
import { useStore } from '@/store';
import { ColumnState } from '@/store/modules/dao/types';
import BaseInputText from '@/components/baseComponents/BaseInputText/BaseInputText.vue';
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import { ModulesNames } from '@/store/names/modules.names';
import { DaoMutationsType } from '@/store/modules/dao/names/mutations.names';


export default defineComponent({
  name: 'ActiveColumnsFilter',

  components: {
    BaseChip,
    BaseInputText,
    BaseDropDownButton
  },

  setup() {
    const { getters, commit } = useStore();

    const query = ref('');
    const columns = computed(() => <ColumnState[]>getters[`${ModulesNames.DAO}/${DaoGettersType.GET_COLUMN_STATE}`]);

    const activeColumnState = computed(() => columns.value.filter(item => item.isVisible));

    const inActiveColumnState = computed(() =>
      columns.value.filter(item => !item.isVisible)
        .filter(item => item.label.toLowerCase().includes(query.value?.toLowerCase() || ''))
    );

    const toggleColumn = (changedColumn: ColumnState, isVisible: boolean) => {
      commit(`${ModulesNames.DAO}/${DaoMutationsType.SET_COLUMNS_IS_VISIBLE}`, { changedColumn, isVisible });
    };

    return {
      query,
      toggleColumn,
      activeColumnState,
      inActiveColumnState
    };
  }
});
