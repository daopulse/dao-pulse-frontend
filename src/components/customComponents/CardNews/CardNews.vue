<template>
  <div class="card-wrapper">
    <div class="ui-card card-news">
      <div class="card-img" v-if="data.coverImageUrl" :style="`background-image: url('${data.coverImageUrl}');`">
      </div>
      <div v-else-if="!asIs" class="card-img img-placeholder" :class="{'img-placeholder-default': !data.relatedDAOLogoUrlListRaw.length }">
        <TokenGroup :tokens="getDaoIcons()" img-placeholder :icon-count="3" v-if="data.relatedDAOLogoUrlListRaw.length" />
      </div>
      <div class="card-body">
        <div class="row q-col-gutter-lg items-center caption">
          <div class="text-light">
            {{ getDate(data.publishedAt, 'DD MMM YYYY') }}
          </div>
          <ExternalLink
            :url="data.sourceUrl"
            :label="getLabelLink(data.sourceUrl)"
          />
        </div>
        <div class="h4 q-mt-2">
          {{ data.title }}
        </div>
        <div class="q-mt-2 text-light q-mb-auto">
          <div
            v-if="asIs"
            v-html="data.subTitle"
          ></div>
          <TextClamp
            :text="data.subTitle"
            :expandable="false"
            text-format="html"
            clamp-type="line"
            line="3"
            v-else
          />
        </div>
        <div class="row q-col-gutter-xs q-mt-2" v-if="data.relatedDAONameList.length">
          <div v-for="tag in data.relatedDAONameList" :key="tag">
            <router-link :to="{ name: RouterNames.DAO_PAGE, params: { id: tag } }">
              <BaseTag :label="tag" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CardNews.ts" lang="ts" />
<style src="./CardNews.scss" lang="scss" />
