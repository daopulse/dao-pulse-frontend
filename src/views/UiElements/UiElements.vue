<template>
  <div class="h1">BaseButton</div>
  <div class="q-gutter-md q-mt-md">
    <BaseButton class-name="button-base" label="Button base" />
    <BaseButton
      class-name="button-base"
      label="Button base disabled"
      disabled
    />
    <BaseButton
      class-name="button-base button-icon"
      icon="eva-arrow-ios-downward"
    />
    <BaseButton class-name="button-base button-sm" label="Button base sm" />
    <BaseButton
      class-name="button-base button-sm button-icon"
      icon="eva-arrow-ios-downward"
    />
  </div>
  <div class="q-gutter-md q-mt-sm">
    <BaseButton class-name="button-primary" label="Button primary" />
    <BaseButton
      class-name="button-primary"
      label="Button primary disabled"
      disabled
    />
    <BaseButton
      class-name="button-primary button-sm"
      label="Button primary sm"
    />
    <BaseButton
      class="button-primary button-md button-icon"
      icon="eva-arrow-ios-downward"
    />
    <BaseButton class-name="button-icon" icon="eva-close" />
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseDropDownButton</div>
    <BaseDropDownButton label="Dropdown button" class="button-base" />
    <BaseDropDownButton label="Dropdown button" class="button-text" />
  </div>
  <div class="q-gutter-md q-mt-xl" style="max-width: 300px">
    <div class="h1">BaseSelect</div>
    <BaseSelect
      :options="selectOptions"
      v-model="selectedOption"
      label="Select"
    />
    <BaseSelect :options="selectOptions" label="Select" multiple use-chips />
  </div>
  <div class="q-gutter-md q-mt-xl" style="max-width: 300px">
    <div class="h1">BaseInputText</div>
    <BaseInputText type="text" placeholder="Min value" closable />
  </div>
  <div class="q-gutter-md q-mt-xl" style="max-width: 300px">
    <div class="h1">SearchInput</div>
    <BaseInputText
      :value="searchValue"
      name="search"
      placeholder="Search"
      clearable
      search-input
    />
    <BaseInputText
      :value="searchValue"
      name="search"
      placeholder="Search"
      search-input
      class-name="input-sm"
    />
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseTooltipIcon</div>
    <div class="row items-center">
      Text line width tooltip icon
      <TooltipIcon
        tooltip="color: primary, size: unset, no-space: unset"
        color="primary"
      />
      <TooltipIcon
        tooltip="color: unset, size: 1.5rem, no-space: unset"
        size="1.5rem"
      />
    </div>
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">ExternalLink</div>
    <ExternalLink label="Label" url="http://localhost:8080/" />
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">ClipboardCopy</div>
    <ClipboardCopy data="1234567890987654321" />
    <ClipboardCopy data="1234567890987654321" text-ellipsis />
  </div>

  <div class="q-gutter-md q-mt-xl">
    <div class="h1">Social Icons</div>
    <SocialLink name="TWITTER" url="" />
    <SocialLink name="Telegram" url="" />
    <SocialLink name="reddit" url="" />
    <SocialLink name="youtube" url="" />
    <SocialLink name="facebook" url="" />
    <SocialLink name="medium" url="" />
    <SocialLink name="Discord" url="" />
  </div>

  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseBadge</div>
    <div class="row items-baseline q-gutter-md">
      <BaseBadge label="Success" type="positive" />
      <BaseBadge label="Danger" type="negative" />
      <BaseBadge label="Base" />
      <BaseBadge label="Info" type="info" />
      <BaseBadge label="Info" outlined />
      <BaseButton label="Badge floating" class="button-text"
        ><BaseBadge label="Floating" floating
      /></BaseButton>
    </div>
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseTag</div>
    <div class="row items-baseline q-gutter-md">
      <BaseTag label="not tooltip" />
      <BaseTag label="with tooltip" is-tooltip>
        <template v-slot:tooltip> Tooltip content </template>
      </BaseTag>
      <BaseTag label="disabled" is-tooltip disabled>
        <template v-slot:tooltip> Tooltip content </template>
      </BaseTag>
    </div>
  </div>

  <div class="q-gutter-md q-mt-xl">
    <SectionTitle
      title="Section title"
      subtitle="subtitle"
      tooltip="tooltip" />
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseChip</div>
    <BaseChip label="chip-primary" class-name="chip-primary" removable />
    <BaseChip label="chip-sm" class-name="chip-primary chip-sm" removable />
    <BaseChip label="chip-base" class-name="chip-base" removable />
    <BaseChip label="chip-sm" class-name="chip-base chip-sm" removable />
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseCheckbox</div>
    <BaseCheckbox :is-checked="true" />
    <BaseCheckbox />
  </div>
  <div class="q-gutter-md q-mt-xl">
    <div class="h1">BaseToggle</div>
    <BaseToggle :is-checked="true" />
    <BaseToggle />
    <BaseToggle label="Toggle with label" />
  </div>

  <div class="q-gutter-md q-mt-xl">
    <div class="h1">TokenGroup</div>
    <TokenGroup :tokens="tokenGroup" />
    <div class="h1">TokenGroup (prop img-placeholder)
    </div>
    <TokenGroup :tokens="tokenGroup" img-placeholder :icon-count="3" />
  </div>

</template>

<script setup>
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import TooltipIcon from '@/components/customComponents/TooltipIcon/TooltipIcon.vue';
import SectionTitle from '@/components/customComponents/SectionTitle/SectionTitle.vue';
import BaseInputText from '@/components/baseComponents/BaseInputText/BaseInputText.vue';
import BaseChip from '@/components/baseComponents/BaseChip/BaseChip.vue';
import BaseCheckbox from '@/components/baseComponents/BaseCheckbox/BaseCheckbox.vue';
import BaseSelect from '@/components/baseComponents/BaseSelect/BaseSelect.vue';
import BaseBadge from '@/components/baseComponents/BaseBadge/BaseBadge.vue';
import { ref } from 'vue';
import BaseToggle from '@/components/baseComponents/BaseToggle/BaseToggle.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import ClipboardCopy from '@/components/customComponents/ClipboardCopy/ClipboardCopy.vue';
import SocialLink from '@/components/customComponents/SocialLink/SocialLink.vue';
import BaseTag from '@/components/baseComponents/BaseTag/BaseTag.vue';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';

const searchValue = '';

const selectOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];
const selectedOption = ref(null);

const tokenGroup = [
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
    symbol: 'COMP',
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png',
    symbol: 'CRV',
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png',
    symbol: 'APE',
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
    symbol: 'AAVE',
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7486.png',
    symbol: 'RGT',
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2586.png',
    symbol: 'SNX',
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5617.png',
    symbol: 'UMA',
  },
];
</script>

<style scoped></style>
