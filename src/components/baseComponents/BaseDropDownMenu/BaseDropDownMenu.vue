<template>
  <div class="ui-dd-menu-area">
    <q-btn
      :loading="isLoading"
      type="button"
      :to="to"
      :disable="disabled"
      @click="click"
      :class="`ui-dd-menu-btn ${className}`"
      v-bind="$attrs"
    >
        <div class="block">{{ label }}</div>
        <i
          class="q-icon eva q-ml-auto eva-arrow-ios-downward-outline q-btn-dropdown__arrow "
          :class="{ 'rotate-180': isVisible }"
          aria-hidden="true"
          role="presentation"
          v-if="iconToggle"
        >
        </i>
    </q-btn>
      <div
        v-show="isVisible"
        :class="`ui-dd-menu-list menu-list-${position}`"
        :style="listStyle"
      >
        <div class="row items-center justify-between dd-menu-header">
          <div>
            {{ header }}
          </div>
          <q-icon
            name="eva-close"
            @click="close"
            class="cursor-pointer q-ml-auto"
          />
        </div>
        <div class="dd-menu-divider" v-if="header" />
        <slot></slot>
      </div>
  </div>
</template>

<script src="./BaseDropDownMenu.ts" lang="ts" />
<style src="./BaseDropDownMenu.scss" lang="scss" />
