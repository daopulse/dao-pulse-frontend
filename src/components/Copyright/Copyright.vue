<template>
  <div class="text-center text-muted copyright">
    © {{ new Date().getFullYear() }} DAO Pulse. All rights reserved.
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.copyright {
  margin-top: 24px;
}
.screen--sm .copyright {
  margin-top: 44px;
}

.screen--xs .copyright {
  margin: 0 $content-px-mobile 0 $content-px-mobile;
  padding-top: 44px;
}
</style>
