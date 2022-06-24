<template>
  <div class="card-wrapper">
    <div class="ui-card card-rate w-full">
      <div class="row items-center justify-between no-wrap card-rate-content">
        <div class="rank q-mr-1">
          {{ rank }}
        </div>
        <div class="column justify-between items-stretch">
          <div>
            <BaseBadge :type="badgeType" class="cursor-pointer badge-sm">
              {{
                getConvertedNumber({
                  number: +percent,
                  fractionDigits: 1,
                  hasSign: true
                })
              }}
              <q-tooltip class="ui-tooltip">
                {{ getColumnOptions(ColumnNames.RANK_CHANGE).tooltip }}
              </q-tooltip>
            </BaseBadge>
          </div>
          <div class="caption q-mt-1">of {{ maxRank }}</div>
        </div>
        <div class="q-ml-auto caption-bold fs-xs text-light self-start">
          DAO Pulse Rank
        </div>
      </div>
      <div v-if="maxScore" class="score-bar q-mt-3">
        <div
          class="marker"
          :style="`left: ${pointPosition}%`"
          :class="markerColor"
        ></div>
      </div>
      <div v-else>
        <q-skeleton />
      </div>
      <div class="card-rate-content q-mt-1">
        <span class="caption fs-xs text-light">Score: </span>
        <span class="caption fs-xs">{{ score }}</span>
        <q-tooltip class="ui-tooltip">
          <div class="q-mb-3">{{ name }} Dao Pulse Score: {{ score }}</div>
          <DaoScoreTooltip />
        </q-tooltip>
      </div>
    </div>
  </div>
</template>

<script src="./DaoRank.ts" lang="ts" />
<style src="./DaoRank.scss" lang="scss" />
