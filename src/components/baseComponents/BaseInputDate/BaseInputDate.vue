<template>
  <q-input
    v-model="value"
    :name="name"
    :disable="disabled"
    type="text"
    :input-class="className"
    :placeholder="placeholder"
    :error="false"
    autocomplete
    no-error-icon
    outlined
    :class="`ui-input no-error ${className}`"
    mask="date"
    :rules="['date']"
  >
    <template v-slot:append>
      <q-icon name="eva-calendar-outline">
        <q-popup-proxy
          ref="qDateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="value" class="ui-date">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script src="./BaseInputDate.ts" lang="ts" />
<style src="./BaseInputDate.scss" lang="scss" />
