import { number, string, object, array, boolean } from 'yup';
import { FilterFormFields } from '@/components/forms/DaoTableFiltersForm/types';

export const schema = object({
  [FilterFormFields.DAO_NAME]: string().nullable(),

  [FilterFormFields.IS_VISIBLE_STATUS]: boolean(),
  [FilterFormFields.STATUS]: boolean().nullable(),

  [FilterFormFields.IS_VISIBLE_BLOCKCHAIN]: boolean(),
  [FilterFormFields.BLOCKCHAIN]: array().nullable(),

  [FilterFormFields.IS_VISIBLE_TECHNOLOGY]: boolean(),
  [FilterFormFields.TECHNOLOGY]: string().nullable(),

  [FilterFormFields.IS_VISIBLE_PLATFORM]: boolean(),
  [FilterFormFields.PLATFORM]: string().nullable(),

  [FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS]: boolean(),
  [FilterFormFields.TOKEN_HOLDERS_COUNT_MAX]: number()
    .transform((value: number) => (isNaN(value) ? undefined : value)).nullable(),
  [FilterFormFields.TOKEN_HOLDERS_COUNT_MIN]: number()
    .transform((value: number) => (isNaN(value) ? undefined : value)).nullable(),

  [FilterFormFields.IS_VISIBLE_MARKET_CAP]: boolean(),
  [FilterFormFields.TOTAL_MARKET_CAP_MAX]: number().nullable()
    .transform((value: number) => (isNaN(value) ? undefined : value)).nullable(),
  [FilterFormFields.TOTAL_MARKET_CAP_MIN]: number().nullable()
    .transform((value: number) => (isNaN(value) ? undefined : value)).nullable(),

  [FilterFormFields.IS_VISIBLE_DAO_TYPE]: boolean(),
  [FilterFormFields.DAO_TYPE]: array().nullable(),
});
