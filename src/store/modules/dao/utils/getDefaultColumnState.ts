import { getColumns, defaultColumns, unRemovableColumns, ColumnNames } from '@/app.options/columns';
import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { ColumnState } from '@/store/modules/dao/types';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { activeColumn } from '@/store/modules/dao/constants';

const { load } = localStorageSaveService();

const getColumnNamesFromStorage = () => {
  const columns = <ColumnState[]>load(activeColumn);

  if (columns?.length) {
    return columns
      .filter(item => item.isVisible)
      .map((item) => item.name);
  }

  return defaultColumns;
};

export const isDefaultActive = (item: TableColumn) => {
  return getColumnNamesFromStorage().includes(item.name);
};

export const getDefaultColumnState = (): ColumnState[] => {
  return getColumns()
    .map((item) => {
      return { ...item, isVisible: isDefaultActive(item) };
    })
    .filter(item => !unRemovableColumns.includes(item.name as  ColumnNames));
};
