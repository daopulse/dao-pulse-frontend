<template>
  <div
    class="wrapper"
    id="info-list"
    :draggable="Screen.lt.md"
    :class="{ 'row no-wrap': Screen.sm }"
  >
    <DaoRank
      v-if="item.daoPulseRank.amount && Screen.gt.xs"
      :name="item.name"
      :rank="item.daoPulseRank.amount"
      :score="item.daoPulseRate.amount"
      :percent="item.daoPulseRankChange.amount"
      :class="Screen.lt.md ? 'q-mr-2' : 'q-mb-3'"
    />
    <div
      class="ui-card card-info q-pa-5"
      :class="Screen.gt.sm ? 'card-info-desktop' : 'card-info-mobile'"
    >
      <div class="info-block q-col-gutter-md-lg q-col-gutter-xl">
        <InfoItem
          v-if="item.tokenPrice"
          :caption="getColumnOptions(ColumnNames.TOKEN_PRICE).label"
          :data="getColumnOptions(ColumnNames.TOKEN_PRICE).field(item)"
          :tooltip="getColumnOptions(ColumnNames.TOKEN_PRICE).tooltip"
        />
        <InfoItem
          v-if="item.tradingVolume"
          :caption="getColumnOptions(ColumnNames.TRADING_VOLUME).label"
          :data="getColumnOptions(ColumnNames.TRADING_VOLUME).field(item)"
          :tooltip="getColumnOptions(ColumnNames.TRADING_VOLUME).tooltip"
        />
        <InfoItem
          v-if="item.marketCap"
          :caption="getColumnOptions(ColumnNames.TOTAL_MARKET_CAP).label"
          :data="getColumnOptions(ColumnNames.TOTAL_MARKET_CAP).field(item)"
          :tooltip="getColumnOptions(ColumnNames.TOTAL_MARKET_CAP).tooltip"
        />
        <InfoItem
          v-if="item.tokenHoldersCount"
          :caption="getColumnOptions(ColumnNames.TOKEN_HOLDERS_COUNT).label"
          :data="getColumnOptions(ColumnNames.TOKEN_HOLDERS_COUNT).field(item)"
          :tooltip="getColumnOptions(ColumnNames.TOKEN_HOLDERS_COUNT).tooltip"
        />
        <InfoItem
          v-if="getLinkByName(item.socialProfiles, SocialProfilesList.EXPLORER)"
          :caption="getColumnOptions(ColumnNames.EXPLORER_LINK).label"
          :tooltip="getColumnOptions(ColumnNames.EXPLORER_LINK).tooltip"
        >
          <ExternalLink
            :label="getLabelLink(getLinkByName(item.socialProfiles, SocialProfilesList.EXPLORER).url)"
            :url="getLinkByName(item.socialProfiles, SocialProfilesList.EXPLORER).url"
          />
        </InfoItem>
        <InfoItem
          v-if="getLinkByName(item.socialProfiles, SocialProfilesList.GIT_PLATFORM)"
          class="text-capitalize"
          :caption="getColumnOptions(ColumnNames.SOURCE_CODE).label"
          :tooltip="getColumnOptions(ColumnNames.SOURCE_CODE).tooltip"
        >
          <ExternalLink
            :label="getLabelLink(getLinkByName(item.socialProfiles,SocialProfilesList.GIT_PLATFORM).url,true)"
            :url="getLinkByName(item.socialProfiles, SocialProfilesList.GIT_PLATFORM).url"
          />
        </InfoItem>
        <InfoItem
          v-if="item.platformNetwork?.address"
          :caption="getColumnOptions(ColumnNames.CONTRACT_ADDRESS).label"
          :tooltip="getColumnOptions(ColumnNames.CONTRACT_ADDRESS).tooltip"
        >
          <ClipboardCopy
            :data="item.platformNetwork.address"
            text-ellipsis
          />
        </InfoItem>
        <InfoItem
          v-if="getLinkByName(item.socialProfiles, SocialProfilesList.OTHER)"
          :caption="getColumnOptions(ColumnNames.EXTERNAL_TRACKER).label"
          :tooltip="getColumnOptions(ColumnNames.EXTERNAL_TRACKER).tooltip"
        >
          <ExternalLink
            :label="getLabelLink(getLinkByName(item.socialProfiles, SocialProfilesList.OTHER).url)"
            :url="getLinkByName(item.socialProfiles, SocialProfilesList.OTHER).url"
          />
        </InfoItem>
        <InfoItem
          v-if="item.totalTreasuryAmount?.amount"
          :caption="getColumnOptions(ColumnNames.TOTAL_TREASURY).label"
          :data="getColumnOptions(ColumnNames.TOTAL_TREASURY).field(item)"
          :tooltip="getColumnOptions(ColumnNames.TOTAL_TREASURY).tooltip"
        />
      </div>
    </div>
  </div>
</template>

<script src="./DaoPageInfo.ts" lang="ts" />
<style src="./DaoPageInfo.scss" lang="scss" />
