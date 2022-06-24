<template>
  <div
    class="header-info-line row items-start q-gutter-y-lg"
    v-if="data"
    :class="{ 'full-width': Screen.lt.md }"
  >
    <div v-if="data.platformNetwork?.name" class="col-6 col-sm-auto q-mr-sm-10">
      <InfoItem
        :caption="getColumnOptions(ColumnNames.BLOCKCHAIN).label"
        :data="data.platformNetwork?.name"
        :tooltip="getColumnOptions(ColumnNames.BLOCKCHAIN).tooltip"
      />
    </div>
    <div v-if="data.foundedAt || data.importedAt" class="col-6 col-sm-auto q-mr-sm-10">
      <InfoItem
        :caption="getColumnOptions(ColumnNames.CREATED_AT).label"
        :data="getColumnOptions(ColumnNames.CREATED_AT).field(data)"
        :tooltip="getColumnOptions(ColumnNames.CREATED_AT).tooltip"
      />
    </div>
    <div class="col-6 col-sm-auto q-mr-sm-10" v-if="data.officialUrl">
      <InfoItem
        :caption="getColumnOptions(ColumnNames.OFFICIAL_SITE).label"
        :tooltip="getColumnOptions(ColumnNames.OFFICIAL_SITE).tooltip"
      >
        <ExternalLink
          :label="getLabelLink(data.officialUrl)"
          :url="data.officialUrl"
        />
      </InfoItem>
    </div>
    <div
      class="col-6 col-sm-auto q-mr-sm-10"
      v-if="getLinkByName(data.socialProfiles, SocialProfilesList.TECHNICAL)"
    >
      <InfoItem
        :caption="getColumnOptions(ColumnNames.WHITE_PAPER).label"
        :tooltip="getColumnOptions(ColumnNames.WHITE_PAPER).tooltip"
      >
        <ExternalLink
          :label="getLabelLink(getLinkByName(data.socialProfiles, SocialProfilesList.TECHNICAL).url )"
          :url="getLinkByName(data.socialProfiles, SocialProfilesList.TECHNICAL).url"
        />
      </InfoItem>
    </div>
  </div>
</template>

<script src="./HeaderInfoLine.ts" lang="ts" />
<style src="./HeaderInfoLine.scss" lang="scss" />
