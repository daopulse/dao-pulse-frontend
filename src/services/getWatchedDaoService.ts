import { DaoItem } from '@/store/modules/dao/types';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { watchedDao } from '@/store/modules/dao/constants';

const { load } = localStorageSaveService();

export const getWatchedDao = (items: DaoItem[]): DaoItem[]  => {
  const watchedFromStorage = <DaoItem[]>(load(watchedDao) || []);
  const watchedIds = watchedFromStorage.map((item: DaoItem) => item.id);

  return items.filter((item) => {
    return watchedIds.includes(item.id);
  });
};

export const getUnwatchedDao = (items: DaoItem[]): DaoItem[]  => {
  const watchedFromStorage = <DaoItem[]>(load(watchedDao) || []);
  const watchedIds = watchedFromStorage.map((item: DaoItem) => item.id);

  return items.filter((item) => {
    return !watchedIds.includes(item.id);
  });
};
