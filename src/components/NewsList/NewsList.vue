<template>
  <slot name="header">
    <div class="h3 q-my-3" v-if="Screen.lt.md">News</div>
  </slot>
  <div
    class="row no-wrap q-col-gutter-xl"
    :class="fixed ? 'news-list-fixed' : 'news-list column-md wrap-md'"
    id="news-list"
    :draggable="Screen.lt.md"
  >
    <template v-for="news in getNewsList()" :key="news.id">
      <CardNews
        class="col-10 col-sm-5"
        :class="fixed ? 'col-md-3' : ' col-md-12'"
        :data="news"
        :as-is="Screen.gt.sm && !fixed"
      />
    </template>
  </div>
  <slot name="footer"></slot>
</template>

<script src="./NewsList.ts" lang="ts" />
<style src="./NewsList.scss" lang="scss" />
