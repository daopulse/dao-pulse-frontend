export const getUndefinedableValue = (data?: number): number | undefined => {
  if(!data && (data !== 0)) {
    return undefined;
  } else {
    return data;
  }
};
