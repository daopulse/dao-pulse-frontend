import { DaoItem } from '@/store/modules/dao/types';
import { getDataByArrOfFields } from '@/services/utils/getDataByArrOfFields';

export type FilterUnitOptions<T> = {
  list: DaoItem[];
  filter: T,
  fieldToName: string[],
  fieldToSymbol?: string[]
}

export const filterByName = (options: FilterUnitOptions<string>) => {
  const { list, filter, fieldToName, fieldToSymbol } = options;
  return list.filter((item) => {
    const name = getDataByArrOfFields(item, fieldToName) as string;
    const symbol = getDataByArrOfFields(item, fieldToSymbol!) as string;
    return (
      name.toLowerCase().includes(filter.toLowerCase()) ||
      symbol.toLowerCase().includes(filter.toLowerCase())
    );
  });
};

export const filterByBool = (options: FilterUnitOptions<boolean>) => {
  const { list, filter, fieldToName } = options;
  return list.filter((item) => filter === getDataByArrOfFields(item, fieldToName));
};

export const filterByMinMax = (options: FilterUnitOptions<[number, number]>) => {
  const { list, filter, fieldToName } = options;
  const from = filter[0];
  const to = filter[1];

  return list.filter((item) => {
    const itemValue = getDataByArrOfFields(item, fieldToName) as number;

    if(from === undefined && to === undefined) { return  true; }

    const isMoreThanFrom = (!from || (+itemValue >= from));
    const isLessThanTo = (!to || (itemValue <= to));

    return (isMoreThanFrom && isLessThanTo);
  });
};

export const filterByIncludes = (options: FilterUnitOptions<string[]>) => {
  const { list, filter, fieldToName } = options;
  return list.filter((item) => {
    const itemValue = getDataByArrOfFields(item, fieldToName) as string;
    return filter.includes(itemValue);
  });
};

