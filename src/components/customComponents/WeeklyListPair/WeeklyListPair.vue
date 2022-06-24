<template>
  <div>
    <div class="row q-col-gutter-sm q-col-gutter-sm-lg flex-grow-1">
      <div :class="$q.screen.gt.xs ? 'col-6' : 'full-width'">
        <WeeklyList
          :options="options"
          :list="winLooseStat?.winnersList"
          :type="WinLooseListType.WINNERS"
          :is-loading="isLoading"
        />
      </div>
      <div :class="$q.screen.gt.xs ? 'col-6' : 'full-width'">
        <WeeklyList
          :options="options"
          :list="winLooseStat?.losersList"
          :type="WinLooseListType.LOSERS"
          :is-loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script src="./WeeklyListPair.ts" lang="ts" />
<style src="./WeeklyListPair.scss" lang="scss" />
