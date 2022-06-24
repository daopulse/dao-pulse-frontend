<template>
  <q-select
    v-model="value"
    :options="options"
    :label="label"
    :error-message="errorMessage"
    :disable="disabled"
    :loading="isLoading"
    :input-class="className"
    :hint="hint"
    :multiple="multiple"
    :use-chips="useChips"
    :clearable="clearable"
    :emit-value="emitValue"
    :map-options="emitValue"
    :for="forId"
    :class="`ui-select ${className}`"
    :dense="true"
    :behavior="behavior"
    no-error-icon
    options-selected-class="ui-select-option-active"
    popup-content-class="ui-select-options"
    outlined
  />
</template>

<script src="./BaseSelect.ts" lang="ts" />
<style src="./BaseSelect.scss" lang="scss" />
