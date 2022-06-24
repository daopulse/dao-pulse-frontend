<template>
  <q-markup-table class="ui-table ui-table-skeleton">
    <thead>
      <tr>
        <th v-for="n in columns ? columns.length : +cols" :key="`col_${n}`">
          <template v-if="columns">
            {{ columns[n - 1] }}
          </template>
          <q-skeleton type="text" v-else />
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="n in +rows" :key="n">
        <td v-for="m in columns ? columns.length : +cols" :key="m">
          <q-skeleton type="text" />
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script src="./TableSkeleton.ts" lang="ts" />
<style src="./TableSkeleton.scss" lang="scss" />
