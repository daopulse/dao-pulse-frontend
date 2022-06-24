<template>
  <div class="chart-wrapper">
    <div
      v-show="!isLoading"
      ref="chartRef"
      class="ui-chart"
    ></div>
    <q-skeleton
      v-if="isLoading"
      class="chart-wrapper"
      type="rect"
    ></q-skeleton>
  </div>
</template>

<script src="./BaseChart.ts" lang="ts" />
<style src="./BaseChart.scss" lang="scss" />
