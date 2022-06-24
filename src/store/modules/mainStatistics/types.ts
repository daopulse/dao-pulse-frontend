import { Id } from '@/typesUtils/idType';
import { CoinSymbols } from '@/app.options/coinSymbols';

export type SumStatisticGrouped = {
  changePerMonth: SumStatisticItem,
  changePerWeek: SumStatisticItem,
  currentValue: SumStatisticItem,
}

export type StatisticItem = SumStatisticItem
//   amount: number,
//   daoId: Id,
//   daoName: string,
//   id: Id,
//   importedAt: string,
//   tokenId: Id,
//   tokenSymbol: string,
// };

export type WinLoose = {
  losersList: SumStatisticItem[],
  winnersList: SumStatisticItem[],
}

export type SumStatisticItem = {
  amount: number,
  amountInPercent: number,
  amountSymbol: CoinSymbols,
  daoId: Id,
  daoName: string,
  importedAt: string,
  tokenId: Id,
  tokenName: string,
  tokenSymbol: string,
};
