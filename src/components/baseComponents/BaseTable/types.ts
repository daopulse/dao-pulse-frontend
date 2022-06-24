import { DaoItem } from '@/store/modules/dao/types';

export type TableColumn = {
  name: string,
  label: string,
  field?: any,
  align?: string,
  sortable: boolean,
  style?: string,
  required?: boolean,
  sort?: any,
  filterFunction?: (...args: any[]) => DaoItem[],
  isDate?: boolean,
  filedToData?: string[],
  addFieldToData?: string[],
  tooltip?: string
};

export type Paginator = {
  sortBy?: string | boolean | number,
  descending?: boolean,
  page: number,
  rowsPerPage: number,
  rowsNumber: number
}
