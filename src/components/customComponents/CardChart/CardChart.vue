<template>
  <div :class="modeView()">
    <div class="ui-card card-chart flex-grow-1">
      <div
        v-if="!hasTypeController"
        class="card-header q-pb-3"
      >
        <div class="h3">{{ title }}</div>
        <div class="self-start" v-if="$q.screen.gt.sm || notScalable">
          <IconControl
            :icon="expanded ? 'collapse' : 'expand'"
            @click="toggleView"
            class="no-hover"
          />
        </div>
      </div>
      <div
        v-if="hasTypeController"
        class="card-header q-pb-3"
      >
        <slot name="top-content"></slot>
      </div>
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-footer column row-sm items-sm-center ">
        <div class="chart-controller order-sm-last">
          <slot name="controller"></slot>
        </div>
        <div class="chart-stats">
          <slot name="stats"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CardChart.ts" lang="ts" />
<style src="./CardChart.scss" lang="scss" />
