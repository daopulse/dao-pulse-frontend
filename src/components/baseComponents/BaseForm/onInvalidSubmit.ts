// pass input name or vee-validate error schema
export type ValidateError = { errors: string }

export const onInvalidSubmitSetFirstFieldFocus = (data: ValidateError | string): void => {
  if (typeof data === 'string') {
    document.getElementsByName(data)[0].focus();
    return;
  }
  const firstErrorFieldName = Object.keys(data.errors)[0];
  document.getElementsByName(firstErrorFieldName)[0].focus();
};
