<template>
  <div class="column">
      <div class="h1 text-bold">{{ name }}</div>
      <div class="row items-center q-mt-2">
      <BaseBadge
        :type="status ? 'positive' : 'negative'"
        :label="status ? 'Active' : 'Inactive'"
      />
        <div class="h4 text-light q-ml-2"> {{ symbol }}</div>
    </div>
  </div>

</template>

<script src="./HeaderTitle.ts" lang="ts" />
<style src="./HeaderTitle.scss" lang="scss"/>
