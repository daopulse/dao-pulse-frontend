<template>
  <q-checkbox
    @update:model-value="update"
    v-model="state"
    :name="name"
    :label="label"
    :disable="disabled"
    :checked-icon="star ? 'eva-star' : 'eva-checkmark'"
    :unchecked-icon="star ? 'eva-star-outline': ''"
    :class="`ui-checkbox ${className} ${star ? 'checkbox-star' : ''}`"
  />
</template>

<script src="./BaseCheckbox.ts" lang="ts" />
<style src="./BaseCheckbox.scss" lang="scss" />
<!--    -->
<!--    :value="checked ? value : ''"-->
