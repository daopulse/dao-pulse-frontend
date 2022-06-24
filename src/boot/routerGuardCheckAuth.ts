// import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router';
// import { Store } from 'vuex';
// import { RootState } from '@/store/state';
// import { RootGettersType } from '@/store/names/getters.names';
// import { RootMutationsType } from '@/store/names/mutations.names';
//
// export default ({ router, store }: { router: Router, store: Store<RootState> }): void => {
//   router.beforeEach((_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext): void => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//     const isLoadedApp = <boolean>store.getters[RootGettersType.];
//
//     const setLoadedApp = (): void => {
//       !isLoadedApp && store.commit(RootMutationsType.SET_IS_LOADED_APP, true);
//     };
//
//     setLoadedApp();
//     next();
//   });
// };
