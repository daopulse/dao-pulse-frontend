<template>
  <div class="ui-tag" :class="{'clickable': isTooltip, 'disabled': disabled}">
    {{ label }}
    <q-tooltip class="ui-tooltip" anchor="top middle" self="bottom middle" v-if="isTooltip && !disabled">
      <slot name="tooltip"></slot>
    </q-tooltip>

  </div>
</template>

<script src="./BaseTag.ts" lang="ts" />
<style src="./BaseTag.scss" lang="scss" />
