<template>
  <div class="content-wrapper">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, provide } from 'vue';
import { useStore } from '@/store';
import { RootGettersType } from '@/store/names/getters.names';
import Header from '@/views/Header/Header.vue';
import Footer from '@/views/Footer/Footer.vue';
import { useQuasar } from 'quasar';
import { RootActionsType } from '@/store/names/actions.names';
import { getDictionariesInjectName, isLoadingDictionariesInjectName } from '@/injectsNames/dictionariesInjects';

export default defineComponent({
  name: 'App',

  components: {
    Footer,
    Header,
  },

  setup() {
    const { getters, dispatch } = useStore();

    const isLoadingDictionaries = computed(() => <boolean>getters[RootGettersType.IS_LOADING_DICTIONARIES]);
    const dictionaries = computed(() => <boolean>getters[RootGettersType.GET_DICTIONARIES]);

    provide(isLoadingDictionariesInjectName, isLoadingDictionaries);
    provide(getDictionariesInjectName, dictionaries);

    const $q = useQuasar();
    $q.screen.setSizes({ sm: 767, md: 1365, lg: 1599, xl: 1919 });

    onMounted(() => {
      void dispatch(RootActionsType.FETCH_DICTIONARIES);
    });

    return {
    };
  },
});
</script>

<style lang="scss"></style>
