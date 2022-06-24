<template>
  <div class="wrapper">
    <q-toggle
      v-model="state"
      v-bind = "$attrs"
      :toggle-indeterminate="false"
      :name="name"
      :class="[`ui-toggle ${className}`, {'toggle-labeled': label}]"
      :label="label"
      :disable="disabled"
      @update:model-value="update"
    />
  </div>
</template>

<script src="./BaseToggle.ts" lang="ts" />
<style src="./BaseToggle.scss" lang="scss" />
