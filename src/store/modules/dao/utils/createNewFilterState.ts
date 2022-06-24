import {  Filters } from '@/store/modules/dao/types';
import { FilterData, FilterFormFields } from '@/components/forms/DaoTableFiltersForm/types';
import { getUndefinedableValue } from '@/utils/getUndefinedableValue';
import { ColumnNames } from '@/app.options/columns';

export const createNewFilterState = (payload: FilterData): Filters => {
  return  {
    [ColumnNames.NAME]: {
      isChecked: true,
      type: ColumnNames.NAME,
      value: payload[FilterFormFields.DAO_NAME]
    },
    [ColumnNames.STATUS]: {
      isChecked: payload[FilterFormFields.IS_VISIBLE_STATUS],
      type: ColumnNames.STATUS,
      value: payload[FilterFormFields.STATUS]
    },
    [ColumnNames.BLOCKCHAIN]: {
      isChecked: payload[FilterFormFields.IS_VISIBLE_BLOCKCHAIN],
      type: ColumnNames.BLOCKCHAIN,
      value: payload[FilterFormFields.BLOCKCHAIN]
    },
    // [ColumnNames.TECHNOLOGY]: {
    //   isChecked: payload[FilterFormFields.IS_VISIBLE_TECHNOLOGY],
    //   type: ColumnNames.TECHNOLOGY,
    //   value: payload[FilterFormFields.TECHNOLOGY]
    // },
    // [ColumnNames.PLATFORM]: {
    //   isChecked: payload[FilterFormFields.IS_VISIBLE_PLATFORM],
    //   type: ColumnNames.PLATFORM,
    //   value: payload[FilterFormFields.PLATFORM]
    // },
    [ColumnNames.TOKEN_HOLDERS_COUNT]: {
      isChecked: payload[FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS],
      type: ColumnNames.TOKEN_HOLDERS_COUNT,
      value: [
        getUndefinedableValue(payload[FilterFormFields.TOKEN_HOLDERS_COUNT_MIN]),
        getUndefinedableValue(payload[FilterFormFields.TOKEN_HOLDERS_COUNT_MAX]),
      ]
    },
    [ColumnNames.TOTAL_MARKET_CAP]: {
      isChecked: payload[FilterFormFields.IS_VISIBLE_MARKET_CAP],
      type: ColumnNames.TOTAL_MARKET_CAP,
      value: [
        getUndefinedableValue(payload[FilterFormFields.TOTAL_MARKET_CAP_MIN]),
        getUndefinedableValue(payload[FilterFormFields.TOTAL_MARKET_CAP_MAX]),
      ]
    },
    // [ColumnNames.DAO_TYPE]: {
    //   isChecked: payload[FilterFormFields.IS_VISIBLE_DAO_TYPE],
    //   type: ColumnNames.DAO_TYPE,
    //   value: payload[FilterFormFields.DAO_TYPE]
    // }
  };
};
