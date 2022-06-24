<template>
  <BaseDropDownMenu label="filter" icon="eva-funnel-outline" header="Filter" position="right">
    <div class="dd-menu-list-item" :class="{ active: date.isVisible }">
      <BaseCheckbox
        name="isVisible"
        label="Date created"
        :is-checked="date.isVisible"
        v-model="date.isVisible"
      />
    </div>
    <div class="dd-menu-list-item-collapse" v-if="date.isVisible">
      <BaseInputDate
        name="dateFrom"
        placeholder="From"
      />
      <BaseInputDate
        name="dateFrom"
        placeholder="To"
        class="q-mt-2"
      />
    </div>
  </BaseDropDownMenu>
</template>

<script src="./DaoProposalFiltersForm.ts" lang="ts" />
<style src="./DaoProposalFiltersForm.scss" lang="scss" />
