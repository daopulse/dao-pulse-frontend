<template>
  <CardChart
    :title="statisticOptions.label"
    :hasTypeController="!chartOptions.isSum"
    :notScalable="notScalable"
  >
    <template v-slot:top-content>
      <StatisticTypeController
        @changedType="changeType($event)"
        :default-type="type"
        :is-loading="isLoading"
        ref="typeRef"
        :existed-statistic-types="existedStatisticTypes"
      />
    </template>
    <BaseChart
      :is-loading="isLoading"
      :data="statistic || []"
      :period="period"
    />
    <div
      v-if="statisticOptions.description"
      class="description-statistic"
    >
      {{ statisticOptions.description }}
    </div>
    <template v-slot:stats>
      <CardChartStats
        :has-week-change="statisticOptions.hasWeekChange"
        v-if="!isLoading"
        :current="statisticSum?.currentValue?.amount"
        :week="{ value: statisticSum?.changePerWeek?.amount }"
        :month="{ value: statisticSum?.changePerMonth?.amount }"
        :symbol="statisticSum?.currentValue?.amountSymbol || undefined"
      />
    </template>
    <template v-slot:controller>
      <IntervalController
        @changedPeriod="changePeriod($event)"
        :default-period="defaultPeriod"
        :is-loading="isLoading"
        :is-only-long-range="statisticOptions.hasOnlyLongPeriod"
        ref="controllerRef"
      />
    </template>
  </CardChart>
</template>
<script src="./Chart.ts" lang="ts" />
<style src="./Chart.scss" lang="scss" />
