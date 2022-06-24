import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { getDataForCell } from '@/utils/getDataForCell';
import { DaoItem } from '@/store/modules/dao/types';
import { getDate } from '@/utils/getDate';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import { filterByBool, filterByIncludes, filterByMinMax, filterByName } from '@/services/utils/filterFunctions';

export enum ColumnNames {
  RANK = 'rank',
  NAME = 'name',
  BLOCKCHAIN = 'blockchain',
  TVL = 'tvl',
  TOKEN_PRICE = 'tokenPrice',
  TOTAL_MARKET_CAP = 'totalMarketCap',
  TRADING_VOLUME = 'tradingVolume',
  STATUS = 'status',
  OFFICIAL_SITE = 'officialSiteLink',
  CREATED_AT = 'createdAt',
  EXPLORER_LINK = 'explorerLink',
  SOURCE_CODE = 'sourceCode',
  CONTRACT_ADDRESS = 'contractAddress',
  SOCIAL_NETWORKS = 'socialLinks',
  WHITE_PAPER = 'whitePaperLink',
  EXTERNAL_TRACKER = 'externalTrackerLink',
  TOKEN_HOLDERS_COUNT = 'tokenHoldersCount',
  PROPOSALS_CREATED = 'proposalsCreated',
  PROPOSALS_VOTED = 'proposalsVoted',
  TOTAL_TREASURY = 'totalTreasury',
  DAO_PULSE_RATE = 'daoPulseRate',
  DAO_PULSE_RATE_CHANGE = 'daoPulseRateChange',
  RANK_CHANGE = 'rankChange',
}

export const unRemovableColumns: ColumnNames[] = [
  ColumnNames.RANK,
  ColumnNames.NAME,
];

export const defaultColumns: ColumnNames[] = [
  ColumnNames.BLOCKCHAIN,
  ColumnNames.TVL,
  ColumnNames.TOKEN_PRICE,
  ColumnNames.TOTAL_MARKET_CAP,
  ColumnNames.STATUS,
  ColumnNames.OFFICIAL_SITE,
];

export const hiddenColumns: ColumnNames[] = [
  ColumnNames.DAO_PULSE_RATE_CHANGE,
  ColumnNames.RANK_CHANGE
];

export const columns: TableColumn[] = [
  {
    name: ColumnNames.RANK,
    label: 'Rank',
    align: 'right',
    field: (val: DaoItem) => getDataForCell(val?.daoPulseRank?.amount),
    sortable: true,
    required: true,
    filedToData: ['daoPulseRank', 'amount'],
    tooltip: 'DAO rank based on the DAO Pulse Score value',
  },
  {
    name: ColumnNames.NAME,
    label: 'Name',
    align: 'left',
    field: 'name',
    sortable: true,
    required: true,
    filedToData: ['name'],
    addFieldToData: ['symbol'],
    filterFunction: filterByName,
    tooltip: 'DAO name and token name',
  },
  {
    name: ColumnNames.BLOCKCHAIN,
    label: 'Blockchain',
    field: (val: DaoItem) => getDataForCell(val.platformNetwork?.name),
    sortable: true,
    filedToData: ['platformNetwork', 'name'],
    filterFunction: filterByIncludes,
    tooltip: 'Name of a blockchain that a DAO runs on',
  },
  {
    name: ColumnNames.TVL,
    label: 'TVL',
    field: (val: DaoItem) => getDataForCell(
      getConvertedNumber(val.tvlAmount && {
        number: val.tvlAmount.amount,
        currency: val.tvlAmount.tokenPairedSymbol
      })
    ),
    sortable: true,
    filedToData: ['tvlAmount', 'amount'],
    tooltip: 'Total Value Locked in USD',
  },
  {
    name: ColumnNames.TOKEN_PRICE,
    label: 'Token price',
    field: (val: DaoItem) => getDataForCell(
      getConvertedNumber(val.tokenPrice && {
        number: val.tokenPrice.amount,
        currency: val.tokenPrice.tokenPairedSymbol
      })
    ),
    sortable: true,
    filedToData: ['tokenPrice', 'amount'],
    tooltip: 'Current market price of a DAO\'s token in USD',
  },
  {
    name: ColumnNames.TOTAL_MARKET_CAP,
    label: 'Total market cap',
    field: (val: DaoItem) => getDataForCell(
      getConvertedNumber(val.marketCap && {
        number: val.marketCap.amount,
        currency: val.marketCap.tokenPairedSymbol
      })
    ),
    sortable: true,
    filedToData: ['marketCap', 'amount'],
    filterFunction: filterByMinMax,
    tooltip: 'Total dollar market value of all DAO\'s tokens',
  },
  {
    name: ColumnNames.TRADING_VOLUME,
    label: 'Trading volume',
    field: (val: DaoItem) => getDataForCell(
      getConvertedNumber(val.tradingVolume && {
        number: val.tradingVolume.amount,
        currency: val.tradingVolume.tokenPairedSymbol
      })
    ),
    sortable: true,
    filedToData: ['tradingVolume', 'amount'],
    tooltip: '24 hour trading volume of a DAO\'s token',
  },
  {
    name: ColumnNames.STATUS,
    label: 'Status',
    field: 'status',
    sortable: true,
    filedToData: ['status'],
    filterFunction: filterByBool,
    tooltip: 'DAO status (active / inactive)',
  },
  {
    name: ColumnNames.OFFICIAL_SITE,
    label: 'Official site',
    sortable: false,
    tooltip: 'Link to an official site of a DAO',
  },
  {
    name: ColumnNames.CREATED_AT,
    label: 'Date created',
    field: (val: DaoItem) => getDataForCell(getDate(val?.foundedAt || val?.importedAt, 'DD MMM YYYY')),
    sortable: true,
    isDate: true,
    filedToData: ['foundedAt'],
    tooltip: 'A DAO\'s creation date',
  },
  {
    name: ColumnNames.EXPLORER_LINK,
    label: 'Link to explorer',
    sortable: false,
    tooltip: 'Link to a main DAO\'s smart contract in a corresponding blockchain explorer',
  },
  {
    name: ColumnNames.SOURCE_CODE,
    label: 'Source code',
    sortable: false,
    tooltip: 'Link to a DAO\'s source code repository',
  },
  {
    name: ColumnNames.CONTRACT_ADDRESS,
    label: 'Contract address',
    sortable: false,
    tooltip: 'Address of a main DAO\'s smart contract',
  },
  {
    name: ColumnNames.SOCIAL_NETWORKS,
    label: 'Social networks',
    field: 'socialLinks',
    sortable: false,
    tooltip: 'Links to DAO\'s social network accounts',
  },
  {
    name: ColumnNames.WHITE_PAPER,
    label: 'White paper',
    sortable: false,
    tooltip: 'Link to a DAO\'s whitepaper',
  },
  {
    name: ColumnNames.EXTERNAL_TRACKER,
    label: 'External tracker',
    sortable: false,
    tooltip: 'Link to a DAO\'s external tracker',
  },
  {
    name: ColumnNames.TOKEN_HOLDERS_COUNT,
    label: 'Token holders',
    field: (val: DaoItem) => getDataForCell(val.tokenHoldersCount?.amount),
    sortable: true,
    filedToData: ['tokenHoldersCount', 'amount'],
    filterFunction: filterByMinMax,
    tooltip: 'Number of current DAO\'s token holders',
  },
  {
    name: ColumnNames.PROPOSALS_CREATED,
    label: 'Proposals created',
    field: (val: DaoItem) => getDataForCell(val.proposalsCount?.amount),
    sortable: true,
    filedToData: ['proposalsCount', 'amount'],
    tooltip: 'Proposals created previous month',
  },
  {
    name: ColumnNames.PROPOSALS_VOTED,
    label: 'Proposals voted',
    field: (val: DaoItem) => getDataForCell(val.proposalVotesCount?.amount),
    sortable: true,
    filedToData: ['proposalVotesCount', 'amount'],
    tooltip: 'Proposal votes cast previous month',
  },
  {
    name: ColumnNames.TOTAL_TREASURY,
    label: 'Total treasury',
    field: (val: DaoItem) => getDataForCell(
      getConvertedNumber(val.totalTreasuryAmount && {
        number: val.totalTreasuryAmount.amount,
        currency: val.totalTreasuryAmount.tokenPairedSymbol
      })
    ),
    sortable: true,
    filedToData: ['totalTreasuryAmount', 'amount'],
    tooltip: 'Total dollar value of a DAO\'s treasury',
  },
  {
    name: ColumnNames.DAO_PULSE_RATE,
    label: 'DAO pulse score',
    field: (val: DaoItem) => getDataForCell(val.daoPulseRate?.amount),
    sortable: true,
    filedToData: ['daoPulseRate', 'amount'],
    tooltip: '',
  },
  {
    name: ColumnNames.DAO_PULSE_RATE_CHANGE,
    label: 'DAO pulse score change',
    field: (val: DaoItem) => getDataForCell(val.daoPulseRateChange?.amount),
    sortable: true,
    filedToData: ['daoPulseRateChange', 'amount'],
    tooltip: 'Weekly change of the DAO Pulse score',
  },
  {
    name: ColumnNames.DAO_PULSE_RATE_CHANGE,
    label: 'DAO pulse score change',
    field: (val: DaoItem) => getDataForCell(val.daoPulseRateChange?.amount),
    sortable: true,
    filedToData: ['daoPulseRateChange', 'amount'],
    tooltip: 'Weekly change of the DAO Pulse score',
  },
  {
    name: ColumnNames.RANK_CHANGE,
    label: 'DAO pulse rank change',
    field: (val: DaoItem) => getDataForCell(val.daoPulseRankChange?.amount),
    sortable: true,
    filedToData: ['daoPulseRankChange', 'amount'],
    tooltip: 'Weekly change of the DAO Pulse rank',
  },
];

export const getColumns = (): TableColumn[] => {
  return columns.filter(item => !hiddenColumns.some(hidden => item.name === hidden));
};

export const getTemplateFullName = (name: ColumnNames): string => {
  return `body-cell-${name}`;
};

export const getColumnOptions = (name: ColumnNames): TableColumn => {
  const column = columns.find(item => item.name === name);
  if(!column) { throw new Error(`not found mapped column for name: "${name}"`); }
  return column;
};
