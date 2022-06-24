<template>
  <div
    id="news-filters"
    :class="{ 'card-collapse': Screen.xs }"
  >
    <transition name="toggleable-content">
      <BaseForm
        class="row items-center q-col-gutter-md"
        :class="{'q-mt-none': Screen.xs }"
        :handleSubmit="submitForm"
        id="news-filter-form"
        v-show="!isCollapse"
      >
        <div :class="{ 'col-12': Screen.xs }">
          <BaseDropDownDate
            placeholder="Period"
            range
            className="button-sm"
            :name="NewsFilterFormFields.FROM_TO_DATES"
          />
        </div>
        <div :class="{ 'col-12': Screen.xs }" id="newsSource">
          <!--      <BaseDropDownButton-->
          <BaseDropDownMenu
            :label="
              values[NewsFilterFormFields.SOURCES]?.length
                ? `News Source (${
                    values[NewsFilterFormFields.SOURCES]?.length
                  })`
                : 'News Source'
            "
            header="News source"
            :position="Screen.sm ? 'left' : 'right'"
            list-style="width: 320px;"
            :className="`button-sm ${Screen.xs ? 'w-full' : ''}`"
            type="button"
            icon-toggle
          >
            <!--        class="button-base button-sm w-full"-->
            <div class="filter-list scroll">
              <div
                class="row items-center dd-menu-list-item clickable"
                v-for="item in dictionaries?.newsSourceNameList || []"
                :key="item.id"
              >
                <BaseCheckbox
                  :name="NewsFilterFormFields.SOURCES"
                  :value="item.name"
                  :label="item.name"
                />
              </div>
            </div>
          </BaseDropDownMenu>
        </div>
        <div :class="{ 'col-12': Screen.xs }" id="daoName">
          <!--      <BaseDropDownButton-->
          <BaseDropDownMenu
            :label="
              values[NewsFilterFormFields.DAO_NAMES]?.length
                ? `DAO name (${values[NewsFilterFormFields.DAO_NAMES]?.length})`
                : 'DAO Name'
            "
            header="DAO Name"
            :position="Screen.sm ? 'left' : 'right'"
            :disabled="!!values[NewsFilterFormFields.IS_ONLY_WATCHED]"
            list-style="width: 320px;"
            :className="`button-sm ${Screen.xs ? 'w-full' : ''}`"
            icon-toggle
          >
            <!--        class="button-base button-sm w-full"-->
            <div class="dd-menu-content q-mt-1 w-full">
              <BaseInputText
                debounce="300"
                name="searchedName"
                placeholder="Enter DAO name"
                searchInput
              />
            </div>
            <div
              class="q-mt-3 dd-menu-content"
              v-if="values[NewsFilterFormFields.DAO_NAMES]?.length"
            >
              <BaseChip
                v-for="item in values[NewsFilterFormFields.DAO_NAMES]"
                :label="item"
                :key="item"
                class="chip-base"
                removable
                @remove="removeDao(item)"
              />
            </div>
            <div class="dd-menu-divider" />
            <div class="filter-list scroll">
              <div
                class="row items-center dd-menu-list-item clickable"
                v-for="item in dictionaries?.daoNamesList.filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(values?.searchedName?.toLowerCase() || '')
                ) || []"
                :key="item.id"
              >
                <BaseCheckbox
                  :name="NewsFilterFormFields.DAO_NAMES"
                  :value="item.name"
                  :label="item.name"
                />
              </div>
            </div>
          </BaseDropDownMenu>
        </div>
        <div class="order-xs-last order-sm-none order-md-first" :class="{ 'col-12': Screen.xs }">
          <BaseButton
            v-if="!isClearForm"
            class="button-link text-primary"
            label="Clear filters"
            icon="eva-close"
            type="reset"
            @click="resetForm"
          />
        </div>
        <div class="order-md-first col-12 col-md-auto">
          <BaseToggle
            :name="NewsFilterFormFields.IS_ONLY_WATCHED"
            :label="hasWatchedDao ? getNewsFilterFieldOptions(NewsFilterFormFields.IS_ONLY_WATCHED).placeholder : 'No watched DAO'"
            :disabled="!hasWatchedDao"
            value="true"
            :is-checked="!!values[NewsFilterFormFields.IS_ONLY_WATCHED]"
          />
        </div>
      </BaseForm>
    </transition>
    <div class="text-center" v-if="Screen.xs">
      <BaseButton
        :label="isCollapse ? 'Show filters' : 'Hide filters'"
        icon="eva-funnel-outline"
        :icon-right="
          isCollapse ? 'eva-arrow-ios-downward' : 'eva-arrow-ios-upward'
        "
        class="button-text q-py-xs"
        @click="toggleCollapse"
      />
    </div>
  </div>
</template>

<script src="./NewsFilterForm.ts" lang="ts" />
<style src="./NewsFilterForm.scss" lang="scss" />
