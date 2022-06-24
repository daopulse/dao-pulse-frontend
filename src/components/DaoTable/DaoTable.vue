<template>
  <BaseTable
    :rows="list"
    :columns="getColumns()"
    :visible-columns="visibleColumns"
    :is-loading="state.dao.isLoadingList"
    :skeleton-rows="20"
    :skeleton-cols="8"
    selection="multiple"
    class-name="ui-table-sticky-column"
    :skeleton-visible-column="getColumns().map(item => item.label).slice(0, 6)"
    @update:selected="updateWatched"
    :selected="watched"
    :pagination="paginator"
    :selected-rows-label="() => ''"
    :pagination-label="getPaginationLabel"
    @changePaginator="changePaginator"
  >
    <template v-slot:header-cell="props">
      <q-th :props="props">
        <div class="flex inline items-center no-wrap">
          {{ props.col.label }}
          <TooltipIcon
            v-if="getColumnOptions(props.col.name).name !== ColumnNames.DAO_PULSE_RATE"
            :tooltip="getColumnOptions(props.col.name).tooltip"
          />
          <TooltipIcon v-else >
            <DaoScoreTooltip />
          </TooltipIcon>
        </div>
      </q-th>
    </template>
    <template #[getTemplateFullName(ColumnNames.NAME)]="props">
      <td class="text-wrap text-left">
        <TokenFullName
          :name="props.row.name"
          :symbol="props.row.symbol"
          :logo="props.row.logo"
          :id="props.row.id"
        />
      </td>
    </template>
    <template #[getTemplateFullName(ColumnNames.TYPE)]>
      <td>No data</td>
    </template>
    <template #[getTemplateFullName(ColumnNames.STATUS)]="props">
      <td>
        <BaseBadge
          :type="props.row.status ? 'positive' : 'negative'"
          :label="props.row.status ? 'Active' : 'Inactive'"
        />
      </td>
    </template>
    <template #[getTemplateFullName(ColumnNames.EXPLORER_LINK)]="props">
      <td>
        <ExternalLink
          :label="getLabelLink(getLinkByName(props.row.socialProfiles,SocialProfilesList.EXPLORER).url)"
          :url="getLinkByName(props.row.socialProfiles, SocialProfilesList.EXPLORER).url"
          v-if="getLinkByName(props.row.socialProfiles, SocialProfilesList.EXPLORER)"
        />
        <div v-else>No data</div>
      </td>
    </template>
    <template #[getTemplateFullName(ColumnNames.SOURCE_CODE)]="props">
      <td class="text-capitalize">
        <ExternalLink
          :label="getLabelLink(getLinkByName(props.row.socialProfiles, SocialProfilesList.GIT_PLATFORM).url, true)"
          :url="getLinkByName(props.row.socialProfiles, SocialProfilesList.GIT_PLATFORM).url"
          v-if="getLinkByName(props.row.socialProfiles, SocialProfilesList.GIT_PLATFORM)"
        />
        <div v-else>No data</div>
      </td>
    </template>
    <template
      #[getTemplateFullName(ColumnNames.CONTRACT_ADDRESS)]="props"
    >
      <td>
        <ClipboardCopy
          :data="props.row.platformNetwork.address"
          v-if="props.row.platformNetwork?.address"
          text-ellipsis
        />
        <div v-else>No data</div>
      </td>
    </template>
    <template
      #[getTemplateFullName(ColumnNames.OFFICIAL_SITE)]="props"
    >
      <td>
        <ExternalLink
          :label="getLabelLink(props.row.officialUrl)"
          :url="props.row.officialUrl"
          v-if="props.row.officialUrl"
        />
        <div v-else>No data</div>
      </td>
    </template>
    <template
      #[getTemplateFullName(ColumnNames.SOCIAL_NETWORKS)]="props"
    >
      <td>
        <div class="row items-center q-gutter-sm justify-end">
          <SocialLink
            v-for="item in getSocialLinksByName(props.row.socialProfiles)"
            :name="item.socialType"
            :url="item.url"
            :key="item.socialType"
          />
        </div>
      </td>
    </template>
    <template #[getTemplateFullName(ColumnNames.WHITE_PAPER)]="props">
      <td>
        <ExternalLink
          :label="getLabelLink(getLinkByName(props.row.socialProfiles, SocialProfilesList.TECHNICAL).url)"
          :url="getLinkByName(props.row.socialProfiles, SocialProfilesList.TECHNICAL).url"
          v-if="getLinkByName(props.row.socialProfiles, SocialProfilesList.TECHNICAL)"
        />
        <div v-else>No data</div>
      </td>
    </template>
    <template
      #[getTemplateFullName(ColumnNames.EXTERNAL_TRACKER)]="props"
    >
      <td>
        <ExternalLink
          :label="getLabelLink(getLinkByName(props.row.socialProfiles, SocialProfilesList.OTHER).url)"
          :url="getLinkByName(props.row.socialProfiles, SocialProfilesList.OTHER).url"
          v-if="getLinkByName(props.row.socialProfiles, SocialProfilesList.OTHER)"
        />
        <div v-else>No data</div>
      </td>
    </template>
    <template #[getTemplateFullName(ColumnNames.APPROVED_TOKEN)]>
      <td>No data</td>
    </template>
    <template #[getTemplateFullName(ColumnNames.TOKEN_BALANCES_TREASURY)]>
      <td>No data</td>
    </template>
  </BaseTable>
</template>

<script src="./DaoTable.ts" lang="ts" />
<style src="./DaoTable.scss" lang="scss" />
