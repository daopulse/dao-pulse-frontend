<template>
  <div class="ui-tooltip-icon" :class="[getClass(), { 'q-ml-xs': !noSpace }]">
    <q-icon name="eva-question-mark-circle-outline" :size="size" />
    <q-tooltip class="ui-tooltip" anchor="top middle" self="bottom middle">
      <slot>
        {{ tooltip }}
      </slot>
    </q-tooltip>
  </div>
</template>

<script src="./TooltipIcon.ts" lang="ts" />
<style src="./TooltipIcon.scss" lang="scss" />
