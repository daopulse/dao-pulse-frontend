<template>
  <div class="wrapper about-wrapper">
    <div class="row q-col-gutter-x-xl">
      <div class="col-12 col-md-6 q-mt-8">
        <q-expansion-item :default-opened="Screen.gt.xs" :disable="Screen.gt.xs" class="not-muted">
          <template v-slot:header>
            <div class="h2 flex flex-grow-1 self-center">What is DAO Pulse?</div>
          </template>
          <div class="text-lg text-light q-mt-5">{{ about.whatIs }}</div>
        </q-expansion-item>
      </div>
      <div class="col-12 col-md-6 q-mt-8">
        <q-expansion-item :default-opened="Screen.gt.xs" :disable="Screen.gt.xs" class="not-muted">
          <template v-slot:header>
            <div class="h2 flex flex-grow-1 self-center">What is the goal?</div>
          </template>
          <div class="text-lg text-light q-mt-5">{{ about.goal }}</div>
        </q-expansion-item>
      </div>
    </div>
    <div class="col-12 col-md-auto q-mt-8">
      <q-expansion-item :default-opened="Screen.gt.xs" :disable="Screen.gt.xs" class="not-muted">
        <template v-slot:header>
          <div class="h2 flex flex-grow-1 self-center" v-if="Screen.xs">DAO Pulse Team</div>
        </template>
        <div class="q-mt-5">
          <div class="row q-col-gutter-xl justify-md-center">
            <div
              class="profile-link col-12 col-sm-4 col-md-auto q-pb-sm-md q-pr-md-10"
              v-for="(item, index) in about.team"
              :key="item.linkedin"
              :style="`order: ${index + 1}`"
            >
              <a :href="item.linkedin" target="_blank">
                <div class="q-mr-2">
                  <q-icon name="fab fa-linkedin" size="24px" />
                </div>
                <div class="text-lg">{{ item.name }}</div>
              </a>
            </div>
            <div class="col-12 q-m-0 row-wrapper" v-if="Screen.gt.sm" />
          </div>
        </div>
      </q-expansion-item>

    </div>
  </div>
</template>

<script src="./About.ts" lang="ts" />
<style src="./About.scss" lang="scss" />
