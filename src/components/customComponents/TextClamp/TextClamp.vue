<template>
  <div :class="isClamp ? `text-clamp-${clampType}` : ''" :style="getStyle()">
      <div v-if="textFormat === 'html'" class="q-mt-md text-markdown">
        <div v-html="text" class="q-gutter-y-lg"></div>
      </div>
    <template v-else>
      {{ isClamp ? textClamp() : text }}
    </template>
    <span
      class="text-link text-primary"
      @click="toggleText"
      v-if="clampType === 'symbol' && expandable"
    >
      {{ isClamp ? 'Show more' : 'Show less' }}
    </span>
  </div>
  <div class="q-mt-sm">
    <span
      class="text-link text-primary"
      @click="toggleText"
      v-if="clampType === 'line' && expandable"
    >
      {{ isClamp ? 'Show more' : 'Show less' }}
    </span>
  </div>
</template>

<script src="./TextClamp.ts" lang="ts" />
<style src="./TextClamp.scss" lang="scss" />
