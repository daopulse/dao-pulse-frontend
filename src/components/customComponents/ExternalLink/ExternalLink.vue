<template>
  <a
    class="row inline no-wrap items-center text-primary"
    :class="disabled ? 'disabled' : 'cursor-pointer'"
    :href="url"
    target="_blank"
  >
    <div class="q-mr-1 text-link" v-if="label">
      {{ label }}
    </div>
      <q-icon class="eva eva-external-link" size="16px" />
  </a>
</template>

<script src="./ExternalLink.ts" lang="ts" />
<style src="./ExternalLink.scss" lang="scss" />
