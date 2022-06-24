<template>
  <q-input
    v-if="type === InputTypes.NUMBER"
    v-model.number="value"
    :name="name"
    :error-message="errorMessage"
    :error="!!errorMessage"
    :disable="disabled"
    :loading="isLoading"
    :type="type"
    :debounce="debounce"
    :input-class="className"
    :hint="hint"
    :placeholder="placeholder"
    clear-icon="eva-close"
    no-error-icon
    autocomplete
    clearable
    outlined
    :class="
      searchInput
        ? `ui-search-input no-error ${className}`
        : `ui-input ${className}`
    "
  />
  <q-input
    v-else
    v-model="value"
    :name="name"
    :error-message="errorMessage"
    :error="!!errorMessage"
    :disable="disabled"
    :loading="isLoading"
    :type="type"
    :debounce="debounce"
    :input-class="className"
    :hint="hint"
    :placeholder="placeholder"
    clear-icon="eva-close"
    autocomplete
    :clearable="searchInput ? true : clearable"
    no-error-icon
    outlined
    :class="
      searchInput
        ? `ui-search-input no-error ${className}`
        : `ui-input ${className}`
    "
  >
    <template v-slot:prepend>
      <q-icon name="eva-search-outline" v-if="searchInput" />
    </template>
    <template v-slot:append>
      <q-icon name="eva-calendar-outline" v-if="dateInput" />
    </template>
  </q-input>
</template>
<script src="./BaseInputText.ts" lang="ts" />
<style src="./BaseInputText.scss" lang="scss" />
