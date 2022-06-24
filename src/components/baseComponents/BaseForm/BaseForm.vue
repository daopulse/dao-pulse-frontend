<template>
  <q-form @submit="submitForm" :class="`${className}`">
    <slot></slot>
  </q-form>
</template>

<script src="./BaseForm.ts" lang="ts" />
<style src="./BaseForm.scss" lang="scss" />
