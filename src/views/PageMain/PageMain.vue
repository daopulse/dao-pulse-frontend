<template>
  <div class="section">
    <div class="column row-sm items-sm-center justify-between">
      <SectionTitle
        title="DAO Statistics"
        :subtitle="`Last update ${getDate(lastUpdatedStat, 'DD.MM.YYYY')}`"
        light
        class="q-mb-5"
        v-if="isVisibleStatistic"
      />
      <span v-if="!isVisibleStatistic" class="holder"></span>
      <BaseToggle
        v-model="isVisibleStatistic"
        label="Show statistics"
        :class="`q-mb-5 ${!isVisibleStatistic && 'no-margin'}`"
        name="isVisibleStat"
        left-label
      />
    </div>
    <div
      v-if="isVisibleStatistic"
      class="charts-block flex-grow-1 row justify-between q-col-gutter-lg q-col-gutter-md-xl"
    >
      <Chart :uniq-name="ChartUniqNames.MAIN_PAGE_TVL" />
      <WeeklyListPair
        :type="StatisticType.TVL_AMOUNT"
        class="flex-grow-1"
        v-if="$q.screen.lt.md"
      />
      <Chart :uniq-name="ChartUniqNames.MAIN_PAGE_TOKEN_HOLDERS" />
      <WeeklyListPair
        :type="StatisticType.TOKEN_HOLDER_COUNT"
        class="flex-grow-1"
        v-if="$q.screen.lt.md"
      />
      <div
        class="weekly-lists-grid"
        :class="chartViewDif ? 'col-6' : 'col-12'"
        v-if="$q.screen.gt.sm"
      >
        <div class=" q-col-gutter-xl flex-grow-1" :class="chartViewDif ? 'column' : 'row'">
          <WeeklyListPair
            :type="StatisticType.TVL_AMOUNT"
            class="col-6"
          />
          <WeeklyListPair
            :type="StatisticType.TOKEN_HOLDER_COUNT"
            class="col-6"
          />
        </div>
      </div>
    </div>
    <div :class="`section ${!isVisibleStatistic && 'no-margin'}`">
      <SectionTitle
        light
        title="DAO Services"
        :subtitle="`Last update ${getDate(lastUpdatedDaoList, 'DD.MM.YYYY')}`"
      />

      <div class="filters-block q-mt-5">
        <DaoTableFiltersForm />
      </div>
    </div>
    <DaoTable :list="daoList" class="q-mt-3" />
    <div class="q-mt-10">
      <NewsList :news="news" :fixed="Screen.gt.sm">
        <template v-slot:header>
          <div class="row justify-between items-center q-mb-5">
            <SectionTitle
              title="DAO News"
              :subtitle="`Last update ${getDate(lastUpdatedNews, 'DD.MM.YYYY')}`"
              light
            />
            <BaseButton
              v-if="!Screen.xs"
              className="button-base"
              label="Go to all news"
              :to="{ name: RouterNames.NEWS_PAGE }"
            />
          </div>
        </template>
        <template v-slot:footer v-if="Screen.xs">
          <BaseButton
            v-if="Screen.xs"
            :to="{ name: RouterNames.NEWS_PAGE }"
            className="button-base q-mt-5 full-width"
            label="Go to all news"
          />
        </template>
      </NewsList>

    </div>
    <About class="q-mt-8 q-pt-sm-2 q-pt-md-4" />
  </div>
</template>

<script src="./PageMain.ts" lang="ts" />
<style src="./PageMain.scss" lang="scss" />
