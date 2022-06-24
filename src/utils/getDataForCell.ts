export const isNotData = (value: unknown) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return ((value === undefined) || (value === null) || (value === ''));
};

export const getDataForCell = (data?: unknown): string => {
  return isNotData(data) ? 'No data' : (data as string).toString();
};
