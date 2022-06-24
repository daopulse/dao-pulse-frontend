<template>
  <q-chip
    :removable="removable"
    :clickable="clickable"
    @remove="remove()"
    @click="click()"
    :class="`ui-chip ${className}`"
    :icon="icon"
  >
    {{ label }}
  </q-chip>
</template>

<script src="./BaseChip.ts" lang="ts" />
<style src="./BaseChip.scss" lang="scss" />
