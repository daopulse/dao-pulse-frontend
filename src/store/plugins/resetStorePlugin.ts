import { Store } from 'vuex';
import { RootMutationsType } from '@/store/names/mutations.names';
import { ModulesNames } from '@/store/names/modules.names';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import { RootState } from '@/store/state';

export const resetStorePlugin = (store: Store<RootState>) => {
  store.subscribe(({ type }) => {
    if (type === RootMutationsType.RESET_STORE) {
      Object.values(ModulesNames).forEach((item: string) => {
        store.commit(`${item}/${CommonMutationsType.RESET_MODULE}`);
      });
    }
  });
};
