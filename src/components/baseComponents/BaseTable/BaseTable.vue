<template>
  <TableSkeleton
    v-if="isLoading"
    :cols="skeletonCols"
    :rows="skeletonRows"
    :columns="skeletonVisibleColumn"
  />
  <q-table
    v-else
    binary-state-sort
    :rows="rows"
    :columns="columns"
    :row-key="rowKeyName"
    :visible-columns="visibleColumns"
    :rows-per-page-options="defaultRowPerPagesOptions"
    :loading="isLoading"
    :class="`ui-table ${className}`"
    :selection="selection"
    :wrap-cells="wrapCells"
    hide-no-data
    @request="onRequest"
    v-model:pagination="paginator"
    :selected-rows-label="selectedRowsLabel"
    :pagination-label="paginationLabel"
  >
    <template v-slot:header-selection="scope">
      <q-checkbox
        v-model="scope.selected"
        checked-icon="eva-star"
        unchecked-icon="eva-star-outline"
        class="hidden"
      />
    </template>
    <template v-slot:body-selection="scope">
      <q-checkbox
        v-model="scope.selected"
        checked-icon="eva-star"
        unchecked-icon="eva-star-outline"
      />
    </template>
    <template v-for="(_, name) in slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </q-table>
</template>

<script src="./BaseTable.ts" lang="ts" />
<style src="./BaseTable.scss" lang="scss" />
