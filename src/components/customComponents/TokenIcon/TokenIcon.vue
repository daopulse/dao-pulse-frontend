<template>
  <div class="ui-token-icon" :style="`width: ${imgSize}; height: ${imgSize}`">
    <q-skeleton type="circle" v-if="!source" />
    <img :src="source" :alt="alt" :style="`width: ${imgSize}; height: ${imgSize}`" v-else />
  </div>
</template>

<script src="./TokenIcon.ts" lang="ts" />
<style src="./TokenIcon.scss" lang="scss" />
