<template>
  <div :class="`ui-card card-list card-list-${type}`">
    <div class="subtitle text-light">{{ getTitle() }}</div>
    <div v-if="!isLoading" class="card-content">
      <table class="card-list-table q-mt-4">
        <tbody>
        <tr v-for="(item, index) in list" :key="index" class="card-list-item">
          <td>{{ index + 1 }}</td>
          <td>{{ getName(item) }}</td>
          <td>
            {{
              getConvertedNumber({
                number: item.amount,
                currency: item.amountSymbol,
                fractionDigits: 1,
                hasSign: true
              })
            }}
          </td>
          <td class="percent text-right">
            {{
              getConvertedNumber({
                number: item.amountInPercent,
                hasSign: true,
                fractionDigits: 1,
                style: 'percent'
              })
            }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isLoading" class="card-content">
      <div class="q-mt-4">
        <q-skeleton class="win-loose-skeleton" />
      </div>
    </div>
  </div>
</template>

<script src="./WeeklyList.ts" lang="ts" />
<style src="./WeeklyList.scss" lang="scss" />
