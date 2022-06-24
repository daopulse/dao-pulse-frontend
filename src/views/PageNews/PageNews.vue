<template>
  <div class="column row-md justify-between items-md-center q-gutter-sm q-mb-5 q-mb-sm-6">
    <SectionTitle
      title="DAO News"
      :subtitle="`Last update ${getDate(
        lastUpdatedNews,
        'DD.MM.YYYY'
      )}`"
      light
    />
    <div class="wrapper">
      <NewsFilterForm
        @changeFilter="changeFilter"
        :defaultNames="route.query.daoName && [route.query.daoName]"
      />
    </div>
  </div>

  <div class="column q-col-gutter-md" v-if="Screen.xs">
    <CardNews
      v-for="news in list"
      :key="news.id"
      :data="news"
      asIs
    />
  </div>

  <div class="row q-col-gutter-x-xl news-container" v-else>
    <div
      v-for="col in cols"
      :key="col"
      class="news-col col-sm-6 col-md-4 column q-col-gutter-y-xl"
    >
      <div
        v-for="news in getNewsCol(col)"
        :key="news.id"
        class="news-item"
      >
        <CardNews :data="news" />
      </div>
    </div>
  </div>
  <q-skeleton v-if="isLoading" />
  <div class="text-center">
    <BaseButton
      @click="addNews"
      class="button-base q-mx-auto q-mt-5"
      label="Show more"
      :disabled="isLoading"
      v-if="!isLastPage"
    />
  </div>
</template>

<script src="./PageNews.ts" lang="ts" />
<style src="./PageNews.scss" lang="scss" />
