<template>
  <div class="controller-wrapper button-tumbler-group">
    <BaseButton
      v-for="period in mappedPeriods"
      :key="period.key"
      @click="changePeriod(period.key)"
      :label="period.key"
      class="button-tumbler"
      :class-name="(period.key === activePeriod) ? 'button-tumbler-active' : ''"
      :disabled="isLoading"
    />
  </div>
</template>
<script src="./IntervalController.ts" lang="ts" />
<style src="./IntervalController.scss" lang="scss" />
