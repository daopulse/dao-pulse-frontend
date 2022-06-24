import { RouteRecordRaw } from 'vue-router';
import { RouterNames } from '@/router/router.names';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterNames.MAIN_PAGE,
    component: () => import('@/views/PageMain/PageMain.vue')
  },
  {
    path: '/dao/:id',
    name: RouterNames.DAO_PAGE,
    component: () => import('@/views/PageDao/PageDao.vue')
  },
  {
    path: '/news',
    name: RouterNames.NEWS_PAGE,
    component: () => import('@/views/PageNews/PageNews.vue')
  },
  {
    path: '/ui',
    component: () => import('@/views/UiElements/UiElements.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: RouterNames.NOT_FOUND_PAGE,
    component: () => import('@/views/PageNotFound/PageNotFound.vue')
  }
];
