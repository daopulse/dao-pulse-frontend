<template>
  <div class="subscribe" :class="{'full-width': $q.screen.lt.sm}">
    <div class="row items-center">
      <div class="h3">Subscribe and never miss DAO news</div>
      <TooltipIcon tooltip="Tooltip text" size="16px" />
    </div>
    <div class="text-muted q-mt-2">
      We send letters once a week, every Monday.
    </div>
    <div class="column row-sm items-sm-start q-mt-2">
      <BaseInputText
        class="ui-subscribe-input q-mt-3"
        v-model="userMail"
        placeholder="Enter your e-mail"
        name="subscribeEmail"
      />
      <BaseButton class="button-primary q-ml-sm-3 q-mt-3" label="Subscribe" />
    </div>
    <div class="text-muted fs-xs q-mt-1" v-if="$q.screen.gt.md">
      Add to your favorites the DAOs you want to subscribe to
    </div>
  </div>
</template>

<script setup>
import TooltipIcon from '@/components/customComponents/TooltipIcon/TooltipIcon.vue';
import BaseInputText from '@/components/baseComponents/BaseInputText/BaseInputText.vue';
import { ref } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const userMail = ref();
</script>
<style lang="scss" scoped>

</style>
