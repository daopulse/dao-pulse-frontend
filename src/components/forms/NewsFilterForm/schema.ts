import { object, array, boolean, mixed } from 'yup';
import { NewsFilterFormFields } from '@/components/forms/NewsFilterForm/types';

export const schema = object({
  [NewsFilterFormFields.DAO_NAMES]: array().nullable(),
  [NewsFilterFormFields.SOURCES]: mixed(),
  [NewsFilterFormFields.FROM_TO_DATES]: object().nullable(),
  [NewsFilterFormFields.IS_ONLY_WATCHED]: boolean(),
});
