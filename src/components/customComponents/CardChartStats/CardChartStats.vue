<template>
  <div class="row items-center">
    <div class="h1 q-mr-3">
      {{
        getConvertedNumber({
          number: current,
          currency: symbol,
          fractionDigits: 1
        })
      }}
    </div>
    <div>
      <div :class="`caption ${getColor(month.value)}`">
        {{
          getConvertedNumber({
            number: month.value,
            currency: symbol,
            fractionDigits: 1,
            hasSign: true
          })
        }} in month
      </div>
      <div v-if="hasWeekChange" :class="`caption ${getColor(week.value)}`">
        {{
          getConvertedNumber({
            number: week.value,
            currency: symbol,
            fractionDigits: 1,
            hasSign: true
          })
        }} in week
      </div>
    </div>

  </div>

</template>

<script src="./CardChartStats.ts" lang="ts" />
<style src="./CardChartStats.scss" lang="scss" />
