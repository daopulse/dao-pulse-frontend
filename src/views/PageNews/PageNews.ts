import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from '@/store';
import { ModulesNames } from '@/store/names/modules.names';
import { NewsItem } from '@/store/modules/news/types';
import { NewsGettersType } from '@/store/modules/news/names/getters.names';
import { NewsActionsType } from '@/store/modules/news/names/actions.names';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import CardNews from '@/components/customComponents/CardNews/CardNews.vue';
import SectionTitle from '@/components/customComponents/SectionTitle/SectionTitle.vue';
import { getDate } from '@/utils/getDate';
import NewsFilterForm from '@/components/forms/NewsFilterForm/NewsFilterForm.vue';
import { Screen } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { RouterNames } from '@/router/router.names';

export default defineComponent({
  name: 'PageNews',

  components: {
    BaseButton,
    SectionTitle,
    CardNews,
    NewsFilterForm
  },

  setup() {
    const { getters, dispatch } = useStore();
    const router = useRouter();
    const route = useRoute();
    const list = computed(() => <NewsItem[]>getters[`${ModulesNames.NEWS}/${NewsGettersType.GET_NEWS}`]);
    const isLoading = computed(() => <boolean>getters[`${ModulesNames.NEWS}/${NewsGettersType.IS_LOADING_NEWS}`]);
    const isLastPage = computed(() => <boolean>getters[`${ModulesNames.NEWS}/${NewsGettersType.IS_LAST_PAGE}`]);
    const isEmpty = computed(() => <boolean>getters[`${ModulesNames.NEWS}/${NewsGettersType.IS_EMPTY_LIST}`]);
    const lastUpdatedNews = computed(() => <string>getters[`${ModulesNames.NEWS}/${NewsGettersType.GET_LAST_UPDATED_NEWS}`]);

    const cols = computed(() => Screen.gt.sm ? 3 : 2);
    const getNewsCol = (ind: number) => {
      const newsCol = [];
      for (let i = ind - 1; i < list.value.length; i = i + cols.value) {
        newsCol.push(list.value[i]);
      }
      return newsCol;
    };

    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // void dispatch(`${ModulesNames.NEWS}/${NewsActionsType.FETCH_NEWS}`);
      void router.replace({ name: RouterNames.NEWS_PAGE });
    });

    const addNews = () => {
      void dispatch(`${ModulesNames.NEWS}/${NewsActionsType.FETCH_NEWS}`, true);
    };

    const changeFilter = () => {
      void dispatch(`${ModulesNames.NEWS}/${NewsActionsType.FETCH_NEWS}`);
    };

    return {
      route,
      lastUpdatedNews,
      changeFilter,
      list,
      addNews,
      isLoading,
      isLastPage,
      isEmpty,
      getNewsCol,
      getDate,
      cols,
      Screen
    };
  }
});
