import type { DaoItem } from '@/store/modules/dao/types';
import { isNumber } from 'lodash';
import { Paginator } from '@/components/baseComponents/BaseTable/types';
import { makeDateFromISOToTimestamp } from '@/utils/getDate';
import { isNotData } from '@/utils/getDataForCell';
import { ColumnNames, getColumnOptions } from '@/app.options/columns';
import { getDataByArrOfFields } from '@/services/utils/getDataByArrOfFields';

export const getSort = (items: DaoItem[], pag: Paginator): DaoItem[] => {
  const descending = pag.descending;
  const { filedToData, isDate } = getColumnOptions(pag.sortBy as ColumnNames);

  const sortedItems = items.sort((a, b) => {
    let valueA = getDataByArrOfFields(a, filedToData!);
    let valueB = getDataByArrOfFields(b, filedToData!);

    if(pag.sortBy === ColumnNames.RANK) {
      if(isNumber(valueA) && !isNumber(valueB)) return 1;
      if(!isNumber(valueA) && isNumber(valueB)) return -1;
    }

    if (isNotData(valueA) && !isNotData(valueB)) return 1;
    if (!isNotData(valueA) && isNotData(valueB)) return -1;
    if (isNotData(valueA) && isNotData(valueB)) return 0;

    if(isDate) {
      valueA = makeDateFromISOToTimestamp(valueA as string);
      valueB = makeDateFromISOToTimestamp(valueB as string);
    }

    if(typeof valueA === 'boolean') {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }

    const sortedValueA = isNumber(valueA) ? valueA : ((valueA as string)?.toString() || '').toLowerCase();
    const sortedValueB = isNumber(valueB) ? valueB : ((valueB as string)?.toString() || '').toLowerCase();


    if (isNumber(sortedValueA) ? (sortedValueA > sortedValueB) : (sortedValueA < sortedValueB)) {
      return -1;
    } else if (isNumber(sortedValueA) ? (sortedValueA < sortedValueB) : (sortedValueA > sortedValueB)) {
      return 1;
    } else {
      return 0;
    }
  });

  return descending ? sortedItems : sortedItems.reverse();
};

export const getPage = (items: DaoItem[], pag: Paginator,): DaoItem[] => {
  const { rowsPerPage, page } = pag;
  if(rowsPerPage === 0) { return items; }
  return items.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};
