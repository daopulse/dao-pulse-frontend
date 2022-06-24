<template>
  <div class="ui-token-group">
    <template v-if="tokens">
      <div
        :class="`inline flex flex-center ${imgPlaceholder ? 'token-group-item-xl': 'token-group-item'}`"
        v-for="token in visibleList"
        :key="token.symbol"
      >
        <TokenIcon :source="token.icon" :size="imgPlaceholder ? '64' : iconSize"> </TokenIcon>
        <q-tooltip class="ui-tooltip" anchor="top middle" self="bottom middle" v-if="!imgPlaceholder">
          {{ token.symbol }}
        </q-tooltip>
      </div>
      <template v-if="getPlus()">
        <BaseTag
          :label="`+ ${getPlus()}`"
          is-tooltip
          class="q-ml-2"
          v-if="!imgPlaceholder"
        >
          <template v-slot:tooltip>
            <div class="q-gutter-sm">
              <div
                class="row items-center"
                v-for="token in tooltipList"
                :key="token.symbol"
              >
                <TokenIcon :source="token.icon" :size="iconSize" />
                <div class="q-ml-2">{{ token.symbol }}</div>
              </div>
            </div>
          </template>
        </BaseTag>
        <div class="counter-plus-xl flex flex-center" v-else>
          {{ `+ ${getPlus()}` }}
        </div>
      </template>
    </template>
    <template v-else>No data</template>
  </div>
</template>

<script src="./TokenGroup.ts" lang="ts" />
<style src="./TokenGroup.scss" lang="scss" />
