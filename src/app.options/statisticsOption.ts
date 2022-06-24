export enum StatisticType {
  TOKEN_HOLDER_COUNT = 'TOKEN_HOLDER_COUNT',
  TVL_AMOUNT = 'TVL_AMOUNT',
  PROPOSALS_COUNT = 'PROPOSALS_COUNT',
  PRICE = 'PRICE',
  MARKET_CAP = 'MARKET_CAP',
  PROPOSAL_VOTES_COUNT = 'PROPOSAL_VOTES_COUNT',
  TOTAL_TREASURY_AMOUNT = 'TOTAL_TREASURY_AMOUNT',
  DAO_PULSE_RATE = 'DAO_PULSE_RATE'
}

export type StatisticOption = {
  name: StatisticType,
  label: string,
  shortLabel: string,
  filedToDisplay: string,
  description?: string,
  hasWeekChange?: boolean,
  hasOnlyLongPeriod?: boolean
}

// if add new type, dont forget about store (statistic module)
export const getMappedStatisticOptions = (): StatisticOption[] => [
  {
    name: StatisticType.TVL_AMOUNT,
    shortLabel: 'TVL',
    label: 'Total Value Locked',
    filedToDisplay: 'daoName',
    description: 'Total Value Locked in USD',
    hasWeekChange: true,
  },
  {
    name: StatisticType.TOTAL_TREASURY_AMOUNT,
    shortLabel: 'Total treasury',
    label: 'Total treasury',
    filedToDisplay: 'daoName',
    description: 'Total dollar value of a DAO\'s treasury',
    hasWeekChange: true,
  },
  {
    name: StatisticType.TOKEN_HOLDER_COUNT,
    shortLabel: 'Token holders',
    label: 'Total DAO token holders',
    filedToDisplay: 'tokenSymbol',
    description: 'Number of DAO\'s token holders',
    hasWeekChange: true,
  },
  {
    name: StatisticType.PROPOSALS_COUNT,
    shortLabel: 'Proposals',
    label: 'Proposals',
    filedToDisplay: 'daoName',
    description: 'Proposals created previous month',
    hasWeekChange: false,
    hasOnlyLongPeriod: true,
  },
  {
    name: StatisticType.PROPOSAL_VOTES_COUNT,
    shortLabel: 'Proposals votes',
    label: 'Proposals votes',
    filedToDisplay: 'daoName',
    description: 'Proposal votes cast previous month',
    hasWeekChange: false,
    hasOnlyLongPeriod: true,
  },
  {
    name: StatisticType.DAO_PULSE_RATE,
    shortLabel: 'DAO Pulse Score',
    label: 'DAO Pulse Score',
    filedToDisplay: 'daoName',
    hasWeekChange: true,
  },
];

export const getStatisticOptions = (type: StatisticType): StatisticOption => {
  const item = getMappedStatisticOptions().find(item => item.name === type);
  if (!item) {
    throw new Error(`not found mapped winLoose for type: "${type}"`);
  }
  return item;
};
