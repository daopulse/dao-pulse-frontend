<template>
  <div>
    DAO Pulse Score =
    <div
      class="no-wrap"
      v-for="(item, index) in scoreFormula.summand"
      :key="index"
    >
      {{ item }}
      <q-icon
        class="eva eva-plus"
        v-if="index < scoreFormula.summand.length - 1"
      />
    </div>
    <div class="q-mt-3">
      <div class="no-wrap" v-for="item in multiplier" :key="item">
        {{ item }} = {{ scoreFormula.multiplier[item] }}
      </div>
    </div>

  </div>
</template>

<script src="./DaoScoreTooltip.ts" lang="ts"/>
<style src="./DaoScoreTooltip.scss" lang="scss"/>
