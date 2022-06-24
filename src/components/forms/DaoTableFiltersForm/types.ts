export enum FilterFormFields {
  DAO_NAME = 'daoName',

  IS_VISIBLE_STATUS = 'isVisibleStatus',
  STATUS = 'status',

  IS_VISIBLE_BLOCKCHAIN = 'isVisibleBlockchain',
  BLOCKCHAIN = 'blockchain',

  IS_VISIBLE_TECHNOLOGY = 'isVisibleTechnology',
  TECHNOLOGY = 'technology',

  IS_VISIBLE_PLATFORM = 'isVisiblePlatform',
  PLATFORM = 'platform',

  IS_VISIBLE_TOKEN_HOLDERS = 'isVisibleTokenHolders',
  TOKEN_HOLDERS_COUNT_MAX = 'tokenHoldersCountMax',
  TOKEN_HOLDERS_COUNT_MIN = 'tokenHoldersCountMin',

  IS_VISIBLE_MARKET_CAP = 'isVisibleMarketCap',
  TOTAL_MARKET_CAP_MAX = 'totalMarketCapMax',
  TOTAL_MARKET_CAP_MIN = 'totalMarketCapMin',

  IS_VISIBLE_DAO_TYPE = 'isVisibleDaoType',
  DAO_TYPE = 'daoType',
}

export type FilterItem = {
  name: FilterFormFields,
  label?: string,
  placeholder?: string,
}

export const getMappedFilterFields = (): FilterItem[] => [
  {
    name: FilterFormFields.DAO_NAME,
    placeholder: 'Type something'
  },
  {
    name: FilterFormFields.IS_VISIBLE_STATUS,
    label: 'Status'
  },
  {
    name: FilterFormFields.STATUS,
    placeholder: 'Status'
  },
  {
    name: FilterFormFields.IS_VISIBLE_BLOCKCHAIN,
    label: 'Blockchain'
  },
  {
    name: FilterFormFields.BLOCKCHAIN,
    placeholder: 'Blockchain'
  },
  {
    name: FilterFormFields.IS_VISIBLE_TECHNOLOGY,
    label: 'Technology'
  },
  {
    name: FilterFormFields.TECHNOLOGY,
    placeholder: 'Technology'
  },
  {
    name: FilterFormFields.IS_VISIBLE_PLATFORM,
    label: 'Platform'
  },
  {
    name: FilterFormFields.PLATFORM,
    placeholder: 'Platform'
  },
  {
    name: FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS,
    label: 'Token holders count'
  },
  {
    name: FilterFormFields.TOKEN_HOLDERS_COUNT_MAX,
    placeholder: 'max'
  },
  {
    name: FilterFormFields.TOKEN_HOLDERS_COUNT_MIN,
    placeholder: 'min'
  },
  {
    name: FilterFormFields.IS_VISIBLE_MARKET_CAP,
    label: 'Total market cap'
  },
  {
    name: FilterFormFields.TOTAL_MARKET_CAP_MAX,
    placeholder: 'max'
  },
  {
    name: FilterFormFields.TOTAL_MARKET_CAP_MIN,
    placeholder: 'min'
  },
  {
    name: FilterFormFields.IS_VISIBLE_DAO_TYPE,
    label: 'DAO Type'
  },
  {
    name: FilterFormFields.DAO_TYPE,
    placeholder: 'DAO Type'
  },
];

export const getFilterFieldOptions = (name: FilterFormFields) => {
  return getMappedFilterFields().find((item) => item.name === name);
};

export type FilterData = {
  [FilterFormFields.DAO_NAME]?: string,

  [FilterFormFields.IS_VISIBLE_STATUS]: boolean,
  [FilterFormFields.STATUS]?: boolean,

  [FilterFormFields.IS_VISIBLE_BLOCKCHAIN]: boolean,
  [FilterFormFields.BLOCKCHAIN]?: string[],

  [FilterFormFields.IS_VISIBLE_TECHNOLOGY]: boolean,
  [FilterFormFields.TECHNOLOGY]?: string,

  [FilterFormFields.IS_VISIBLE_PLATFORM]: boolean,
  [FilterFormFields.PLATFORM]?: string,

  [FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS]: boolean,
  [FilterFormFields.TOKEN_HOLDERS_COUNT_MAX]?: number,
  [FilterFormFields.TOKEN_HOLDERS_COUNT_MIN]?: number,

  [FilterFormFields.IS_VISIBLE_MARKET_CAP]: boolean,
  [FilterFormFields.TOTAL_MARKET_CAP_MAX]?: number,
  [FilterFormFields.TOTAL_MARKET_CAP_MIN]?: number,

  [FilterFormFields.IS_VISIBLE_DAO_TYPE]: boolean,
  [FilterFormFields.DAO_TYPE]?: string[],
}

export type OptionItem = {
  name: string,
  typeName: string,
  description: string
}
