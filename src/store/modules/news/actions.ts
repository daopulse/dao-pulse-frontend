import { RootState } from '@/store/state';
import type { ActionContext, ActionTree } from 'vuex';
import { Modify } from '@/typesUtils/modify';
import { NewsActionsType } from '@/store/modules/news/names/actions.names';
import { NewsState } from '@/store/modules/news/state';
import { NewsMutations } from '@/store/modules/news/mutations';
import { newsHttpService } from '@/services/newsHttpsService';
import { NewsMutationsType } from '@/store/modules/news/names/mutations.names';
import { newsOnDaoPageCount, newsOnMainPageCount, newsOnPageCount, sortNewsString } from '@/app.options/constant';
import { localStorageSaveService } from '@/services/localStorageSaveService';
import { DaoItem } from '@/store/modules/dao/types';
import { watchedDao } from '@/store/modules/dao/constants';
import { useNotify } from '@/utils/useNotify';
import { DICTIONARY } from '@/dictionaries/validation/dictionary';
import { AbortError } from '@/services/errors/abortError';

const { load } = localStorageSaveService();
const { getNews } = newsHttpService();
const { showErrorNotify } = useNotify();


export type AugmentedActionContext = Modify<
  ActionContext<NewsState, RootState>,
  { commit<K extends keyof NewsMutations>(key: K, payload?: Parameters<NewsMutations[K]>[1]): ReturnType<NewsMutations[K]> }
>;

export type NewsActions = {
  [NewsActionsType.FETCH_NEWS]({ commit }: AugmentedActionContext, isAddNews?: boolean): Promise<void>,
  [NewsActionsType.FETCH_DAO_NEWS]({ commit }: AugmentedActionContext, daoName: string): Promise<void>,
  [NewsActionsType.FETCH_MAIN_NEWS]({ commit }: AugmentedActionContext): Promise<void>,
}

export const actions: ActionTree<NewsState, RootState> & NewsActions = {
  async [NewsActionsType.FETCH_NEWS]({ commit, state }, isAddNews) {
    commit(NewsMutationsType.SET_IS_LOADING_NEWS, true);

    try {
      const currentPage = (state.news?.number === undefined || !isAddNews)
        ? -1
        : state.news?.number;

      const data = await getNews({
        page: currentPage + 1,
        size: newsOnPageCount,
        daoNames: !!state.filter?.isOnlyWatched
          ? (load(watchedDao) as DaoItem[]).map(item => item.name)
          : state.filter?.daoNames || [],
        sources: state.filter?.sources,
        fromDate: state.filter?.fromToDates?.from  && new Date(state.filter?.fromToDates?.from).toISOString(),
        toDate: state.filter?.fromToDates?.to && new Date(state.filter?.fromToDates?.to).toISOString(),
        sort: sortNewsString
      });

      if(isAddNews) {
        commit(NewsMutationsType.ADD_NEWS, data);
      } else {
        commit(NewsMutationsType.SET_NEWS, data);
      }
    } catch (e: any) {
      (e.name !== AbortError.name) && showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(NewsMutationsType.SET_IS_LOADING_NEWS, false);
    }
  },

  async [NewsActionsType.FETCH_DAO_NEWS]({ commit }, daoName) {
    commit(NewsMutationsType.SET_IS_LOADING_NEWS, true);
    try {
      const data = await getNews({
        daoNames: [daoName],
        page: 0,
        size: newsOnDaoPageCount,
        sort: sortNewsString
      });
      commit(NewsMutationsType.SET_DAO_NEWS, data);
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(NewsMutationsType.SET_IS_LOADING_NEWS, false);
    }
  },

  async [NewsActionsType.FETCH_MAIN_NEWS]({ commit }) {
    commit(NewsMutationsType.SET_IS_LOADING_NEWS, true);
    try {
      const data = await getNews({
        page: 0,
        size: newsOnMainPageCount,
        sort: sortNewsString
      });
      commit(NewsMutationsType.SET_MAIN_NEWS, data);
    } catch (e) {
      showErrorNotify(DICTIONARY.SERVER_ERROR);
    } finally {
      commit(NewsMutationsType.SET_IS_LOADING_NEWS, false);
    }
  }
};
