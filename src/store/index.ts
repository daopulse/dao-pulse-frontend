import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import { createStore, Store as VuexStore, useStore as vuexUseStore, createLogger } from 'vuex';
import { RootState } from '@/store/state';
import { resetStorePlugin } from 'src/store/plugins/resetStorePlugin';
import { state } from '@/store/state';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';
import { ModulesNames } from '@/store/names/modules.names';
import { getters } from '@/store/getters';
import { dao } from '@/store/modules/dao';
import { mainStatistics } from '@/store/modules/mainStatistics';
import { news } from '@/store/modules/news';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<RootState>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<RootState>> = Symbol('vuex-key');

export default store(function(/* { ssrContext } */) {
  const Store = createStore<RootState>({
    plugins: process.env.NODE_ENV === 'production'
      ? [resetStorePlugin]
      : [createLogger(), resetStorePlugin],
    devtools: true,
    state,
    mutations,
    actions,
    getters,
    modules: {
      [ModulesNames.DAO]: dao,
      [ModulesNames.MAIN_STATISTICS]: mainStatistics,
      [ModulesNames.NEWS]: news
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
