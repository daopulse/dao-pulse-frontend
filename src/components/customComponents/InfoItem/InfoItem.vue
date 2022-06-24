<template>
  <div>
    <div class="caption-bold text-muted row items-center no-wrap">
      <div>{{ caption }}</div>
      <TooltipIcon v-if="tooltip || $slots[tooltip]">
        <slot name="tooltip">
          {{ tooltip }}
        </slot>
      </TooltipIcon>
      </div>
    <div class="q-mt-1 row items-center no-wrap">
      <slot>
        <template v-if="data">{{ data }}</template>
      </slot>
    </div>
  </div>

</template>

<script src="./InfoItem.ts" lang="ts"/>
<style src="./InfoItem.scss" lang="scss"/>
