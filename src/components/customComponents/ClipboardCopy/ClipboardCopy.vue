<template>

  <div
    class="row inline no-wrap items-center"
    @click="copyText"
    :class="disabled ? 'disabled' : 'cursor-pointer'"
  >
    <div style="position: relative; left: 50%">
      <div
        v-if="visibleTooltip"
        class="ui-card copied-tooltip"
      >
        Copy
      </div>
    </div>
    <div class="q-mr-1 text-link">
      {{ textEllipsis ? ellipsisText(data, 7) : data }}
    </div>
    <q-icon class="eva eva-copy-outline" size="16px" />
  </div>
</template>

<script src="./ClipboardCopy.ts" lang="ts" />
<style src="./ClipboardCopy.scss" lang="scss" />
