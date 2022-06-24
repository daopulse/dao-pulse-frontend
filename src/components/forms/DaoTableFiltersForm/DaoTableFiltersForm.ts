import { defineComponent, onMounted, watch, ref, inject, computed } from 'vue';
import { useForm } from 'vee-validate';
import BaseForm from '@/components/baseComponents/BaseForm/BaseForm.vue';
import BaseInputText from '@/components/baseComponents/BaseInputText/BaseInputText.vue';
import BaseSelect from '@/components/baseComponents/BaseSelect/BaseSelect.vue';
import { FilterFormFields, getFilterFieldOptions } from '@/components/forms/DaoTableFiltersForm/types';
import { schema } from '@/components/forms/DaoTableFiltersForm/schema';
import { InputTypes } from '@/components/baseComponents/BaseInputText/types';
import { useStore } from '@/store';
import BaseDropDownMenu from '@/components/baseComponents/BaseDropDownMenu/BaseDropDownMenu.vue';
import BaseCheckbox from '@/components/baseComponents/BaseCheckbox/BaseCheckbox.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { ModulesNames } from '@/store/names/modules.names';
import { DaoMutationsType } from '@/store/modules/dao/names/mutations.names';
import { getDictionariesInjectName, isLoadingDictionariesInjectName } from '@/injectsNames/dictionariesInjects';
import { Dictionaries } from '@/store/state';
import { DaoGettersType } from '@/store/modules/dao/names/getters.names';
import ActiveColumnsFilter from '@/components/ActiveColumnsFilter/ActiveColumnsFilter.vue';

export default defineComponent({
  name: 'DaoTableFiltersForm',

  components: {
    BaseForm,
    BaseInputText,
    BaseSelect,
    BaseDropDownMenu,
    BaseCheckbox,
    BaseButton,
    ActiveColumnsFilter
  },

  setup() {
    const { commit, getters } = useStore();
    const { handleSubmit, values, errors, handleReset } = useForm({ validationSchema: schema });
    const isVisibleFilters = ref(false);

    const blockchainOptions = <Dictionaries>inject(getDictionariesInjectName);
    const isLoadingDic = <boolean>inject(isLoadingDictionariesInjectName);
    const isLoadingDaoList = computed(() => <boolean>getters[`${ModulesNames.DAO}/${DaoGettersType.IS_LOADING_DAO_LIST}`]);

    onMounted(() => {
      watch(() => values, async() => {
        await submitForm();
      }, { deep: true });
    });


    const submitForm = handleSubmit((values) => {
      commit(`${ModulesNames.DAO}/${DaoMutationsType.SET_DAO_FILTERS}`, values);
    });

    const resetFilters = () => {
      handleReset();
    };

    return {
      isLoadingDic,
      isLoadingDaoList,
      blockchainOptions,
      errors,
      resetFilters,
      getFilterFieldOptions,
      values,
      submitForm,
      isVisibleFilters,
      InputTypes,
      FilterFormFields
    };
  }
});
