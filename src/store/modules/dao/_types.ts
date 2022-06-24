// import { Id } from '@/typesUtils/idType';
// import { StatisticType } from '@/app.options/statisticsOption';
// import {
//   MarketProviders,
//   SocialProfile,
//   SocialProfilesList,
// } from '@/store/modules/dao/types';
//
// export enum DataProvider {
//   SYSTEM = 'SYSTEM'
// }
//
// export enum ParticipationType {
//   OPEN = 'OPEN',
//   CLOSE = 'CLOSE'
// }
//
// export enum PowerOfControl {
//   PROTOCOL_PARAMETERS = 'PROTOCOL_PARAMETERS'
// }
//
// export enum Technology {
//   MOLOCH = 'MOLOCH'
// }
//
// export enum GovernanceStructure {
//   MOLOCH = 'MOLOCH'
// }
//
// export enum DaoType {
//   SOCIAL_DAO = 'SOCIAL_DAO'
// }
//
// export type Address = {
//   id: Id,
//   daoInfoId: Id,
//   tokenId: Id,
//   importedAt: string,
//   address: string,
//   name: string,
//   symbol: string,
//   slug: string
// };
//
// export type Volume = {
//   id: Id,
//   daoId: Id,
//   tokenId: Id,
//   amount: number,
//   importProvider: MarketProviders,
//   importedAt: string,
// };
//
// export type AddressPrimary = {
//   address: string,
//   daoId: Id,
//   daoName: string,
//   id: Id,
//   importedAt: string,
//   name: string,
//   slug: string,
//   symbol: string,
//   tokenId: Id,
//   tokenSymbol: string,
// };
//
// export type Prop = {
//   amount: number,
//   daoId: Id,
//   daoName: string,
//   dataProvider: string,
//   id: Id,
//   importedAt: string
//   tokenId: Id
//   tokenPairedId: Id,
//   tokenPairedSymbol: string,
//   tokenSymbol: string,
//   type: StatisticType
// }
//
// export type DaoProposal = {
//   daoInfoId: Id,
//   dataProvider: DataProvider,
//   description: string,
//   id: Id,
//   importedAt: string
// }
//
// export type NativeToken = {
//   addressList: AddressPrimary[],
//   addressPrimary: AddressPrimary[],
//   category: string,
//   createdAt: string,
//   dataProvider: DataProvider,
//   description: string,
//   foundedAt: string
//   id: Id,
//   importedAt: string,
//   logo: string,
//   marketCap: Prop,
//   name: string,
//   notice: string,
//   slug: string,
//   socialProfiles: SocialProfile[],
//   status: true,
//   symbol: string,
//   tags: string[],
//   tokenHoldersCount: Prop,
//   tokenPrice: Prop,
//   tradingVolume: Prop,
//   updatedAt: string,
// };
//
// export type TreasureWallet = {
//   balance: number
//   daoInfoId: number,
//   dataProvider: DataProvider,
//   id: Id,
//   importedAt: string,
//   tokenId: Id
// };
//
// export type Dao = {
//   activeVotersPercent: Prop,
//   annualPercentageRate: Prop,
//   aprAmount: Prop,
//   createdAt: string,
//   daoProposalList: DaoProposal[],
//   dataProvider: DataProvider,
//   description: string,
//   foundedAt: string,
//   governanceStructure: GovernanceStructure,
//   governanceToken: {
//     addressList: Address[],
//     addressPrimary: AddressPrimary,
//     category: string,
//     createdAt: string
//     dataProvider: DataProvider,
//     description: string,
//     foundedAt: string,
//     id: Id,
//     importedAt: string,
//     logo: string,
//     marketCap: Volume
//     name: string,
//     notice: string,
//     slug: string,
//     socialProfiles: SocialProfilesList[],
//     status: true,
//     symbol: string,
//     tags: string[],
//     tokenHoldersCount: Prop,
//     tokenPrice: Prop,
//     tradingVolume: Volume,
//     updatedAt: string
//   },
//   id: Id,
//   importedAt: string
//   inflationRateAmount: Prop,
//   logoUrl: string,
//   membersCount: Prop,
//   name: string,
//   nativeToken: NativeToken,
//   netRevenuesAmount: Prop,
//   officialUrl: string,
//   participationType: ParticipationType,
//   platformBasedOn: AddressPrimary,
//   platformNetwork: AddressPrimary,
//   powerOfControl: PowerOfControl,
//   processingReward: number,
//   proposalDepositAmount: number,
//   proposalsCount: Prop,
//   revenuesAmount: Prop,
//   slug: string,
//   socialProfiles: SocialProfile[],
//   status: boolean,
//   tags: [
//     string
//   ],
//   technology: Technology,
//   totalLiquidTreasuryAmount: Prop,
//   totalTreasuryAmount: Prop,
//   treasureWallet: TreasureWallet,
//   tvlAmount: Prop,
//   type: DaoType,
//   updatedAt: string,
//   votersCount: Prop,
// }
