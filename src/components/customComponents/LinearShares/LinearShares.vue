<template>
  <div
    class="card-shares q-pa-3 caption"
  >
    <div class="card-header">
      <div class="text-bold">
        {{ title }}
      </div>
      <div class="text-light" v-if="data.quorum">
        Quorum: {{ data.quorum }}%
      </div>
    </div>
    <div class="card-body q-pt-3">
      <template v-for="(item, index) in data.variant" :key="index">
        <div :class="`share share-${color}`">
          <div class="row no-wrap items-start justify-between">
            <div class="share-line-color" :style="`width: ${getPercent(item.data)}%; background: ${getGradient(getPercent(item.data))}`"></div>
            <div class="share-line-base"></div>
          </div>
          <div class="share-label row no-wrap items-start justify-between">
            <div>{{ item.title }}</div>
            <div class="text-no-wrap">{{ item.data.toFixed(1) }} ({{ getPercent(item.data) }}%)</div>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script src="./LinearShares.ts" lang="ts" />
<style src="./LinearShares.scss" lang="scss" />
