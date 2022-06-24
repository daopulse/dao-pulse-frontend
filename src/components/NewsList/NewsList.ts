import { defineComponent, onMounted, onUnmounted, PropType } from 'vue';
import { Screen } from 'quasar';
import CardNews from '@/components/customComponents/CardNews/CardNews.vue';
import { useLayout } from '@/composables/useLayout';
import { NewsItem } from '@/store/modules/news/types';

export default defineComponent({
  name: 'NewsList',

  components: {
    CardNews
  },

  props: {
    news: {
      type: Array as PropType<NewsItem[]>
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { setDraggableX } = useLayout();

    onMounted(() => {
      const el = document.getElementById('news-list');
      if (el && el.draggable) setDraggableX(el, false);
    });

    onUnmounted(() => {
      const el = document.getElementById('news-list');
      if (el && el.draggable) setDraggableX(el, true);
    });

    const getNewsList = () => {
      return Screen.gt.sm
        ? props.news?.slice(0, 4)
        : props.news?.slice(0, 12);
    };

    return {
      Screen,
      getNewsList,
    };
  },
});
