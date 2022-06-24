import { Id } from '@/typesUtils/idType';
import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { StatisticType } from '@/app.options/statisticsOption';
import { Pageable } from '@/typesUtils/page';
import { ColumnNames } from '@/app.options/columns';

export type ColumnState = TableColumn & { isVisible: boolean };

export enum CurrencyCategoryType {
  FIAT = 'fiat',
  COIN = 'coin',
  TOKEN = 'token'
}

export enum DataProvider {
  SYSTEM = 'SYSTEM'
}

export enum ParticipationType {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

export enum PowerOfControl {
  PROTOCOL_PARAMETERS = 'PROTOCOL_PARAMETERS'
}

export enum Technology {
  MOLOCH = 'MOLOCH'
}

export enum GovernanceStructure {
  MOLOCH = 'MOLOCH'
}

export enum DaoType {
  SOCIAL_DAO = 'SOCIAL_DAO'
}

export enum SocialProfilesList {
  OFFICIAL = 'OFFICIAL',
  TWITTER = 'TWITTER',
  TELEGRAM = 'TELEGRAM',
  FACEBOOK = 'FACEBOOK',
  MEDIUM = 'MEDIUM',
  YOUTUBE = 'YOUTUBE',
  REDDIT = 'REDDIT',
  DISCORD = 'DISCORD',
  GIT_PLATFORM = 'GIT_PLATFORM',
  CHAT_PLATFORM = 'CHAT_PLATFORM',
  EXPLORER = 'EXPLORER',
  WHITE_PAPER_DOC = 'WHITE_PAPER_DOC',
  INFO_WEBSITE = 'INFO_WEBSITE',
  TECHNICAL = 'TECHNICAL',
  OTHER = 'OTHER',
}

export enum MarketProviders {
  GLASSNODE,
  ETHERSCAN,
  BITQUERY,
  COINMARKETCAP,
  LUNARCRUSH,
  COINGECKO,
}

export type PathToFilteredFields = { path: string };

export type Filters = {
  [ColumnNames.NAME]: {
    isChecked: true,
    type: ColumnNames.NAME,
    value?: string
  },
  [ColumnNames.STATUS]: {
    isChecked: boolean,
    type: ColumnNames.STATUS,
    value?: boolean
  },
  [ColumnNames.BLOCKCHAIN]: {
    isChecked: boolean,
    type: ColumnNames.BLOCKCHAIN,
    value?: string[]
  },
  // [ColumnNames.PLATFORM]: {
  //   isChecked: boolean,
  //   type: ColumnNames.PLATFORM,
  //   value?: string
  // },
  [ColumnNames.TOKEN_HOLDERS_COUNT]: {
    isChecked: boolean,
    type: ColumnNames.TOKEN_HOLDERS_COUNT,
    value?: [number | undefined, number | undefined]
  },
  [ColumnNames.TOTAL_MARKET_CAP]: {
    isChecked: boolean,
    type: ColumnNames.TOTAL_MARKET_CAP,
    value?: [number | undefined, number | undefined]
  },
  // [ColumnNames.DAO_TYPE]: {
  //   isChecked: boolean,
  //   type: FilteredFields.DAO_TYPE,
  //   value?: string[]
  // },
}

export type SocialProfile = {
  socialType: SocialProfilesList,
  url: string,
  importProvider: MarketProviders,
  importedAt: string,
};

export type NativeToken = {
  addressList: AddressPrimary[],
  addressPrimary: AddressPrimary[],
  category: string,
  createdAt: string,
  dataProvider: DataProvider,
  description: string,
  foundedAt: string
  id: Id,
  importedAt: string,
  logo: string,
  marketCap: Prop,
  name: string,
  notice: string,
  slug: string,
  socialProfiles: SocialProfile[],
  status: true,
  symbol: string,
  tags: string[],
  tokenHoldersCount: Prop,
  tokenPrice: Prop,
  tradingVolume: Prop,
  updatedAt: string,
};

export type Address = {
  id: Id,
  daoInfoId: Id,
  tokenId: Id,
  importedAt: string,
  address: string,
  name: string,
  symbol: string,
  slug: string
};

export type Volume = {
  id: Id,
  daoId: Id,
  tokenId: Id,
  amount: number,
  importProvider: MarketProviders,
  importedAt: string,
};

export type AddressPrimary = {
  address: string,
  daoId: Id,
  daoName: string,
  id: Id,
  importedAt: string,
  name: string,
  slug: string,
  symbol: string,
  tokenId: Id,
  tokenSymbol: string,
};

export type Prop = {
  amount: number,
  daoId: Id,
  daoName: string,
  dataProvider: string,
  id: Id,
  importedAt: string
  tokenId: Id
  tokenPairedId: Id,
  tokenPairedSymbol: string,
  tokenSymbol: string,
  type: StatisticType
}

export type DaoProposal = {
  daoInfoId: Id,
  dataProvider: DataProvider,
  description: string,
  id: Id,
  importedAt: string
}

export type TreasureWallet = {
  balance: number
  daoInfoId: number,
  dataProvider: DataProvider,
  id: Id,
  importedAt: string,
  tokenId: Id
};

//TODO расширять по мере появления свойств
export type DaoItem = {
  daoPulseRank?: Prop,
  daoPulseRankChange?: Prop,
  daoPulseRate?: Prop,
  daoPulseRateChange?: Prop,
  existedStatisticTypesList?: StatisticType[],
  activeVotersPercent: Prop,
  annualPercentageRate: Prop,
  aprAmount?: Prop,
  createdAt: string,
  daoProposalList: DaoProposal[],
  dataProvider: DataProvider,
  description: string,
  foundedAt: string,
  governanceStructure: GovernanceStructure,
  governanceToken: {
    addressList: Address[],
    addressPrimary: AddressPrimary,
    category: string,
    createdAt: string
    dataProvider: DataProvider,
    description: string,
    foundedAt: string,
    id: Id,
    importedAt: string,
    logo: string,
    marketCap: Volume
    name: string,
    notice: string,
    slug: string,
    socialProfiles: SocialProfilesList[],
    status: true,
    symbol: string,
    tags: string[],
    tokenHoldersCount: Prop,
    tokenPrice: Prop,
    tradingVolume: Volume,
    updatedAt: string
  },
  id: Id,
  importedAt: string
  inflationRateAmount?: Prop,
  logoUrl: string,
  membersCount?: Prop,
  name: string,
  // nativeToken: NativeToken,
  netRevenuesAmount?: Prop,
  officialUrl: string,
  participationType: ParticipationType,
  platformBasedOn: AddressPrimary,
  platformNetwork: AddressPrimary,
  powerOfControl: PowerOfControl,
  processingReward: number,
  proposalDepositAmount: number,
  proposalsCount?: Prop,
  proposalVotesCount?: Prop,
  revenuesAmount?: Prop,
  slug: string,
  socialProfiles: SocialProfile[],
  status: boolean,
  tags: string[],
  technology: Technology,
  totalLiquidTreasuryAmount?: Prop,
  totalTreasuryAmount?: Prop,
  treasureWallet: TreasureWallet,
  tvlAmount?: Prop,
  type: DaoType,
  updatedAt: string,
  votersCount?: Prop,
  tokenPrice?: Prop,
  tradingVolume?: Prop,
  marketCap?: Prop,
  tokenHoldersCount?: Prop,
  symbol: string,
  logo: string
};

export type DaoInfo = DaoItem;

export enum ProposalState {
  VOTING = 'VOTING',
  PENDING = 'PENDING',
  CLOSED = 'CLOSED',
  CORE = 'CORE',
  UNKNOWN = 'UNKNOWN'
}

export type Scores = {
  choiceName: string,
  score: number
}

export type CryptoAddress = {
  address: string;
  createdAt: string;
  cryptoPlatformId: null
  cryptoPlatformName: null
  daoIdOwner: null
  daoNameOwner: null
  dataProvider: DataProvider;
  id: Id;
  importedAt: string;
  name: null
  slug: null
  symbol: null
  tokenIdOwner: null
  tokenSymbolOwner: null
  updatedAt: string;
  walletIdOwner: Id;
}

export type AuthorWallet = {
  accountList: null;
  createdAt: string;
  cryptoAddress: CryptoAddress;
  currencyTokenId: null;
  currencyTokenSymbol: null;
  daoHolderId: null;
  daoHolderName: null;
  dataProvider: DataProvider;
  id: Id;
  importedAt: string;
  totalEstimatedBalance: null
  updatedAt: string;
  userHolderCoreId: null
  userHolderUsername: null
}

export type Proposal = {
  authorWallet: AuthorWallet,
  // choices (Array[DAOProposalChoiceDto], optional),
  createdAt: string,
  daoId: Id,
  daoName: string,
  dataProvider: DataProvider,
  description: string,
  discussion: string,
  electionType: string,
  endVotingAt: string,
  externalGuid: string,
  externalIndex: string,
  id: Id,
  importedAt: string,
  ipfsId: string,
  network: string,
  quorumCount: number,
  scoreState: string,
  scores: Scores[];
  scoresTotal: number,
  scoresUpdatedAt: string,
  startVotingAt: string,
  state: ProposalState,
  // status (string, optional) = ['ACCEPTED', 'REJECTED', 'UNKNOWN'],
  // strategies (Array[DAOProposalStrategyDto], optional),
  submittedAt: string,
  symbol: string,
  title: string,
  // type (string, optional) = ['DEFAULT', 'MEMBERSHIP', 'TOKEN', 'TRADE', 'GUILKICK', 'MINION'],
  updatedAt: string,
  url: string,
  // votes (Array[DAOProposalVoteDto], optional),
  votesCount: number,
}

export type ProposalsState = Pageable<Proposal>;
