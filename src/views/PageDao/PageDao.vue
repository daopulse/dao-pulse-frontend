<template>
  <q-skeleton v-if="isLoading" />
  <DaoPageHeader
    v-if="!isLoading"
    :item="item"
  />
  <div class="row q-col-gutter-xl q-mt-8">
    <div class="col-12 col-md-2">
      <DaoPageInfo v-if="!isLoading" :item="item" />
      <q-skeleton v-if="isLoading" />
    </div>

    <div class="col-12 col-md-7">
      <div class="row">
        <Chart
          v-if="!isLoading && item?.existedStatisticTypesList?.length"
          :uniq-name="ChartUniqNames.DAO_PAGE_STAT"
          :id="+item.id"
          not-scalable
          :existed-statistic-types="item?.existedStatisticTypesList"
        />
        <h2 v-else>No Statistics</h2>
      </div>
      <div class="q-gutter-y-sm q-gutter-sm-y-xl">
        <div class="row q-gutter-lg items-center q-mb-4 q-mt-8">
          <div class="h3">Proposals</div>
          <template v-if="!Screen.xs">
            <div class="text-light">| Last update {{ getDate(proposalLastUpdate, 'DD.MM.YYYY') }} |</div>
            <ExternalLink
              :label="getLabelLink(item?.officialUrl)"
              :url="item?.officialUrl"
              v-if="item?.officialUrl"
            />
          </template>
          <!--        <div class="q-ml-auto">-->
          <!--          <DaoProposalFiltersForm />-->
          <!--        </div>-->
        </div>
        <Proposal
          v-for="prop in proposals"
          :key="prop.id"
          :data="prop"
        />
        <q-skeleton v-if="isLoadingProposals" />
        <h3 v-if="isEmpty" class="text-center">No Proposals</h3>
        <div class="text-center">
          <BaseButton
            @click="addProposals"
            class="button-base q-mx-auto"
            label="More proposals"
            :disabled="isLoadingProposals"
            v-if="!isLastPropPage"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-md-3">
      <NewsList
        :news="news"
      />
      <div class="text-center button-wrapper">
        <BaseButton
          v-if="news.length"
          class="button-base q-mx-auto"
          :label="`go to all ${item?.name || ''} news`"
          :to="{ name: RouterNames.NEWS_PAGE, query: { daoName: item?.name }}"
        />
      </div>
    </div>
  </div>
</template>

<script src="./PageDao.ts" lang="ts" />
<style src="./PageDao.scss" lang="scss" />
