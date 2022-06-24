<template>
  <q-badge
    :label="label"
    class="ui-badge"
    :class="getClass()"
    :align="align"
    :floating="floating"
  >
    <slot></slot>
  </q-badge>
</template>

<script src="./BaseBadge.ts" lang="ts" />
<style src="./BaseBadge.scss" lang="scss" />
