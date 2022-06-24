<template>
  <BaseDropDownButton
    :label="value ? getLabel : placeholder"
    position="right"
    :class="`button-base w-full ${className}`"
    content-style="width: auto"
    content-class="ui-dd-date"
    icon="eva-calendar-outline"
    type="button"
  >
    <q-date v-model="value" class="ui-date" v-bind="$attrs" mask="YYYY-MM-DD hh:mm:ss A">
      <div class="row items-center justify-end">
        <q-btn v-close-popup label="Close" color="primary" flat />
      </div>
    </q-date>
  </BaseDropDownButton>
</template>
<script src="./BaseDropDownDate.ts" lang="ts" />
<style src="./BaseDropDownDate.scss" lang="scss" />
