<template>
  <q-btn
    v-bind="$attrs"
    :label="label"
    :loading="isLoading"
    :type="type"
    :to="to"
    :disable="disabled"
    :class="`ui-button ${className}`"
    @click="click"
    flat
  >
    <slot></slot>
  </q-btn>
</template>

<script src="./BaseButton.ts" lang="ts"/>
<style src="./BaseButton.scss" lang="scss"/>
