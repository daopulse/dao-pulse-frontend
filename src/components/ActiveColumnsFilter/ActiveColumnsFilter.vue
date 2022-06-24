<template>
  <BaseDropDownButton
    label="columns"
    class="button-base button-lg"
    icon="eva-grid-outline"
    header="Customize table"
  >
    <div class="columns-filter">
      <div class="caption text-muted q-mb-3">
        Your columns ({{ activeColumnState.length }}/{{
          inActiveColumnState.length + activeColumnState.length
        }})
      </div>
      <div class="active-columns">
        <BaseChip
          v-for="(item) in activeColumnState"
          :key="item.name"
          :label="item.label"
          class-name="chip-primary"
          removable
          @remove="toggleColumn(item, false)"
        />
      </div>
      <div class="dd-menu-divider" />
      <div class="caption text-muted q-mb-3">
        Сolumns that you can add to the table
      </div>
      <BaseInputText
        name="queryColumn"
        label="Type something"
        v-model="query"
        placeholder="Type something"
        search-input
        class-name="input-lg inline"
      />
      <div class="inactive-columns">
        <BaseChip
          v-for="item in inActiveColumnState"
          :key="item.name"
          :label="item.label"
          class-name="chip-base"
          @click="toggleColumn(item, true)"
        />
      </div>
    </div>
  </BaseDropDownButton>
</template>

<script src="./ActiveColumnsFilter.ts" lang="ts" />
<style src="./ActiveColumnsFilter.scss" lang="scss" />
