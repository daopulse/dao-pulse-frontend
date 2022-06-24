<template>
  <div class="row items-start" :class="{ 'no-wrap': Screen.gt.xs }">
    <TokenIcon
      :source="getIconUrl()"
      :size="120"
      v-if="!Screen.xs"
      class="q-mr-7"
    />
    <div class="column col-md-2" v-if="Screen.gt.sm">
      <HeaderTitle
        :name="item.name"
        :status="item.status"
        :symbol="item.symbol"
      />
      <div class="row items-center q-gutter-md q-mt-7">
        <SocialLink
          v-for="item in getSocialLinksByName(item.socialProfiles)"
          :name="item.socialType"
          :url="item.url"
          :key="item.socialType"
        />
      </div>
    </div>

    <div class="row-sm q-ml-md-10">
      <div class="row justify-between col-sm-7 no-wrap" v-if="Screen.lt.md">
        <HeaderTitle
          :name="item.name"
          :status="item.status"
          :symbol="item.symbol"
        />
        <TokenIcon
          :source="getIconUrl()"
          :size="64"
          v-if="Screen.xs"
          class="q-ml-7"
        />
      </div>
      <div class="row q-mt-8 q-mt-sm-none" v-if="Screen.xs">
        <DaoRank
          v-if="item.daoPulseRank.amount"
          :name="item.name"
          :rank="item.daoPulseRank.amount"
          :score="item.daoPulseRate.amount"
          :percent="item.daoPulseRankChange.amount"
        />
      </div>
      <HeaderInfoLine
        :data="item"
        class="q-mt-4 q-mt-sm-2 q-mt-md-none"
      />
      <div
        class="row items-center q-gutter-md q-mt-5 q-mt-sm-3 q-mt-md-7 justify-center justify-sm-start"
        v-if="Screen.lt.md"
      >
        <SocialLink
          v-for="item in getSocialLinksByName(item.socialProfiles)"
          :name="item.socialType"
          :url="item.url"
          :key="item.socialType"
        />
      </div>
      <div class="text-light text-lg order-md-first" v-if="Screen.gt.sm">
        <div class="text-markdown">
          <TextClamp :text="item.description" text-format="html" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="text-light text-lg q-mt-7 q-mt-sm-10 q-mt-md-4 col-12"
    v-if="Screen.lt.md"
  >
    <div class="text-markdown">
      <TextClamp :text="item.description" :expandable="false" text-format="html" />
    </div>
  </div>
</template>

<script src="./DaoPageHeader.ts" lang="ts" />
<style src="./DaoPageHeader.scss" lang="scss" />
