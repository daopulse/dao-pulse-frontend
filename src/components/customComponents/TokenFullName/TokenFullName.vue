<template>
  <router-link
    class="row items-center no-wrap"
    :to="{ name: RouterNames.DAO_PAGE, params: { id: name } }"
  >
    <TokenIcon :source="logo" :size="logoSize" />
    <div class="q-ml-2">
      <div class="subtitle text-wrap">{{ name }}</div>
      <div class="caption text-light">
        {{ symbol }}
      </div>
    </div>
  </router-link>
</template>

<script src="./TokenFullName.ts" lang="ts" />
<style src="./TokenFullName.scss" lang="scss" />
