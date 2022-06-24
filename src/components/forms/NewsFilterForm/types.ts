export enum NewsFilterFormFields {
  DAO_NAMES = 'daoNames',
  SOURCES = 'sources',
  FROM_TO_DATES = 'fromToDates',
  IS_ONLY_WATCHED = 'isOnlyWatched'
}

export type NewsFilterItem = {
  name: NewsFilterFormFields,
  placeholder: string,
}

export const getNewsMappedFilterFields = (): NewsFilterItem[] => [
  {
    name: NewsFilterFormFields.DAO_NAMES,
    placeholder: 'Dao name'
  },
  {
    name: NewsFilterFormFields.SOURCES,
    placeholder: 'News sources'
  },
  {
    name: NewsFilterFormFields.FROM_TO_DATES,
    placeholder: 'Period'
  },
  {
    name: NewsFilterFormFields.IS_ONLY_WATCHED,
    placeholder: 'Show only the Watchlist DAO'
  },
];

export const getNewsFilterFieldOptions = (name: NewsFilterFormFields) => {
  return getNewsMappedFilterFields().find((item) => item.name === name);
};

export type NewsFilter = {
  daoNames?: string[],
  fromToDates: {
    from: string,
    to: string
  }
  isOnlyWatched?: boolean,
  searchedName?: string,
  sources?: string[]
}
