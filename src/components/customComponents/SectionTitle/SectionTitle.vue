<template>
  <div class="column row-sm q-gutter-sm inline">
    <div class="h2">{{title}}</div>
    <div class="row items-center" :class="{'text-light': light}">
      <span class="q-mx-3" v-if="!Screen.xs">|</span>
      {{ subtitle }}
      <TooltipIcon :tooltip="tooltip" v-if="tooltip" />
    </div>
  </div>

</template>

<script src="./SectionTitle.ts" lang="ts" />
<style src="./SectionTitle.scss" lang="scss" />
