<template>
  <div class="controller-wrapper button-tumbler-group">
    <BaseButton
      v-for="type in mappedTypes"
      :key="type.name"
      @click="changeType(type.name)"
      :label="type.shortLabel"
      class="button-tumbler"
      :class-name="(type.name === activeType) ? 'button-tumbler-active' : ''"
      :disabled="isLoading"
    />
  </div>
</template>
<script src="./StatisticTypeController.ts" lang="ts" />
<style src="./StatisticTypeController.scss" lang="scss" />
