<template>
  <div class="row q-gutter-sm items-center justify-center">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      target="_blank"
    >
    <q-icon
      class="opacity-60 q-pa-4 q-pa-md-1 cursor-pointer"
      :name="link.icon ? `fab fa-${link.icon}` : `fab fa-${link.name}`"
      size="18px"
    />
    </a>
  </div>
</template>

<script setup>
const links = [
  // { name: 'facebook', url: '', icon: 'facebook-square'},
  // { name: 'instagram', url: '' },
  // { name: 'linkedin', url: '' },
  // { name: 'twitter', url: '' },
  { name: 'telegram', url: 'https://t.me/+XoMNb0X3iTpmYzNk' },
  { name: 'github', url: 'https://github.com/daopulse' },
];

</script>

<style lang="scss" scoped></style>
