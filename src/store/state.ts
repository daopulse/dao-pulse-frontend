import { DaoState } from '@/store/modules/dao/state';
import { MainStatisticsState } from '@/store/modules/mainStatistics/state';

export type RootState = {
  isLoadingDictionaries: boolean,
  dao?: DaoState,
  mainStatistics?: MainStatisticsState,
  allDictionaries: Dictionaries;
}

export type DictionaryItem = {
  name: string,
  typeName: string,
  description: string,
}

export type Dictionaries = {
  cryptoPlatformTypeList: DictionaryItem[];
  daoNamesList: DictionaryItem[];
  daoTypeList: DictionaryItem[];
  dataProviderTypeList: DictionaryItem[];
  frequencyIntervalType: DictionaryItem[];
  governanceStructureList: DictionaryItem[];
  newsSourceNameList: DictionaryItem[];
  participationTypeList: DictionaryItem[];
  powerOfControlList: DictionaryItem[];
  proposalStateTypeList: DictionaryItem[];
  proposalStatusTypeList: DictionaryItem[];
  proposalTypeList: DictionaryItem[];
  socialProfileTypeList: DictionaryItem[];
  statisticTypeList: DictionaryItem[];
  technologyTypeList: DictionaryItem[];
}

export const getDefaultRootState = (): RootState => {
  return {
    isLoadingDictionaries: false,
    allDictionaries: {
      cryptoPlatformTypeList: [],
      daoNamesList: [],
      daoTypeList: [],
      dataProviderTypeList: [],
      frequencyIntervalType: [],
      governanceStructureList: [],
      newsSourceNameList: [],
      participationTypeList: [],
      powerOfControlList: [],
      proposalStateTypeList: [],
      proposalStatusTypeList: [],
      proposalTypeList: [],
      socialProfileTypeList: [],
      statisticTypeList: [],
      technologyTypeList: [],
    }
  };
};

export const state: RootState = getDefaultRootState();
