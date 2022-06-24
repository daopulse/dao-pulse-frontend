export const getDataByArrOfFields = (item: unknown, filedToData: string[]): unknown => {
  return filedToData?.reduce((acc: unknown, curr: typeof acc) => {
    if (!acc) return undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return acc[curr];
  }, item);
};
