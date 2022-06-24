import { httpService } from '@/services/httpService';
import { DaoInfo, DaoItem, ProposalsState } from '@/store/modules/dao/types';
import { Id } from '@/typesUtils/idType';
import { proposalsOnPageCount, sortProposalsString } from '@/app.options/constant';
import { Dictionaries } from '@/store/state';

const { getMethod } = httpService();

export type DaoListServiceInterface = {
  getDaoList: () => Promise<DaoItem[]>
  getDao: (id: Id) => Promise<DaoInfo>
  getDictionaries: () => Promise<Dictionaries>
  getDaoProposal: (id: Id, page: number) => Promise<ProposalsState>
}

export const daoHttpService = (): DaoListServiceInterface => {
  const getDaoList = async() => {
    const data = {
      url: '/dao-info/list'
    };
    return <DaoItem[]>await getMethod(data);
  };

  const getDao = async(id: Id) => {
    const data = {
      url: `/dao-info?name=${id}`
    };
    return <DaoInfo>await getMethod(data);
  };

  const getDictionaries = async() => {
    const data = {
      url: '/nsi/all-dictionaries'
    };
    return <Dictionaries>await getMethod(data);
  };

  const getDaoProposal = async(id: Id, page: number) => {
    const data = {
      url: `/proposal/list?daoId=${id}&page=${page}&size=${proposalsOnPageCount}&sort=${sortProposalsString}`
    };
    return <ProposalsState>await getMethod(data);
  };

  return { getDaoList, getDictionaries, getDao, getDaoProposal };
};
