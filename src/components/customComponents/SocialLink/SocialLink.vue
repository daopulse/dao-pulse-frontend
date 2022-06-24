<template>
  <a
    class="row inline no-wrap items-center"
    :class="disabled ? 'disabled' : 'cursor-pointer'"
    :href="url"
    target="_blank"
  >
    <q-icon
      :name="icons[name.toLowerCase()]"
      size="16px"
    />
  </a>
</template>

<script src="./SocialLink.ts" lang="ts" />
<style src="./SocialLink.scss" lang="scss" />
