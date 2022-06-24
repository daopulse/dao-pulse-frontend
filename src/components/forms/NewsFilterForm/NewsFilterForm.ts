import { computed, defineComponent, inject, onBeforeMount, onMounted, PropType, ref, toRaw, watch } from 'vue';
import { Screen } from 'quasar';
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import BaseToggle from '@/components/baseComponents/BaseToggle/BaseToggle.vue';
import BaseInputText from '@/components/baseComponents/BaseInputText/BaseInputText.vue';
import BaseChip from '@/components/baseComponents/BaseChip/BaseChip.vue';
import BaseCheckbox from '@/components/baseComponents/BaseCheckbox/BaseCheckbox.vue';
import BaseDropDownDate from '@/components/baseComponents/BaseDropDownDate/BaseDropDownDate.vue';
import BaseForm from '@/components/baseComponents/BaseForm/BaseForm.vue';
import { useStore } from '@/store';
import { useForm } from 'vee-validate';
import { Dictionaries } from '@/store/state';
import { getDictionariesInjectName, isLoadingDictionariesInjectName } from '@/injectsNames/dictionariesInjects';
import { ModulesNames } from '@/store/names/modules.names';
import { NewsGettersType } from '@/store/modules/news/names/getters.names';
import { NewsMutationsType } from '@/store/modules/news/names/mutations.names';
import { schema } from '@/components/forms/NewsFilterForm/schema';
import { getNewsFilterFieldOptions, NewsFilterFormFields } from '@/components/forms/NewsFilterForm/types';
import BaseDropDownMenu from '@/components/baseComponents/BaseDropDownMenu/BaseDropDownMenu.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { cloneDeep } from 'lodash';
import { watchedDao } from '@/store/modules/dao/constants';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { DaoItem } from '@/store/modules/dao/types';

export default defineComponent({
  name: 'NewsFilterForm',
  components: {
    BaseDropDownMenu,
    BaseDropDownButton,
    BaseToggle,
    BaseInputText,
    BaseChip,
    BaseForm,
    BaseCheckbox,
    BaseDropDownDate,
    BaseButton
  },

  props: {
    defaultNames: {
      type: Array as PropType<string[]>
    }
  },

  emits: ['changeFilter'],

  setup(props, { emit }) {
    const { load } = localStorageSaveService();
    const { commit, getters } = useStore();
    const { handleSubmit, values, handleReset, setFieldValue } = useForm({ validationSchema: schema });
    const dictionaries = <Dictionaries>inject(getDictionariesInjectName);
    const isLoadingDic = <boolean>inject(isLoadingDictionariesInjectName);
    const isLoadingNews = computed(() => <boolean>getters[`${ModulesNames.NEWS}/${NewsGettersType.IS_LOADING_NEWS}`]);
    const hasWatchedDao = computed(() => !!(load(watchedDao) as DaoItem[])?.length);

    const isClearForm = computed(() => {
      const hasValueArray = Object.values(values).map(item => {
        const rowValue = toRaw(item);
        return Array.isArray(rowValue) ? !!rowValue.length : !!rowValue;
      });
      return !hasValueArray.some(item => item);
    });

    const isCollapse = ref(Screen.xs);
    const toggleCollapse = () => isCollapse.value = !isCollapse.value;

    const removeDao = (name: string) => {
      const newValues = cloneDeep(values);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const index = newValues[NewsFilterFormFields.DAO_NAMES].indexOf(name);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newValues[NewsFilterFormFields.DAO_NAMES].splice(index, 1);
      setFieldValue(NewsFilterFormFields.DAO_NAMES, newValues[NewsFilterFormFields.DAO_NAMES]);
    };

    const submitForm = handleSubmit((values) => {
      commit(`${ModulesNames.NEWS}/${NewsMutationsType.SET_FILTERS}`, values);
      emit('changeFilter');
    });

    const resetForm = () => {
      handleReset();
      setFieldValue(NewsFilterFormFields.DAO_NAMES, undefined);
    };

    onBeforeMount(() => {
      if(props.defaultNames?.length) {
        setFieldValue(NewsFilterFormFields.DAO_NAMES, props.defaultNames);
      }
    });

    onMounted(() => {
      watch(() => values, () => {
        void submitForm();
      }, { deep: true, immediate: true });
    });

    return {
      isClearForm,
      resetForm,
      getNewsFilterFieldOptions,
      dictionaries,
      isLoadingNews,
      hasWatchedDao,
      NewsFilterFormFields,
      setFieldValue,
      submitForm,
      isLoadingDic,
      handleReset,
      removeDao,
      values,
      Screen,
      isCollapse,
      toggleCollapse
    };
  },
});
