import { DaoItem, Filters } from '@/store/modules/dao/types';
import { getColumnOptions } from '@/app.options/columns';

export const filterDaoListService = (list: DaoItem[], filters?: Filters): DaoItem[] => {
  if(!filters) return [...list];

  let filteredList = [...list];

  Object.entries(filters).forEach(([_, value]) => {
    if(
      !value.isChecked ||
      (value.value === null) ||
      (value.value === undefined) ||
      (Array.isArray(value.value) && !value.value?.length)
    ) return;

    const { filterFunction, filedToData, addFieldToData } = getColumnOptions(value.type);

    filteredList = filterFunction!({
      list: filteredList,
      filter: value.value,
      fieldToName: filedToData,
      fieldToSymbol: addFieldToData,
    });

  });

  return filteredList;
};
