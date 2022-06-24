import moment from 'moment';

export const getDate = (date: number | undefined | string, format?: string): string => {
  return moment(date).isValid() ? moment(date).format(format || 'DD.MM.YYYY HH:mm:ss') : '';
};

export const makeDateFromISOToTimestamp = (date: string): number => {
  return new Date(date).getTime();
};
